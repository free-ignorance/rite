import * as express from "express";
import { DefaultController } from "./";
import { defaultRiteResponse } from "../models/rites";

class MainController extends DefaultController {
  constructor() {
    super("/");
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getRiteRandom);
  }

  private getRiteRandom = (
    request: express.Request,
    response: express.Response
  ) => {
    response.status(200).send(defaultRiteResponse());
  };
}

export default MainController;
