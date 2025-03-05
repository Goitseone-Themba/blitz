import express from 'express';
import { chatRoutes } from './routes/api';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api', chatRoutes);

app.listen(PORT, () => {
    console.log(`Blitz backend running on port ${PORT}`);
});
