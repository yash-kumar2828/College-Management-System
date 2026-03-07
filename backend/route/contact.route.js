import express from 'express';
import { addContact, getContact } from '../controller/contact.controller.js';

const router=express();

router.post('/addContact',addContact);
router.get('/allContact',getContact);

export default router;