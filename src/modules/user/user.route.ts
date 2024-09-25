import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { userZodValidation } from './user.validation';
import { userController } from './user.controller';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(userZodValidation.createUserZodValidation),
  userController.createUser,
);

router.post(
  '/signin',
  validateRequest(userZodValidation.loginZodValidation),
  userController.signIn,
);

router.get('/', userController.getAllUser);

export const userRouter = router;
