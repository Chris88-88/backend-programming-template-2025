// routes/authentication.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {a
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(403).json({ error: 'INVALID_PASSWORD' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(403).json({ error: 'INVALID_PASSWORD' });
    }

    res.status(200).json({ message: 'success' });
  } catch (err) {
    res.status(500).json({ error: 'Terjadi kesalahan pada server' });
  }
});

module.exports = router;
