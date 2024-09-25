import { ICar } from './car.interface';
import CarModel from './car.model';

const createCarIntoDB = async (payload: ICar) => {
  const result = await CarModel.create(payload);
  return result;
};
const getAllCarFromDB = async () => {
  const result = await CarModel.find();
  return result;
};

const getSingleCarFromDB = async (id: string) => {
  const result = await CarModel.findById(id);
  return result;
};
const deleteCarFromDB = async (id: string) => {
  const result = await CarModel.findByIdAndDelete(id);
  return result;
};
const updateCarIntoDB = async (id: string, payload: Partial<ICar>) => {
  const result = await CarModel.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const carServices = {
  createCarIntoDB,
  getAllCarFromDB,
  getSingleCarFromDB,
  deleteCarFromDB,
  updateCarIntoDB,
};
