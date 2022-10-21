import express from "express";
import routerAuth from "./authRoute";
import routerUser from "./usersRoute";
export const routerApi = (app: express.Express) => {
  const router = express.Router();
  /*master route*/
  app.use("/api/v1", router);
  /*other routes*/
  router.use("/usuarios", routerUser);
  router.use("/auth", routerAuth);
};
