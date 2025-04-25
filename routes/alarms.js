// routes/alarms.js

import express from 'express';
import Alarm, { AVAILABLE_RINGTONES } from '../models/Alarm.js';
import auth from '../middleware/auth.js';
import WhatsApp from '../services/whatsapp.js';

const router = express.Router();

/**
 * ------------------------------------------
 * DEV/TESTE: Endpoint para testar WhatsApp
 * ------------------------------------------
 * Envie no body:
 * {
 *   "to": "<phone number>", // exemplo: "+551199999999"
 *   "message": "Olá, teste API" // qualquer texto de teste
 * }
 */
router.post('/test-whatsapp', async (req, res) => {
  try {
    const { to, message } = req.body;
    if (!to || !message) {
      return res.status(400).json({ error: '"to" e "message" são obrigatórios' });
    }
    // USO CORRETO DO SERVIÇO:
    const result = await WhatsApp.sendWhatsApp(to, message);
    res.json({ success: true, result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------------------------------------------
// Listar alarmes do usuário autenticado
router.get('/', auth, async (req, res) => {
  try {
    const alarms = await Alarm.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(alarms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------------------------------------------
// Criar novo alarme
router.post('/', auth, async (req, res) => {
  try {
    const { time, interval, ringtone, vibration } = req.body;
    if (!AVAILABLE_RINGTONES.includes(ringtone)) {
      return res.status(400).json({ message: 'Ringtone inválido' });
    }
    const alarm = await Alarm.create({
      user: req.userId,
      time,
      interval,
      ringtone,
      vibration,
      status: 'active',
    });
    res.status(201).json(alarm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------------------------------------------
// Atualizar (editar) alarme
router.put('/:id', auth, async (req, res) => {
  try {
    const { time, interval, ringtone, vibration, status } = req.body;
    const alarm = await Alarm.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      { time, interval, ringtone, vibration, status },
      { new: true }
    );
    if (!alarm) return res.status(404).json({ message: 'Alarme não encontrado' });
    res.json(alarm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------------------------------------------
// Ativar/pausar alarme
router.patch('/:id/status', auth, async (req, res) => {
  try {
    const { status } = req.body;
    if (!['active', 'paused'].includes(status)) {
      return res.status(400).json({ message: 'Status inválido' });
    }
    const alarm = await Alarm.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      { status },
      { new: true }
    );
    if (!alarm) return res.status(404).json({ message: 'Alarme não encontrado' });
    res.json(alarm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------------------------------------------
// Marcar início do toque do alarme
router.patch('/:id/start', auth, async (req, res) => {
  try {
    const alarm = await Alarm.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      { ringingStartedAt: new Date(), status: 'active' },
      { new: true }
    );
    if (!alarm) return res.status(404).json({ message: 'Alarme não encontrado' });
    res.json(alarm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------------------------------------------
// Marcar alarme como "desativado"
router.patch('/:id/dismiss', auth, async (req, res) => {
  try {
    const alarm = await Alarm.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      { dismissedAt: new Date() },
      { new: true }
    );
    if (!alarm) return res.status(404).json({ message: 'Alarme não encontrado' });
    res.json(alarm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------------------------------------------
// Marcar whatsapp enviado
router.patch('/:id/whatsapp-sent', auth, async (req, res) => {
  try {
    const alarm = await Alarm.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      { whatsappSentAt: new Date() },
      { new: true }
    );
    if (!alarm) return res.status(404).json({ message: 'Alarme não encontrado' });
    res.json(alarm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------------------------------------------
// Deletar alarme
router.delete('/:id', auth, async (req, res) => {
  try {
    const alarm = await Alarm.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!alarm) return res.status(404).json({ message: 'Alarme não encontrado' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
