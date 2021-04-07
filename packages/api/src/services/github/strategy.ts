import { serializeUser, deserializeUser } from "passport";
import { Strategy as GithubStrategy } from "passport-github2";

import { User, UserData } from "../../models/User";

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

//@TODO: Make sure this is the best approach
const domain = process.env.HOST || "http://localhost:3001";

const strategyConfig = {
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: domain + "/auth/github/callback",
};

interface GithubProfileDTO {
  id: string;
  profileUrl: string;
  username?: string;
  state?: string;
}

const authCallback = async (
  accessToken: string,
  _,
  profile: GithubProfileDTO,
  done
) => {
  try {
    let { username, profileUrl, id: githubId } = profile;
    username = username || profileUrl.split("/").slice(-1)[0];
    const userInfo = { accessToken, username, githubId };
    const user = await User.findOrCreateByGithub(userInfo);
    return done(null, { ...userInfo, id: user.id });
  } catch (e) {
    throw new Error(e);
  }
};

serializeUser((user: UserData, done) => done(null, user));
deserializeUser((obj: UserData, done) => done(null, obj));

export default new GithubStrategy(strategyConfig, authCallback);
