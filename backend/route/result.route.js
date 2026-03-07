import express from "express";
import { addResult, getAllStudentsSummary, getStudentResult} from "../controller/result.controller.js";
import { authStudent } from '../middleware/auth.js';

const router = express.Router();
router.post("/result", addResult);
router.get("/studentResult", authStudent, getStudentResult);
router.get("/allResult", getAllStudentsSummary);

export default router;