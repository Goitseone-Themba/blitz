import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { chatRoutes } from './routes/api';

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
    origin: 'http://localhost:5173',
};
app.use(cors(corsOptions));

app.use(express.json());
app.use('/api', chatRoutes);

app.listen(PORT, () => {
    console.log(`Blitz backend running on port ${PORT}`);
});
