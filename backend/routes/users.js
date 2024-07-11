const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { f_sno, f_userName, f_Pwd } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(f_Pwd, 10);
    const user = new User({ f_sno, f_userName, f_Pwd: hashedPassword });
    await user.save();
    res.status(201).send('User registered');
  } catch (err) {
    res.status(400).send('Error registering user');
  }
});

router.post('/login', async (req, res) => {
  const { f_userName, f_Pwd } = req.body;
  try {
    const user = await User.findOne({ f_userName });
    if (!user) return res.status(400).send('User not found');

    const isMatch = await bcrypt.compare(f_Pwd, user.f_Pwd);
    if (!isMatch) return res.status(400).send('Invalid password');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(400).send('Error logging in');
  }
});

module.exports = router;
