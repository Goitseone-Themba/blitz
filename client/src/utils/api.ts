//import { GoogleGenerativeAI } from "@google/generative-ai";

export const fetchGemini = async (message: string) => {
    const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Blitz hit a snag');
    return data.response;
};

/*
export const fetchGemini = async (message: string) => {
    //return `Blitz responst to: ${message}`;

    const apiKeys = [
        import.meta.env.VITE_GEMINI_API_KEY,
        import.meta.env.VITE_GEMINI_API_KEY_2,
    ];
    if (!apiKeys[0]) throw new Error('Primary Gemini API key not found');

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
            history: [], // will expand this for those multi-turn chats later
        });

        const result = await chatSession.sendMessage(message);
        return result.response.text();
    } catch (error) {
        console.error('Gemini API error with key ${apiKey.slice(0, 4)}...:', error);
        if (error instanceof Response && error.status === 429) {
            continue;
        }
        throw error;
    }
}
return 'Blitz is thinking, hold tight...';
};
*/
