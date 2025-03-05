import { useState } from "react"
import { Link } from "react-router-dom";
import { useChat } from "../hooks/useChat";
import ChatBubble from "../components/ChatBubble";
import InputBox from "../components/InputBox";

const Chat = () => {
    const { messages, sendMessage, bookmarkMessage } = useChat();
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            sendMessage(input);
            setInput('');
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <header className="bg-blitzBlack text-blitzBlue p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Blitz</h1>
                <Link to="/saved" className="text-blitzWhite">Saved</Link>
            </header>
            <div className="flex-1 overflow-y-auto p-4 bg-blitzWhite">
            {messages.map((msg) => (
                <ChatBubble
                key={msg.id}
                sender={msg.sender}
                content={msg.content}
                timestamp={msg.timestamp}
                onBookmark={() => bookmarkMessage(msg.id)}
                />
            ))}
            </div>
            <InputBox value={input} onChange={setInput} onSend={handleSend} />
            </div>
    );
};

export default Chat;
                 
