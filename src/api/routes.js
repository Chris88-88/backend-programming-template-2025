// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  let { offset = 0, limit = 10 } = req.query;

  offset = parseInt(offset);
  limit = parseInt(limit);

  try {
    const users = await User.findAll({
      offset: offset,
      limit: limit,
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan pada server' });
  }
});

module.exports = router;
