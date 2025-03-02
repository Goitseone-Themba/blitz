import { useState } from "react"
import { Link } from "react-router-dom";

const Chat = () => {
    const { messages, sendMessage, bookmarkMessage } = useChat();
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            sendMessage(input);
            setInput('');
        }
    }

    return (
        <div className="flex flex-col h-screen">
            <header className="bg-blitzBlack text-blitzBlue p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Blitz</h1>
                <Link to="/saved" className="text-blitzWhite">Saved</Link>
            </header>
            <div className="flex-1 overflow-y-auto p-4 bg-blitzWhite">
            {messages.map((msg) => (
                 
