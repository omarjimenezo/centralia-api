import dotenv from "dotenv";
dotenv.config();

export const configDev = {
  port: process.env.PORT || 8000,
  host: process.env.HOST || "http://localhost",
  dbUrl: process.env.DB_URL,
  publicRoute: process.env.PUBLIC_ROUTE || "/app",
};
