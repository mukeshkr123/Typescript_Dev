import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("List of remainders ");
});

export default router;
