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
  const { findUser, validPassword, token, usuario } = objectData;
  if (token) {
    dataResponse.token = token;
    dataResponse.mensaje = "logIn";
    dataResponse.user = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      avatar: usuario.avatar,
      rol: usuario.rol,
      usuarioEmail: usuario.usuarioEmail,
      telefono_personal: usuario.telefono_personal,
      negocio_id: usuario.negocio_id,
    };
    return dataResponse;
  }
  if (!findUser) {
    dataResponse.mensaje =
      "El user o el password es incorrecto, intenta de nuevo";
    dataResponse.codigo_de_error = 1;
    return dataResponse;
  }
  if (!validPassword) {
    dataResponse.mensaje =
      "El user o el password es incorrecto, intenta de nuevo";
    dataResponse.codigo_de_error = 1;
    return dataResponse;
  }
};

export const buildResponseBusinessStore = (objectData: {
  [index: string]: any;
}) => {
  const dataResponse: messageDB = {
    mensaje: "",
  };
  if (!objectData) {
    dataResponse.mensaje =
      "Algo fallo al crear el negocio, intenta de nuevo mas tarde";
    return dataResponse;
  }
  dataResponse.mensaje = "Negocios creado";
  return dataResponse;
};

export const buildResponseGetAllBusiness = (objectData: {
  [index: string]: any;
}) => {
  const dataResponse: messageDB = {
    mensaje: "",
  };
  if (!objectData) {
    dataResponse.mensaje =
      "Algo fallo al obtener los negocios, intenta de nuevo mas tarde";
    return dataResponse;
  }
  dataResponse.negocios = objectData;
  dataResponse.mensaje = "negocios obtenidos";
  return dataResponse;
};
