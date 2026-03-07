import express from "express";
import { addFees } from "../controller/fees.controller.js";

const router = express.Router();

router.post("/fees", addFees);

export default router;