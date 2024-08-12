const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findUserByUsername, createUser } = require('../models/user');
const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const user = await findUserByUsername(username);

  if (user) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await createUser(username, hashedPassword);

  res.status(201).json({ message: 'User created successfully' });
});

// Login Route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await findUserByUsername(username);

  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });

  res.json({ token });
});

module.exports = router;
