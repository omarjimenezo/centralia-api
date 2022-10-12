import express, { Express, Request, Response } from "express"; //ESModules
import { routerApi } from "./routes";
import { configDev } from "./config";
import { dbConnection } from "./db/config";

const app: Express = express();
const { port, host, dbUrl } = configDev;
//db connection
dbConnection(dbUrl as string);
//read body
app.use(express.json());

routerApi(app);

app.get("/", (req: Request, res: Response) => {
  res.send("Express and typeScript server!!!!!");
});

app.listen(port, () => {
  console.log(`[AppServerRunning]: ${host}:${port}`);
});
