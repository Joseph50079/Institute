import express from 'express';
import library from './e-libraryRoutes.js';
import user from './userRoutes.js'
import student from './studentRoutes.js';

const router = express.Router();

router.use('/book', library);

router.use('/user', user);

router.use('/student', student);

export default router;
