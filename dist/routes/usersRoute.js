"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("../controllers/users/users-controller");
const routerUser = express_1.default.Router();
routerUser.post("/create-user", users_controller_1.createUser);
exports.default = routerUser;
