import axios from "axios";
import { LocalStorage } from "../resources";

let token: string | undefined;

type ILocalToken = { token?: string };

(async () => {
  const storage = new LocalStorage();
  await storage
    .getData<ILocalToken>("_u")
    .then((data) => (token = data?.token));
})();

console.log("token: ", token);

export const api = axios.create({
  baseURL: "https://api-my-contacts.loca.lt",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
