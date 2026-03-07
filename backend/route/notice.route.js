import express from 'express';
import { createNotice, getLatestNotices } from '../controller/notice.controller.js';

const router=express();

router.post("/create",createNotice);
router.get("/latest",getLatestNotices);

export default router;