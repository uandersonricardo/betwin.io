import { createServer } from "http";

import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Errback, NextFunction, Request, Response } from "express";
import morgan from "morgan";

import environment from "./config/environment";
import routes from "./routes";

class App {
  private server;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.server.set("trust proxy", true);

    this.server.use(
      cors({
        credentials: true,
        origin: environment.clientUrl
      })
    );
    this.server.use(cookieParser());
    this.server.use(morgan("dev"));
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
  }

  private routes() {
    this.server.use(routes);

    this.server.use((req: Request, res: Response, next: NextFunction) => {
      res.status(404).json({ message: "Path Not Found" });
    });

    this.server.use(
      (err: Errback, req: Request, res: Response, next: NextFunction) => {
        res.status(500).json({ message: "Internal Error" });
      }
    );

    this.server.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).json({ message: "Internal Error" });
      }
    );
  }

  public getServer() {
    return this.server;
  }
}

export default createServer(new App().getServer());