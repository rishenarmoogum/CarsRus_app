-- Add new columns to cars table for engine capacity and doors
ALTER TABLE public.cars 
ADD COLUMN engine_capacity INTEGER,
ADD COLUMN doors INTEGER;