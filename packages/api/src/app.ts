import express, { Application as ExpressApp } from "express";
import passport from "passport";
import session from "express-session";

import "dotenv/config";

import { GithubStrategy } from "./services/github";
import { controllers } from "./controllers";

const app: ExpressApp = express();

app.use(
  session({
    name: "web3hub",
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/", controllers);
passport.use(GithubStrategy);

export { app };
