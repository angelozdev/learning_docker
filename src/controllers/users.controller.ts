import { RequestHandler } from "express";
import { IParams, User } from "../typings";
import { UsersService } from "../services";

const usersService = new UsersService();

type ErrorResponse = {
  message: string;
};
type TGetAll = RequestHandler<
  never,
  User[] | ErrorResponse,
  never,
  IParams<User>
>;

export const getAll: TGetAll = async (req, res) => {
  try {
    const users = await usersService.getAll(req.query);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Ops! Something was wrong!" });
  }
};
