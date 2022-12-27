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

export async function getContacts(token: string): Promise<IContact[]> {
  try {
    const contacts: IContact[] = [];

    await api
      .get<IData<IContact[]>>("/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        data.data?.forEach((item) => contacts.push(item));
      });

    return contacts;
  } catch (error: AxiosError | any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message;
    throw new Error(message);
  }
}

export async function getContactById(
  token: string,
  id: string
): Promise<IContact | undefined> {
  try {
    const contact = await api
      .get<IData<IContact>>(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => data.data);

    return contact;
  } catch (error: AxiosError | any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message;
    throw new Error(message);
  }
}
