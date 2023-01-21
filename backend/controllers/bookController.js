const asyncHandler = require("express-async-handler");

const Book = require("../models/bookModel");
//const User = require("../models/userModel");

///////////////////////////////////////////////////////////////

// @desc    Get all books
// @route   GET /api/books
// @access  Private
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find();
  //const books = await Book.find({ user: req.user.id });
  //res.status(200).json({ message: "Get all books" });
  res.status(200).json(books);
});

///////////////////////////////////////////////////////////////

// @desc    Get a single book by id
// @route   GET /api/books/:id
// @access  Private
// const getBooks = asyncHandler(async (req, res) => {
//   const books = await Book.find({ user: req.user.id });
//   res.status(200).json(books);
// });

///////////////////////////////////////////////////////////////

// @desc    Set a single book
// @route   POST /api/books
// @access  Private
const setBook = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please add a book title");
  }
  const book = await Book.create({
    title: req.body.title,
    isbn: req.body.isbn,
    author: req.body.author,
    description: req.body.description,
    published_date: req.body.published_date,
    publisher: req.body.publisher,
  });
  //const books = await Book.find({ user: req.user.id });
  //res.status(200).json({ message: "Set a single book" });
  res.status(200).json(book);
});

///////////////////////////////////////////////////////////////

// @desc    Update a single book
// @route   PUT /api/books/:id
// @access  Private
const updateBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(400);
    throw new Error("Book not found");
  }
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  //const books = await Book.find({ user: req.user.id });
  //res.status(200).json({ message: `Update a book ${req.params.id}` });
  res.status(200).json(updatedBook);
});

///////////////////////////////////////////////////////////////

// @desc    Delete a single book
// @route   DELETE /api/books/:id
// @access  Private
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(400);
    throw new Error("Book not found");
  }
  //const books = await Book.find({ user: req.user.id });
  await book.remove();
  //res.status(200).json({ message: `Delete a book ${req.params.id}` });
  res.status(200).json({ id: req.params.id });
});

///////////////////////////////////////////////////////////////

module.exports = {
  getBooks,
  setBook,
  updateBook,
  deleteBook,
};
