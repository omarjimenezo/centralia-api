import { Model } from "mongoose";
import { ICongifOptions } from "../interfaces/common-interface";

export const querys = (modelName: Model<any>, options: ICongifOptions) => {
  return new Promise((resolve, reject) => {
    const { method, nameField, id, configFields } = options;
    if (method === "getAll") {
      modelName
        .find()
        .populate(nameField)
        .exec((error: any, populated: any) => {
          if (error) {
            reject(`[getAllError]:  ${error}`);
          }
          resolve(populated);
        });
    } else if (method === "getById") {
      modelName
        .findById({ _id: id }, configFields)
        .populate(nameField)
        .exec((error: any, populated: any) => {
          if (error) {
            reject(`[getByIdError]:  ${error}`);
          }
          resolve(populated);
        });
    }
  });
};
