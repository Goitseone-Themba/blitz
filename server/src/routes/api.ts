import express from 'express';
import { handleChat } from "../controllers/chat";

const router = express.Router();

router.post('/chat', handleChat);

export const chatRoutes = router;
