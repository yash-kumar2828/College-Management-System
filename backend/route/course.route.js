import express from 'express';
import { createCourse, deleteCourse, getAllCourse, getCourseById } from '../controller/courses.controller.js';

const router=express.Router();
router.post("/create",createCourse);

router.get("/",getAllCourse);
router.get("/:courseId", getCourseById);

router.delete('/:id',deleteCourse);

export default router; 