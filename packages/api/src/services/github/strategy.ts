import axios from "axios";
import { serializeUser, deserializeUser } from "passport";
import { Strategy as GithubStrategy } from "passport-github2";
import { UserData } from "../../models/types";

import { User } from "../../models/User";

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

//@TODO: Make sure this is the best approach
const domain = process.env.HOST || "http://localhost:3000";

const strategyConfig = {
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: domain + "/signin",
};

export const ghCallback = async (accessToken: string) => {
  try {
    const { data: ghData } = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `token ${accessToken}`,
        Accept: "application/json",
      },
    });

    const githubId = ghData.id.toString();
    const username = ghData.username || ghData.url.split("/").slice(-1)[0];

    const user = await User.findOrCreateByGithub({
      username,
      githubId,
    });

    return {
      accessToken,
      username,
      githubId: ghData.id,
      id: user.id,
    };
  } catch (e) {
    throw new Error(e);
  }
};

serializeUser((user: UserData, done) => done(null, user));
deserializeUser((obj: UserData, done) => done(null, obj));

export default new GithubStrategy(strategyConfig, () => {});
