"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configDev = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.configDev = {
    port: process.env.PORT || 8000,
    host: process.env.HOST || "http://localhost",
    dbUrl: process.env.DB_URL,
};
