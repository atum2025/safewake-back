import mongoose from 'mongoose';
import WhatsApp from '../services/whatsapp.js';
export const AVAILABLE_RINGTONES = ['alerta1.mp3', 'alerta2.mp3', 'alerta3.mp3'];

const AlarmSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  time: { type: String, required: true }, // Formato “HH:mm”
  interval: { type: Number, required: true, min: 1, max: 24 },
  ringtone: { type: String, enum: AVAILABLE_RINGTONES, required: true },
  vibration: { type: Boolean, default: true },
  status: { type: String, enum: ['active', 'paused'], default: 'active' },
  ringingStartedAt: { type: Date },
  dismissedAt: { type: Date },
  whatsappSentAt: { type: Date }
}, { timestamps: true });

AlarmSchema.statics.getRingingWarningText = function () {
  return "Se não desativar este alarme em até 3 minutos uma mensagem de WhatsApp será enviada ao seu contato de emergência.";
};

AlarmSchema.statics.getEmergencyWhatsAppText = function () {
  return "Por algum motivo não desativei meu alarme SafeWake. Por favor entre em contato o quanto antes.";
};

export default mongoose.model('Alarm', AlarmSchema);
