import * as passport from "passport";
import { Strategy as GithubStrategy } from "passport-github2";

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

const strategyConfig = {
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3001/auth/github/callback",
};

const authCallback = (accessToken, refreshToken, profile, done) => {
  // If token is retrieved, check database
  console.log("Access token ", accessToken);
  console.log("Refresh token ", refreshToken);
  console.log("Profile ", profile);
  return done(null, true);
};

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

export default new GithubStrategy(strategyConfig, authCallback);
