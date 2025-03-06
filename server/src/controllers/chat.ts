import { Request, Response } from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { MongoClient } from 'mongodb';

const apiKeys = [
    process.env.GEMINI_API_KEY,
    process.env.GEMINI_API_KEY_2,
];

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(mongoUri);
const db = client.db('blitz');
const chatsCollection = db.collection('chats');
const bookmarkCollection = db.collection('bookmarks');

export const handleChat = async (req: Request, res: Response) => {
    const { message } = req.body;
    for (const apiKey of apiKeys) {
        if (!apiKey) continue;

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash-exp',
            systemInstruction: `You are Blitz, the ultimate study cheat code for BIUST (Botswana International University of Science and Technology) students. 
            Your mission is to help engineering, science, and tech students crush assignments, exams, and late-night panic with lightning-fast, raw, and untamed responses. 
            Be concise, clear, and hyped—think "ngl Blitz is sick" vibes. 
            Use simple, relatable language for max aura and focus on practical, BIUST-specific study tips, 
            formatted in Markdown for readability .
            Avoid fluff, stick to the point, and always act like a supportive, energetic study mate. 
            If you don’t know, say “Blitz is digging deeper, hold tight…”—never guess. Max aura, max help, no brakes!`,
        });

        const generationConfig = {
            temperature: 1,
            topP: 0.95,
            topK: 40,
            maxOutputTokens: 8192,
            responseMimeType: 'text/plain',
        };

        try {
            const chatSession = model.startChat({
                generationConfig,
                history: [],
            });

            const result = await chatSession.sendMessage(message);
            const response = result.response.text();
            res.json({ response });
            return;
        } catch (error: any) {
            if (error instanceof Response && error.status === 429) continue;
            res.status(500).json({ error: 'Blitz hit a snag, hold tight...' });
            return;
        }
    }
    res.status(429).json({ error: 'Blitz is hitting rate limits, hold tight...' });
};

export const getChat = () => {
    console.log("hit getChat");
}

export const createBookmark = () => {
    console.log("hit createBookmark");
}

export const getBookmarks = () => {
    console.log("hit getBookmarks");
}

export const deleteBookmark = () => {
    console.log("hit deleteBookmark");
}
