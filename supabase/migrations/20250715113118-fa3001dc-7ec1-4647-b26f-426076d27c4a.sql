-- Add upload column to cars table
ALTER TABLE public.cars 
ADD COLUMN upload boolean NOT NULL DEFAULT false;

-- Update existing cars to have upload = true so they remain visible
UPDATE public.cars 
SET upload = true;