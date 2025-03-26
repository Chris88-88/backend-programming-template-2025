// routes/books.js
const express = require('express');
const router = express.Router();
const Book = require('../models/Book'); // Sesuaikan path dengan struktur proyek Anda

router.get('/', async (req, res) => {
  let { offset = 0, limit = 10 } = req.query;

  // Konversi ke integer
  offset = parseInt(offset);
  limit = parseInt(limit);

  try {
    const books = await Book.findAll({
      offset: offset,
      limit: limit,
    });

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan pada server' });
  }
});

module.exports = router;
