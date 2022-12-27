import { IContact } from "../../@types";

export interface IContactItemProps {
  contact: IContact;
  type?: "avatar" | "inline";
}
