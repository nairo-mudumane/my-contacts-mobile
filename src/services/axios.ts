import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-my-contacts.loca.lt",
});
