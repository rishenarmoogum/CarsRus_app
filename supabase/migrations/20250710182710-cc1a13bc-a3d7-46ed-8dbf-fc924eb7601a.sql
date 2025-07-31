
-- Add a new column "featured" to the cars table
ALTER TABLE public.cars 
ADD COLUMN featured BOOLEAN NOT NULL DEFAULT false;

-- Create an index on the featured column for better query performance
CREATE INDEX idx_cars_featured ON public.cars (featured);

-- Add a comment to document the column purpose
COMMENT ON COLUMN public.cars.featured IS 'Indicates if the car should be featured in the first 6 cards on the home page';
