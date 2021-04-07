import { UserData } from "./src/models/User";

type RequestUrl = {
  redirectUrl: string;
};

declare global {
  namespace Express {
    export interface Request extends RequestUrl {}
    export interface User extends UserData {}
  }
}
