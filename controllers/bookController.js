const Book = require('../models/Book');

exports.createBook = async (req, res) => {
  try {
    const {
      title,
      author,
      isbn,
      description,
      publishedDate,
      copies
    } = req.body;

    if (!title) {
      return res.status(400).json({ msg: 'Title is required' });
    }

    const book = new Book({
      title,
      author,
      isbn,
      description,
      publishedDate,
      copies,
      createdBy: req.user.id
    });

    await book.save();
    res.status(201).json(book);
  } catch (err) {
    console.error('Create book error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (err) {
    console.error('Get books error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }

    res.json(book);
  } catch (err) {
    console.error('Get book error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const updates = req.body;

    const book = await Book.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }

    res.json(book);
  } catch (err) {
    console.error('Update book error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }

    res.json({ msg: 'Book deleted' });
  } catch (err) {
    console.error('Delete book error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
};
