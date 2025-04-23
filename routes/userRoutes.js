import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Cadastro
router.post('/register', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch(e) {
    res.status(400).json({error: e.message});
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.status(400).json({ error: 'Dados inválidos' });
  res.json(user);
});

export default router;