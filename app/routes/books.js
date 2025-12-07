const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  year: Number,
  createdAt: { type: Date, default: Date.now }
});
const Book = mongoose.model('Book', BookSchema);

// Create
router.post('/', async (req, res, next) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) { next(err); }
});

// List + optional search ?q=
router.get('/', async (req, res, next) => {
  try {
    const q = req.query.q;
    const filter = q ? { title: new RegExp(q, 'i') } : {};
    const books = await Book.find(filter).sort({ createdAt: -1 });
    res.json(books);
  } catch (err) { next(err); }
});

// Read single
router.get('/:id', async (req, res, next) => {
  try {
    const b = await Book.findById(req.params.id);
    if (!b) return res.status(404).json({ error: 'Not found' });
    res.json(b);
  } catch (err) { next(err); }
});

// Update
router.put('/:id', async (req, res, next) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json(updated);
  } catch (err) { next(err); }
});

// Delete
router.delete('/:id', async (req, res, next) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    res.json({ deleted: true });
  } catch (err) { next(err); }
});

module.exports = router;
