import { User } from "./users";

type TOrder = "asc" | "desc";

export interface IParams<T> {
  page?: number;
  limit?: number;
  sortBy?: keyof T;
  order?: TOrder;
}
