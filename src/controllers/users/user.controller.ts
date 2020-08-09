import * as express from "express";

class UserController {
  public path = "/users";
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get(this.path, this.getUsers);
  }

  getUsers = (req: express.Request, res: express.Response): void => {
    res.send("Hello");
  };
}

export default UserController;
