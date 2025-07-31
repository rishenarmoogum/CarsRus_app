
-- Update the calculate_monthly_lease function to deduct Rs 200,000 from price and round to zero decimal places
CREATE OR REPLACE FUNCTION calculate_monthly_lease()
RETURNS TRIGGER AS $$
BEGIN
  -- Calculate monthly lease using mortgage formula with Rs 200,000 deducted from price
  -- Annual rate: 10%, Monthly rate: 10%/12 = 0.008333
  -- Term: 84 months
  -- Deduct Rs 200,000 from price before calculation
  DECLARE
    adjusted_price DECIMAL;
  BEGIN
    adjusted_price = GREATEST(NEW.price - 200000, 0); -- Ensure non-negative value
    NEW.monthly_lease = ROUND(
      adjusted_price * (0.008333 * POWER(1.008333, 84)) / (POWER(1.008333, 84) - 1),
      0  -- Zero decimal places
    );
    RETURN NEW;
  END;
END;
$$ LANGUAGE plpgsql;

-- Update existing records with the new calculation
UPDATE public.cars 
SET monthly_lease = ROUND(
  GREATEST(price - 200000, 0) * (0.008333 * POWER(1.008333, 84)) / (POWER(1.008333, 84) - 1),
  0  -- Zero decimal places
)
WHERE monthly_lease IS NOT NULL OR monthly_lease IS NULL;
