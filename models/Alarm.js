import mongoose from 'mongoose';

const alarmSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  time: String,
  interval: Number,
  ringtone: String,
  vibration: Boolean
});

export default mongoose.model('Alarm', alarmSchema);
