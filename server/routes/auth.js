const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');
const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const result = await pool.query(
      'INSERT INTO User (email, password) VALUES ($1, $2) RETURNING id',
      [email, hashedPassword]
    );
    const token = jwt.sign({ id: result.rows[0].id }, 'your_jwt_secret');
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ message: 'Email already exists' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const result = await pool.query('SELECT * FROM User WHERE email = $1', [email]);
  const user = result.rows[0];
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user.id }, 'your_jwt_secret');
  res.json({ token });
});

module.exports = router;