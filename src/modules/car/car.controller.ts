import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { carServices } from './car.services';

const createCarIntoDB = catchAsync(async (req, res) => {
    const result = await carServices.createCarIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car Created Successfully',
    data:result
  });
});

const getAllCarFromDB= catchAsync(async (req, res) => {
    const result = await carServices.getAllCarFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car retrieved Successfully',
    data:result
  });
});

const getSingleCarFromDB = catchAsync(async (req, res) => {
  const result = await carServices.getSingleCarFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car retrieved Successfully',
    data:result
  });
});
const deleteCarFromDB = catchAsync(async (req, res) => {
  const result = await carServices.deleteCarFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car Created Successfully',
    data:result
  });
});
const updateCarIntoDB = catchAsync(async (req, res) => {
  const result = await carServices.updateCarIntoDB(req.params.id, req.body);  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car Created Successfully',
    data:result
  });
});

export const carController ={
  createCarIntoDB,
  getAllCarFromDB,
  getSingleCarFromDB,
  deleteCarFromDB,
  updateCarIntoDB
}
