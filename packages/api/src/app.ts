import express, { Application } from "express";
import passport from "passport";
import "dotenv/config";

import GithubStrategy from "./services/github";
export default class App {
  private _PORT = process.env.PORT || 3001;
  public app: Application;

  constructor() {
    this.app = express();

    this.app.use(passport.initialize());
    this.app.use(passport.session());
    passport.use(GithubStrategy);

    this.app.get(
      "/auth/github",
      passport.authenticate("github", {
        scope: ["read:org", "read:user"],
      })
    );

    this.app.get(
      "/auth/github/callback",
      passport.authenticate("github", { failureRedirect: "/login" }),
      (req, res) => {
        res.json({ status: 200 });
      }
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
