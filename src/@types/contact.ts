import type { ITimeStamps } from "./data";

export interface IContact extends ITimeStamps {
  _id: string;
  firstname: string;
  lastname: string;
  fullname: string;
  email: string;
  phone: number;
  favorite: boolean;
  seen: number;
  avatar?: string;
}
