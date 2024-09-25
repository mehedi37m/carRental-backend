import { z } from 'zod';

const carFeaturesZod = z.enum([
  'Bluetooth',
  'Air Conditioning (AC)',
  'Sunroof',
  'Navigation System',
  'Heated Seats',
]);

const carColorsZod = z.enum(['Black', 'White', 'Silver', 'Blue']);

const createCarZodValidation = z.object({
  body: z.object({
    name: z.string().nonempty('Name is required'),
    description: z.string().nonempty('Description is required'),
    color: carColorsZod,
    isElectric: z.boolean(),
    status: z.enum(['available', 'unavailable']).optional(),
    features: z.array(carFeaturesZod),
    pricePerHour: z.string().nonempty('Price per hour is required'),
    isDeleted: z.boolean().default(false),
  }),
});
const updateCarZodValidation = z.object({
  body: z.object({
    name: z.string().nonempty('Name is required').optional(),
    description: z.string().nonempty('Description is required').optional(),
    color: carColorsZod.optional(),
    isElectric: z.boolean().optional(),
    status: z.enum(['available', 'unavailable']).optional(),
    features: z.array(carFeaturesZod).optional(),
    pricePerHour: z.string().nonempty('Price per hour is required').optional(),
    isDeleted: z.boolean().default(false).optional(),
  }),
});

export const carZodValidation = {
  createCarZodValidation,
  updateCarZodValidation,
};
