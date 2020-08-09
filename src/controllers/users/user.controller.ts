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

  public async getUsers(req: express.Request, res: express.Response): Promise<express.Response> {
    return res.send("Hello");
  }
}

export default UserController;
