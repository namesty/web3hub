import express, { Application as ExpressApp } from "express";
import passport from "passport";
import session from "express-session";
import cors from "cors";
import { serve, setup } from "swagger-ui-express";
import morgan from "morgan";
import redis from "redis";
import connectRedis from "connect-redis";

import "dotenv/config";

import { GithubStrategy } from "./services/github";
import { controllers } from "./controllers";
import { swaggerJSON } from "../documentation/swagger";
import { SanitizeApis } from "./services/cronjob/checkApis";

const app: ExpressApp = express();
const RedisStore = connectRedis(session);
const redisClient = redis.createClient({ host:'redis', port: 6379 });

const middlewares = [
  morgan("combined"), // adds logger to the API
  cors({ origin: "http://localhost:3000", credentials: true }), // support cors
  session({
    name: "web3hub",
    store: new RedisStore({ client: redisClient }),
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  }), // supports session cache on server side
  express.json(), // accepts JSON as request.body
  passport.initialize(), // initialize passport middleware
];

middlewares.forEach((m) => app.use(m));

passport.use(GithubStrategy); // implement github strategy with passport
app.use("/docs", serve, setup(swaggerJSON)); // host documentation on /docs endpoint
app.use("/", controllers); // add controllers routes

// SanitizeApis.getInstance();
export { app };
