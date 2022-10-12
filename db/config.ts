import mongoose from "mongoose";

export const dbConnection = async (url: string) => {
  try {
    await mongoose.connect(url);
    console.log("[Success Connection database]");
  } catch (error) {
    console.error("[No dataBase connection]: ", error);
  }
};
