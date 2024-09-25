/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { bookingServices } from './booking.services';


const createBookingIntoDB = catchAsync(async (req, res) => {
  const userId = (req as any).user._id;

  const result = await bookingServices.createBookingIntoDB(req.body, userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking Created Successfully',
    data: result,
  });
});
const getAllBookingFromDB = catchAsync(async (req, res) => {
  const result = await bookingServices.getAllBookingFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking retrieved Successfully',
    data: result,
  });
});

const getUserBookings = catchAsync(async (req, res) => {
  const userId = (req as any).user._id;
  const result = await bookingServices.getUserBookingsFromDB(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'My Bookings retrieved successfully',
    data: result,
  });
});

const getSingleBookingFromDB = catchAsync(async (req, res) => {
  const result = await bookingServices.getSingleBookingFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking retrieved Successfully',
    data: result,
  });
});

const returnCar = catchAsync(async (req, res) => {
  const { bookingId, endTime } = req.body;

  const result = await bookingServices.returnCarFromDB(bookingId, endTime);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car returned successfully',
    data: result,
  });
});

export const bookingController = {
  createBookingIntoDB,
  getAllBookingFromDB,
  getSingleBookingFromDB,
  getUserBookings,
  returnCar,
};
