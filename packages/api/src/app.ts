import * as express from "express";
import * as passport from "passport";
import GithubStrategy from "./services/github";

import "dotenv/config";

export default class App {
  private _PORT = process.env.PORT || 3001;
  public app: express.Application;

  constructor() {
    this.app = express();

    this.app.use(passport.initialize());
    this.app.use(passport.session());
    passport.use(GithubStrategy);

    this.app.get("/auth/github", passport.authenticate("github"));

    this.app.get(
      "/auth/github/callback",
      passport.authenticate("github", { failureRedirect: "/login" })
    );

    this.app.get("/", (req, res) => {
      res.json({ status: 200 });
    });

    this.app.get("/login", (req, res) => {
      res.json({ status: 404 });
    });

    this.app.get("/logout", (req, res) => {
      req.logout();
      res.json({ status: 200 });
    });
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
