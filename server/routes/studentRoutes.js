import express from 'express';
import * as studentController from '../controllers/StudentController.js';

const router = express.Router();

// Get all students
router.get('/', studentController.getAllStudents);

// Get a single student by ID
router.get('/:id', studentController.getStudentById);

// Create a new student
router.post('/', studentController.createStudent);

// Update a student by ID
router.put('/:id', studentController.updateStudent);

// Delete a student by ID
router.delete('/:id', studentController.deleteStudent);

export default router;