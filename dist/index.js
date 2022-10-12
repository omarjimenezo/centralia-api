"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //ESModules
const routes_1 = require("./routes");
const config_1 = require("./config");
const config_2 = require("./db/config");
const app = (0, express_1.default)();
const { port, host, dbUrl } = config_1.configDev;
//db connection
(0, config_2.dbConnection)(dbUrl);
//read body
app.use(express_1.default.json());
(0, routes_1.routerApi)(app);
app.get("/", (req, res) => {
    res.send("Express and typeScript server!!!!!");
});
app.listen(port, () => {
    console.log(`[AppServerRunning]: ${host}:${port}`);
});
