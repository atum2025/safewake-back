import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // hash!
  whatsapp: { type: String, required: true },
  birthDate: { type: Date, required: true },
  country: { type: String, required: true },
  emergencyContactName: { type: String, required: true },
  emergencyContactPhone: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('User', UserSchema);

