// routes/admin.js
const express = require('express');
const router = express.Router();
const { createUser, findUserByUsername } = require('../models/user');

router.post('/addUser', async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await findUserByUsername(name);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(name, hashedPassword); // Adjust this function as needed

    res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
