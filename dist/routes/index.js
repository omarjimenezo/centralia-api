"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerApi = void 0;
const express_1 = __importDefault(require("express"));
const usersRoute_1 = __importDefault(require("./usersRoute"));
const routerApi = (app) => {
    const router = express_1.default.Router();
    /*master route*/
    app.use("/api/v1", router);
    /*other routes*/
    router.use("/users", usersRoute_1.default);
};
exports.routerApi = routerApi;
