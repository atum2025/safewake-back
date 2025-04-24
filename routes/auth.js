import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Cadastro
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, whatsapp, birthDate, country, emergencyContactName, emergencyContactPhone } = req.body;
    if (await User.findOne({ email })) return res.status(400).json({ message: 'Email já cadastrado' });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hash,
      whatsapp,
      birthDate: new Date(birthDate),
      country,
      emergencyContactName,
      emergencyContactPhone
    });

    res.status(201).json({ user: { name: user.name, email: user.email, _id: user._id } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Email não encontrado' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: 'Senha inválida' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'defaultsecret', { expiresIn: '6h' });
    res.status(200).json({ token, user: { name: user.name, email: user.email, _id: user._id } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
