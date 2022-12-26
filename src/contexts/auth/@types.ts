import { IUser } from "../../@types";

export interface IAuthContext {
  user: IUser;
  error: string;
  loading: boolean;
  signIn: () => Promise<void>;
}
