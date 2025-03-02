import { useEffect, useState } from "react";

interface Message {
    id: string;
    sender: 'user' | 'blitz';
    content: string;
    timestamp: string;
}

interface Bookmark {
    bookmarkId: string;
    chatId: string;
    messageId: string;
    question: string;
    answer: string;
    timestamp: string;
}

export const useChat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('bookmarks');
        if (saved) setBookmarks(JSON.parse(saved));
    }, []);

    const sendMessage = async (content: string) => {
        const userMsg: Message = {
            id: `msg_${Date.now()}`,
            sender: 'user',
            content,
            timestamp: new Date().toISOString().slice(11, 16),
        };
        setMessages((prev) => [...prev, userMsg]);

        // Stubbed Gemini response
        const blitzMsg: Message = {
            id: `msg_${Date.now() + 1}`,
            sender: 'blitz',
            content: `Blitz says: ${content} (real Gemini soon...)`,
            timestamp: new Date().toISOString().slice(11, 16),
        };
        setMessages((prev) => [...prev, blitzMsg]);

        // real Gemini
        // const response = await fetchGemini(content);
        // setMessages((prev) => [...prev, { ...blitzMsg, content: response }]);
    };

    const bookmarkMessage = (messageId: string) => {
        const msg = messages.find((m) => m.id === messageId);
        if (msg && msg.sender === 'blitz') {
            const prevMsg = messages[messages.indexOf(msg) - 1];
            const bookmark: Bookmark = {
                bookmarkId: `bmk_${Date.now()}`,
                chatId: 'chat_1', // only for mvp
                messageId,
                question: prevMsg?.content || '',
                answer: msg.content,
                timestamp: msg.timestamp,
            };
            setBookmarks((prev) => {
                const updated = [...prev, bookmark];
                localStorage.setItem('bookmarks', JSON.stringify(updated));
                return updated;
            });
        }
    };

    const deleteBookmark = (bookmarkId: string) => {
        setBookmarks((prev) => {
            const updated = prev.filter((bmk) => bmk.bookmarkId !== bookmarkId);
            localStorage.setItem('bookmarks', JSON.stringify(updated));
            return updated;
        });
    };

    return { messages, sendMessage, bookmarks, bookmarkMessage, deleteBookmark };
};
