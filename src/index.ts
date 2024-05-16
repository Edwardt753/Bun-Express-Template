import express from "express";
import type { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import route from "./routes/route";

const app: Express = express();
const port = Bun.env.PORT;

declare module "bun" {
  interface Env {
    CLIENT_URL: string;
  }
}

//logger
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
  console.log(`Example app listening at http://localhost:${port}`);
});
