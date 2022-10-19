export interface IUser {
  avatar: string;
  nombre: string;
  apellido: string;
  rol?: rolUser;
  email: string;
  telefono_personal: number;
  password?: string;
  confirmPassword?: string;
  negocio_id: number;
}

enum rolUser {
  Admin = 0,
  Proveedor = 1,
  Negocio = 2,
  Agente = 3,
}
