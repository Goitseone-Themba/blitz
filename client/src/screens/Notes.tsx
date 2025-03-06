import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { Link } from "react-router-dom";

const Notes = () => {
    const [notes, setNotes] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [savedNotes, setSavedNotes] = useState<{ id: string; title: string; content: string }[]>([]);

    const handleSave = async () => {
        const response = await fetch('http://localhost:3001/api/notes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content: notes }),
        });
        const data = await response.json();
        setSavedNotes([...savedNotes, { id: data.id, title, content: notes}]);
        setNotes('');
        setTitle('');
    };

    return (
        <div className="flex flex-col h-screen">
        <header className="bg-blitzBlack text-blitzBlue p-4 flex 
        justify-between items-center">
        <h1 className="text-2xl font-bold">Notes</h1>
        <Link to="/" className="text-blitzBlue">Chat</Link>
        </header>
        <div className="flex-1 p-4 bg-blitzWhite">
        <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
        className="w-full p-2 mb-2 border-blitzBlue rounded text-blitzBlack"
        />
        <ReactQuill
        theme="snow"
        value={notes}
        onChange={setNotes}
        className="h-64 mb-4"
        />
        <button
        onClick={handleSave}
        className="bg-blitzBlue text-blitzWhite p-2 rounded"
        >
        Save Note
        </button>
        <div className="mt-4">

