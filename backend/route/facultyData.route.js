import express from 'express'
import { faculties, facultyLogin,} from '../controller/facultyData.controller.js';
import { authFaculty } from '../middleware/auth.js';
import { getFaculty, getFacultyDashboard } from '../controller/faculty.controller.js';

const router=express();

router.post("/register",faculties);
router.post("/login",facultyLogin);
router.get("/dashboard",authFaculty,getFacultyDashboard);
router.get("/allFaculty",getFaculty);

export default router;
