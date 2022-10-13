import { encryptPassword } from "../../helpers/encrypt";
import { models } from "../../models/user-model";

export const createUserStore = async (body: any) => {
  try {
    const { User } = models;
    const encryptData = encryptPassword(body);
    const user = new User(encryptData);
    const responseDB = await user.save();
    return { responseDB };
  } catch (error) {
    console.error("[createUserStoreFail]: ", error);
  }
};
