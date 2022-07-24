import express from "express";
import morgan from "morgan";

// routers
import { mainRouter, usersRouter } from "./routers";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/", mainRouter);
app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
