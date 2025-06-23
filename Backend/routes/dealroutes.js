import express from "express";
import {
  createDeal,
  acceptDeal,
  rejectDeal,
  counterOffer,
  getUserDeals,
  viewDeals,
} from "../controllers/dealerController.js";

const router = express.Router();

router.post("/", createDeal);
router.get("/", getUserDeals);
router.patch("/:id/accept", acceptDeal);
router.patch("/:id/reject", rejectDeal);
router.patch("/:id/counter", counterOffer);
router.get("/view", viewDeals);
export default router;
