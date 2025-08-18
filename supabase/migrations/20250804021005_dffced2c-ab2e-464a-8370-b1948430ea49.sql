-- Drop the old function and create a new secure one
DROP FUNCTION IF EXISTS get_car_models();

-- Create a function to get car models data with proper security
CREATE OR REPLACE FUNCTION get_car_models()
RETURNS TABLE (
  "SN" bigint,
  "Brand" text,
  "Model" text
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT cm."SN", cm."Brand", cm."Model"
  FROM "Car Model" cm
  ORDER BY cm."Brand" ASC;
END;
$$;