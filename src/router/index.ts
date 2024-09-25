import { Router } from 'express';
import { userRouter } from '../modules/user/user.route';
import { carRouter } from '../modules/car/car.route';
import { bookingsRouter } from '../modules/booking/booking.route';

const router = Router();

const moduleRouters = [
  {
    path: '/auth',
    router: userRouter,
  },
  {
    path: '/cars',
    router: carRouter,
  },
  {
    path: '/bookings',
    router: bookingsRouter,
  },
];

moduleRouters.forEach((route) => router.use(route.path, route.router));

export default router;
