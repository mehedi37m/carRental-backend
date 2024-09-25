import httpStatus from 'http-status';
import AppError from '../../error/AppError';
import { CUser, userLogin } from './user.interface';
import { UserModel } from './user.model';
import config from '../../config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const createUserIntoDB = async (payload: CUser) => {
  const result = await UserModel.create(payload);
  return result;
};

const signInUser = async (payload: userLogin) => {
  const { email, password } = payload;
  const user = await UserModel.findOne({ email });

  if (!user) {
    throw new AppError('Please enter correct email', httpStatus.UNAUTHORIZED);
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new AppError(
      'Please enter correct password',
      httpStatus.UNAUTHORIZED,
    );
  }

  const token = jwt.sign({ id: user._id }, config.jwt_access_secret as string, {
    expiresIn: config.jwt_refresh_expires_in,
  });

  return {
    user,
    token,
  };
};

const getAllUser = async () => {
  const result = await UserModel.find();
  return result;
};

export const userServices = {
  createUserIntoDB,
  signInUser,
  getAllUser,
};
