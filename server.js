import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import alarmRoutes from './routes/alarmRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.error('Erro do MongoDB:', err));

// Rotas CRUD
app.use('/api/users', userRoutes);
app.use('/api/alarms', alarmRoutes);

app.listen(4000, () => console.log('API SafeWake no ar 🚀 na porta 4000!'));
