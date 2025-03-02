export const fetchGemini = async (message: string) => {
    // Stub for mvp
    return `Blitz responst to: ${message}`;

    // Real Gemini
    // const response = await fetch('https://api.gemini.com/v1/chat', {
    // method: 'POST',
    // headers: {
    // 'Authorization': `Bearer ${import.meta.env.VITE_GEMINI_API_KEY}`,
    // 'Content-Type': 'application/json',
    // },
    // body: JSON.stringfy({ message }),
    // });
    // const data = await response.json();
    // return data.reply;
};
