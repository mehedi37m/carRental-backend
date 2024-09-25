type UserRole = 'user' | 'admin';

export type CUser = {
  name: string;
  email: string;
  role: UserRole;
  password: string;
  phone: string;
  address: string;
};

export type userLogin = {
  email: string;
  password: string;
};
