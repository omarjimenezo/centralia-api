"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserStore = void 0;
const encrypt_1 = require("../../helpers/encrypt");
const user_model_1 = require("../../models/user-model");
const createUserStore = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { User } = user_model_1.models;
        const encryptData = (0, encrypt_1.encryptPassword)(body);
        const user = new User(encryptData);
        const responseDB = yield user.save();
        return { responseDB };
    }
    catch (error) {
        console.error("[createUserStoreFail]: ", error);
    }
});
exports.createUserStore = createUserStore;
