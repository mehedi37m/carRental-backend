/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config'; // JWT secret in config
import { UserModel } from '../modules/user/user.model';
import sendResponse from '../utils/sendResponse';

const auth = (allowedRoles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return sendResponse(res, {
        statusCode: 401,
        success: false,
        message: 'No token provided',
        data: {},
      });
    }

    try {
      const decoded = jwt.verify(
        token,
        config.jwt_access_secret as string,
      ) as JwtPayload;
      //   console.log(decoded.id)
      const user = await UserModel.findById(decoded.id);

      //   console.log(user)

      if (!user) {
        return sendResponse(res, {
          statusCode: 404,
          success: false,
          message: 'User not found',
          data: {},
        });
      }

      if (!allowedRoles.includes(user.role)) {
        return sendResponse(res, {
          statusCode: 403,
          success: false,
          message: 'You have no access to this route',
          data: {},
        });
      }

      (req as any).user = user;
      next();
    } catch (error) {
      return sendResponse(res, {
        statusCode: 403,
        success: false,
        message: 'Invalid or expired token',
        data: {},
      });
    }
  };
};

export default auth;
