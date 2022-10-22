import express, { Express, Request, Response } from "express"; //ESModules
import cors from "cors";
import { routerApi } from "./routes";
import { configDev } from "./config";
import { dbConnection } from "./db/config";
import { boomErroHandler } from "./middlewares/boomErrorHandler";

const app: Express = express();
const { port, host, dbUrl } = configDev;
//db connection
dbConnection(dbUrl as string);
//read body
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

routerApi(app);
//middleware to handleErrors
app.use(boomErroHandler);

app.get("/", (req: Request, res: Response) => {
  res.send("Express and typeScript server!!!!!");
});

app.listen(port, () => {
  console.log(`[AppServerRunning]: ${host}:${port}`);
});
