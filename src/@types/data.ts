export interface IChildren {
  children?: JSX.Element | JSX.Element[];
}

export interface ITimeStamps {
  createdAt?: Date | string;
  updatedAt?: Date | string;
  _id: string;
}

export interface IData<T> {
  message: string;
  count?: number;
  data?: T;
}
