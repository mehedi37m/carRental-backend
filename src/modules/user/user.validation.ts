import { z } from 'zod';

const createUserZodValidation = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    role: z.enum(['user', 'admin']).default('user'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    phone: z.string(),
    address: z.string(),
  }),
});

const updateUserZodValidation = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required').optional(),
    email: z.string().email('Invalid email address').optional(),
    role: z.enum(['user', 'admin']).default('user').optional(),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
  }),
});

const loginZodValidation = z.object({
  body: z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  }),
});

export const userZodValidation = {
  createUserZodValidation,
  updateUserZodValidation,
  loginZodValidation,
};
