import httpStatus from 'http-status';
import AppError from '../../error/AppError';
import CarModel from '../car/car.model';
import { IBooking } from './booking.interface';
import BookingModel from './booking.model';

const createBookingIntoDB = async (payload: IBooking, userId: string) => {
  const { car: carId, date, startTime } = payload;

  const car = await CarModel.findById(carId);

  if (!car) {
    throw new AppError('Car not found', httpStatus.NOT_FOUND);
  }

  if (car.status !== 'available') {
    throw new AppError('Car is unavailable', httpStatus.CONFLICT);
  }

  const newBooking = await BookingModel.create({
    user: userId,
    car: carId,
    date,
    startTime,
  });

  car.status = 'unavailable';
  await car.save();

  const populatedBooking = await BookingModel.findById(newBooking._id)
    .populate('user')
    .populate('car');

  return populatedBooking;
};
const getAllBookingFromDB = async () => {
  const result = await BookingModel.find().populate('user').populate('car');
  return result;
};

const getSingleBookingFromDB = async (id: string) => {
  const result = await BookingModel.findById(id)
    .populate('user')
    .populate('car');
  return result;
};

const getUserBookingsFromDB = async (userId: string) => {
  const result = await BookingModel.find({ user: userId })
    .populate('user')
    .populate('car');
  return result;
};




const returnCarFromDB = async (bookingId: string, endTime: string) => {
  // Ensure the result of findById is awaited before calling populate
  const booking = await BookingModel.findById(bookingId).populate('car');

  if (!booking) {
    throw new Error('Booking not found');
  }

  // Convert startTime and endTime to hours
  const startHour = parseInt(booking.startTime.split(':')[0], 10);
  const endHour = parseInt(endTime.split(':')[0], 10);

  // Calculate total hours used
  const hoursUsed = endHour - startHour;

  // Make sure the car object is populated, so you can access its pricePerHour
  const pricePerHour = booking.car.pricePerHour;

  // Calculate total cost
  const totalCost = hoursUsed * pricePerHour;

  // Update booking's endTime and totalCost
  booking.endTime = endTime;
  booking.totalCost = totalCost;
  await booking.save();

  // Update car status to available
  await CarModel.findByIdAndUpdate(booking.car._id, { status: 'available' });

  // Populate the user details (this is another async operation, so ensure you await)
  await booking.populate('user');

  return booking;
};





export const bookingServices = {
  createBookingIntoDB,
  getAllBookingFromDB,
  getSingleBookingFromDB,
  getUserBookingsFromDB,
  returnCarFromDB,
};
