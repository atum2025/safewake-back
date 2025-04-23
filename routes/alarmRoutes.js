import express from 'express';
import Alarm from '../models/Alarm.js';

const router = express.Router();

// Grava/cria/edita o alarme do usuário
router.post('/', async (req, res) => {
  const { userId } = req.body;
  const alarm = await Alarm.findOneAndUpdate(
    { userId },
    req.body,
    { new: true, upsert: true }
  );
  res.json(alarm);
});

// Busca alarme do usuário
router.get('/:userId', async (req, res) => {
  const alarm = await Alarm.findOne({ userId: req.params.userId });
  res.json(alarm);
});

export default router;
