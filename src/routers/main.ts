import { Router } from "express";

const router: Router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World" }).status(200);
});

export default router;
