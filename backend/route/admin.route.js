import express from 'express';
import { addAdmin, login, updateFees } from '../controller/admin.controller.js';

const router=express.Router();

router.post('/addAdmin',addAdmin);
router.post('/login',login);
router.post("/fees", updateFees);


export default router;