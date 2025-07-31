
-- Add monthly_lease column to the cars table
ALTER TABLE public.cars 
ADD COLUMN monthly_lease DECIMAL(10,2);

-- Update existing records with calculated monthly lease amounts
-- Using mortgage formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
-- Where: P = principal (price), r = monthly interest rate (10%/12), n = number of payments (84)
UPDATE public.cars 
SET monthly_lease = ROUND(
  price * (0.008333 * POWER(1.008333, 84)) / (POWER(1.008333, 84) - 1),
  2
)
WHERE monthly_lease IS NULL;

-- Create a function to automatically calculate monthly lease for new cars
CREATE OR REPLACE FUNCTION calculate_monthly_lease()
RETURNS TRIGGER AS $$
BEGIN
  -- Calculate monthly lease using mortgage formula
  -- Annual rate: 10%, Monthly rate: 10%/12 = 0.008333
  -- Term: 84 months
  NEW.monthly_lease = ROUND(
    NEW.price * (0.008333 * POWER(1.008333, 84)) / (POWER(1.008333, 84) - 1),
    2
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically calculate monthly lease on insert/update
CREATE TRIGGER trigger_calculate_monthly_lease
  BEFORE INSERT OR UPDATE OF price ON public.cars
  FOR EACH ROW
  EXECUTE FUNCTION calculate_monthly_lease();
