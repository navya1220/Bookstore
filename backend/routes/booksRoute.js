import express from 'express';
import { createBook, getAllBooks, deleteBook, editBook, getBookById } from '../controllers/bookController.js';

const router = express.Router();

router.post('/', createBook);

router.get('/', getAllBooks);

router.delete('/:id', deleteBook);

router.put('/:id', editBook);

router.get('/:id', getBookById);

export default router;
