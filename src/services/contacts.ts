import { AxiosError } from "axios";
import { IData } from "../@types";
import { IContact } from "../@types/contact";
import { api } from "./axios";

export async function getFavorites(token: string): Promise<IContact[]> {
  try {
    const favorites: IContact[] = [];

    await api
      .get<IData<IContact[]>>("/contacts/favorites", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        data.data?.forEach((item) => favorites.push(item));
      });

    return favorites;
  } catch (error: AxiosError | any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message;
    throw new Error(message);
  }
}
