import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import alarmRoutes from './routes/alarms.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.error('Erro do MongoDB:', err));

// Rotas
app.use('/auth', authRoutes);
app.use('/alarms', alarmRoutes);

app.get('/', (req, res) => res.send('SafeWake backend rodando!'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API SafeWake na porta ${PORT}!`));
