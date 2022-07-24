import Axios from "axios";
import { User, IParams } from "typings";

const axios = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
  headers: {
    "Content-Type": "application/json",
  },
});

class UsersService {
  async getAll(params?: IParams<User>): Promise<User[]> {
    const { limit = 10, order = "asc", page = 1, sortBy } = params || {};
    const { data } = await axios.get<User[]>("/", {
      params: {
        _limit: limit,
        _order: order,
        _page: page,
        _sort: sortBy,
      },
    });
    return data;
  }
}

export default UsersService;
