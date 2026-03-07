import express from 'express';
import { createFeedback, getFeedback } from '../controller/feedback.controller.js';

const router = express.Router();

router.post("/feedback",createFeedback);
router.get("/getFeedback",getFeedback);

export default router;