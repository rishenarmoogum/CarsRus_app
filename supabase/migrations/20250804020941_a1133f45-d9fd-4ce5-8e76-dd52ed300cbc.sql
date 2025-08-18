-- Create a function to get car models data
CREATE OR REPLACE FUNCTION get_car_models()
RETURNS TABLE (
  "SN" bigint,
  "Brand" text,
  "Model" text
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT cm."SN", cm."Brand", cm."Model"
  FROM "Car Model" cm
  ORDER BY cm."Brand" ASC;
END;
$$;