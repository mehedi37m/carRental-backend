import { z } from 'zod';

// Zod validation for time format (24-hour format)
const timeFormat = z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
  message: 'Time must be in 24-hour format (HH:mm)',
});

const bookingValidation = z.object({
  body: z.object({
    date: z.string().date(),
    car: z.string().nonempty('Car ID is required'),
    startTime: timeFormat,
  }),
});

export const bookingZodValidation = {
  bookingValidation,
};
