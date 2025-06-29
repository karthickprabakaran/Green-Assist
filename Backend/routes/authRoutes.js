import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { log } from "console";
import { getSellers } from "../controllers/authController.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/test", (req, res) => {
  console.log("Auth route is working!");
  res.status(200).json({ message: "Auth route is working!" });
});

router.get("/", (req, res) => {
  console.log("Auth route test2 is working!");
  res.status(200).json({ message: "Auth route test2 is working!" });
});

router.get("/sellers", getSellers);

export default router;
