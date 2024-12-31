import express from "express";
import { getBooks } from '../controllers/e-libraryController.js';

const router = express.Router();

router.get('/search', getBooks);

export default router;