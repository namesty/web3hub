import express, { Application as ExpressApp } from "express";
import passport from "passport";
import session from "express-session";
import cors from "cors";
import { serve, setup } from "swagger-ui-express";
import morgan from "morgan";

import "dotenv/config";

import { GithubStrategy } from "./services/github";
import { controllers } from "./controllers";
import { swaggerJSON } from "../documentation/swagger";
import { SanitizeApis } from "./services/cronjob/checkApis";

const app: ExpressApp = express();

const middlewares = [
  morgan("combined"), // adds logger to the API
  cors({ origin: "*" }), // support cors
  session({
    name: "web3hub",
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  }), // supports session cache on server side
  express.json(), // accepts JSON as request.body
  passport.initialize(), // initialize passport middleware
  passport.session(), // allows passport to create session object
];

middlewares.forEach((m) => app.use(m));

app.use("/docs", serve, setup(swaggerJSON)); // host documentation on /docs endpoint
passport.use(GithubStrategy); // implement github strategy with passport
app.use("/", controllers); // add controllers routes

SanitizeApis.getInstance();
export { app };
