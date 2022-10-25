import bcrypt from "bcryptjs";

export const encryptPassword = (data: any) => {
  const { password } = data;
  const salt = bcrypt.genSaltSync();
  data.password = bcrypt.hashSync(password, salt);
  return data;
};
