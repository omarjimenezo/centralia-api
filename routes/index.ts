import express from "express";
import routerAuth from "./authRoute";
import routerUser from "./usersRoute";
import routerBusiness from "./businessRoute"; "./businessRoute";

export const routerApi = (app: express.Express) => {
    const router = express.Router();
    /*master route*/
    app.use("/api/v1", router);
    /*api routes*/
    router.use("/auth", routerAuth);
    router.use("/usuarios", routerUser);
    router.use("/negocios", routerBusiness);
};
