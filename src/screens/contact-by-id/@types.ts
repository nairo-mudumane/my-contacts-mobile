import type { RouteProp, NavigationProp } from "@react-navigation/native";

export interface IContactByIdScreenParams {
  params: { _id: string };
}

export interface IDetailProps {
  title: string;
  value: string | number;
  icon: any;
}
