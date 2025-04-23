import mongoose from 'mongoose';

const emergencyContactSchema = new mongoose.Schema({
  name: String,
  whatsapp: String
}, {_id : false});

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  whatsapp: String,
  birthDate: String,
  country: String,
  emergencyContact: emergencyContactSchema,
  defaultMessage: String
});

export default mongoose.model('User', userSchema);
