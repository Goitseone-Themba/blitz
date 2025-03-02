import { GoogleGenerativeAI } from "@google/generative-ai";

export const fetchGemini = async (message: string) => {
    // Stub for mvp
    //return `Blitz responst to: ${message}`;

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) throw new Error('Gemini API key not found');

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
        model: 'gemini-2.0-flash-exp',
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
            history: [], // will expand this for those multi-turn chats later
        });

    const result = await chatSession.sendMessage(message);
    return result.response.text();
    } catch (error) {
        console.error('Gemini API error:', error);
        return 'Blitz is thinking, hold tight...';
    }
};
