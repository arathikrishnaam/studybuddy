const express = require('express');
const pool = require('../config/db');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, async (req, res) => {
  const { subject, level, location, description } = req.body;
  const userId = req.user.id;
  try {
    const result = await pool.query(
      'INSERT INTO Profile (user_id, subject, level, location, description) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [userId, subject, level, location, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(400).json({ message: 'Error creating profile' });
  }
});

router.get('/', async (req, res) => {
  const { subject, location } = req.query;
  let query = 'SELECT * FROM Profile';
  const values = [];
  if (subject || location) {
    query += ' WHERE';
    if (subject) {
      query += ' subject ILIKE $1';
      values.push(`%${subject}%`);
    }
    if (location) {
      query += subject ? ' AND location ILIKE $2' : ' location ILIKE $1';
      values.push(`%${location}%`);
    }
  }
  const result = await pool.query(query, values);
  res.json(result.rows);
});

router.get('/:id', async (req, res) => {
  const result = await pool.query('SELECT * FROM Profile WHERE id = $1', [req.params.id]);
  if (!result.rows[0]) return res.status(404).json({ message: 'Profile not found' });
  res.json(result.rows[0]);
});

module.exports = router;