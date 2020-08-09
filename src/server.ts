import * as dotenv from "dotenv";
dotenv.config();

import App from "./app";
import UserController from "./controllers/users/user.controller";

import {PORT} from "./config/constants";

const app = new App([new UserController()], Number(PORT));

app.listen();
