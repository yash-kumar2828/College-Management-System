import express from "express";
import {addSemester, getSyllabusByCourse, getSyllabusBySemester,} from "../controller/syllabus.controller.js";

const router = express.Router();
router.get("/:courseId", getSyllabusByCourse);
router.post("/addSemester/:courseId", addSemester);
router.get("/:courseId/:semesterNumber", getSyllabusBySemester);
export default router;