import express, { Application } from "express";
import passport from "passport";
import session from "express-session";

import "dotenv/config";

import { GithubStrategy } from "services/github";
import { controllers } from "controllers";

export default class App {
  private _PORT = process.env.PORT || 3001;
  public app: Application;

  constructor() {
    this.app = express();
    passport.use(GithubStrategy);

    // @TODO: Right now the session information is
    // being stored in application memory and it's just for dev purposes
    // if we want to follow the approach of server handling session data
    // we will need to add another memory store like mongo
    // more info: https://tilomitra.com/how-do-nodejs-sessions-work/
    this.app.use(
      session({
        name: "web3hub",
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
      })
    );

    this.app.use(passport.initialize());
    this.app.use(passport.session());
    this.app.use("/", controllers);
  }

  public getServer() {
    return this.app;
  }

  public listen() {
    this.app.listen(this._PORT, () => {
      console.log(`App listening on the port ${this._PORT}`);
    });
  }
}
