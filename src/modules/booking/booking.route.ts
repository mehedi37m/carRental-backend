import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { bookingZodValidation } from './booking.validation';
import { bookingController } from './booking.controller';
import auth from '../../middleware/auth';

const router = express.Router();

router.post(
  '/',
  auth(['user']),
  validateRequest(bookingZodValidation.bookingValidation),
  bookingController.createBookingIntoDB,
);
router.get('/my-bookings', auth(['user']), bookingController.getUserBookings);

router.get('/', auth(['admin']), bookingController.getAllBookingFromDB);
router.get('/:id', bookingController.getSingleBookingFromDB);
router.put('/return', auth(['admin']), bookingController.returnCar);

export const bookingsRouter = router;
