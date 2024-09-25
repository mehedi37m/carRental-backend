import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { carZodValidation } from './car.validation';
import { carController } from './car.controller';
import auth from '../../middleware/auth';

const router = express.Router();

router.post(
  '/create',
  auth(['admin']),
  validateRequest(carZodValidation.createCarZodValidation),
  carController.createCarIntoDB,
);
router.get('/', carController.getAllCarFromDB);
router.get('/:id', carController.getSingleCarFromDB);
router.delete('/:id', auth(['admin']), carController.deleteCarFromDB);
router.patch(
  '/update/:id',
  auth(['admin']),
  validateRequest(carZodValidation.updateCarZodValidation),
  carController.updateCarIntoDB,
);

export const carRouter = router;
