import express from "express";
import morgan from "morgan";

// routers
import { mainRouter } from "./routers";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use(mainRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
