import express from 'express';
import { getStudent, student } from '../controller/ug.controller.js';
import { studentLogin, getMyProfile } from "../controller/ug.controller.js";
import { authStudent } from "../middleware/auth.js";
import { getAllStudentFees, getStudentDashboard, getStudentsByCourse } from "../controller/student.controller.js";

const router=express.Router();

router.post("/register",student);
router.get("/",getStudent);
router.get("/fees",getAllStudentFees);
router.post("/login", studentLogin);
router.get("/profile", authStudent, getMyProfile);
router.get("/dashboard", authStudent, getStudentDashboard);

router.get("/students/:courseId", getStudentsByCourse);

export default router;  