enum rolUser {
  Provider = 1,
  Business = 2,
  Agent = 3,
}

export interface IUser {
  avatar: string;
  name: string;
  lastName: string;
  rol: rolUser;
  email: string;
  businessPhone?: number;
  personalPhone: number;
  password: string;
  confirmPassword: string;
}
