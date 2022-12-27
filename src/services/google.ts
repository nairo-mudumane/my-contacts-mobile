import type { AxiosError } from "axios";
import type { IData, IUser } from "../@types";
import { api } from "./axios";

export async function signInWithGoogle(token: string): Promise<IUser> {
  try {
    const user = await api
      .post<IData<IUser>>("/auth", { token })
      .then((response) => {
        return response.data.data!;
      });

    return user;
  } catch (error: AxiosError | any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message;
    throw new Error(message);
  }
}
