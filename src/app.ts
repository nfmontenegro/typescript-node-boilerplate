import * as express from "express";
import * as bodyParser from "body-parser";

import {HOST} from "./config/constants";

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers, port: number) {
    this.app = express();
    this.port = port;

    this.intializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private intializeMiddlewares(): void {
    this.app.use(bodyParser.json());
  }

  private initializeControllers(controllers): void {
    controllers.forEach(controller => {
      this.app.use(controller.path, controller.router);
    });
  }

  public listen(): void {
    this.app.listen(this.port, (): void => {
      console.log(`App running ${HOST}${this.port}`);
    });
  }
}

export default App;
