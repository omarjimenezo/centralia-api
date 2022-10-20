import { messageDB } from "../interfaces/common-interface";

export const buildResponseUserStore = (objectData: {
  [index: string]: any;
}) => {
  const dataResponse: messageDB = {
    mensaje: "",
  };
  const { token, isUnique, responseDB } = objectData;
  if (token) {
    dataResponse.mensaje = "usuario creado";
    dataResponse.token = token;
    dataResponse.nombre = responseDB.nombre;
    dataResponse.rol = responseDB.rol;
    return dataResponse;
  } else if (isUnique) {
    dataResponse.mensaje = "Algo salio mal al crear el usuario";
    dataResponse.codigo_de_error = 1;
    return dataResponse;
  } else if (!responseDB) {
    dataResponse.mensaje = "Algo salio mal al crear el usuario";
    dataResponse.codigo_de_error = 1;
    return dataResponse;
  }
};

export const buildResponseLoginUserStore = (objectData: {
  [index: string]: any;
}) => {
  const dataResponse: messageDB = {
    mensaje: "",
  };
  const { findUser, validPassword } = objectData;
  if (!findUser) {
    dataResponse.mensaje =
      "El user o el password es incorrecto, intenta de nuevo";
    return dataResponse;
  }
  if (!validPassword) {
    dataResponse.mensaje =
      "El user o el password es incorrecto, intenta de nuevo";
    return dataResponse;
  }
};
