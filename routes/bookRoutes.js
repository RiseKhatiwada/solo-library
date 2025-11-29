const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook
} = require('../controllers/bookController');

// @route   GET /api/books
// @desc    Get all books
// @access  Public
router.get('/', getBooks);

// @route   GET /api/books/:id
// @desc    Get single book
// @access  Public
router.get('/:id', getBook);

// @route   POST /api/books
// @desc    Create book
// @access  Private
router.post('/', auth, createBook);

// @route   PUT /api/books/:id
// @desc    Update book
// @access  Private
router.put('/:id', auth, updateBook);

// @route   DELETE /api/books/:id
// @desc    Delete book
// @access  Private
router.delete('/:id', auth, deleteBook);

module.exports = router;
