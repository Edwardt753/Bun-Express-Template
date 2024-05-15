import express from "express";
import morgan from "morgan";
import cors from "cors";
import route from "./routes/route";
import type { RequestHandler } from "express";

declare module "bun" {
  interface Env {
    CLIENT_URL: string;
  }
}

const app = express();
const port = Bun.env.PORT;

app.use(express.json());
app.use(morgan("dev")); //Logging

//CORS Settings
app.use(
  "*",
  cors({
    origin: Bun.env.CLIENT_URL.split(";"),
    // allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
    // allowMethods: ["POST", "GET", "OPTIONS"],
    // exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    // maxAge: 600,
    // credentials: true,
  })
);

app.use("/", route);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
