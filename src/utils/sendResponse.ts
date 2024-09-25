/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T;
  token?: string;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  const responseBody: any = {
    success: data.success,
    message: data.message,
    data: data.data,
  };

  if (data.token) {
    responseBody.token = data.token;
  }

  res.status(data.statusCode).json(responseBody);
};

export default sendResponse;
