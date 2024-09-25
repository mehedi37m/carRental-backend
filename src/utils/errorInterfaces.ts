export type TErrorSource = {
    path: string | number;
    message: string;
  };
  
  export type TGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorSources: TErrorSource[];
  };

  export const USER_ROLE = {
    admin: 'admin',
    user: 'user',
  } as const;
  