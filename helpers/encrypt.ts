import bcrypt from "bcryptjs";

export const encryptPassword = (data: any) => {
  const { password, confirmPassword } = data;
  const salt = bcrypt.genSaltSync();
  data.password = bcrypt.hashSync(password, salt);
  data.confirmPassword = bcrypt.hashSync(confirmPassword, salt);
  return data;
};
