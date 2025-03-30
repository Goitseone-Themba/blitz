import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { $createParagraphNode, $createTextNode, $getRoot } from "lexical";
import { useState } from "react";
import { Link } from "react-router-dom";

const Toolbar = () => {
    const [editor] = useLexicalComposerContext();

    const handleBold = () => {
        editor.update(() => {
            const selection = $getRoot().selectEnd();
            selection.format('bold');
        });
    };

    const handleItalic = () => {
        editor.update(() => {
            const selection = $getRoot().selectEnd();
            selection.format('italic');
        });
    };

    return (
        <div className="flex space-x-2 mb-2">
            <button onClick={handleBold} className="bg-blitzBlue text-blitzWhite p-1 rounded">
                B
            </button>
            <button onClick={handleItalic} className="bg-blitzBlue text-blitzWhite p-1 rounded">
                I
            </button>
        </div>
    );
};

const initialConfig = {
    namespace: 'BlitzNotes',
    onError: (error: Error) => console.error(error),
    theme: {
        paragragh: 'mb-2',
        text: {
            bold: 'font-bold',
            italic: 'italic',
        },
    },
    notes: [],
};

const Notes = () => {
    const [title, setTitle] = useState('');
    const [savedNotes, setSavedNotes] = useState<{ id: string; title: string; content: string }[]>([]);

    const handleSave = async (editor: any) => {
        const editorState = editor.getEditorState();
        const content = JSON.stringify(editorState.toJSON());
        const response = await fetch('http://localhost:3001/api/notes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content }),
        });
        const data = await response.json();
        if (response.ok) {
            setSavedNotes([...savedNotes, { id: data.id, title, content }]);
            setTitle('');
            editor.update(() => {
                const root = $getRoot();
                root.clear();
                root.append($createParagraphNode().append($createTextNode('')));
            });
        } else {
            console.error('Failed to save note:', data);
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <header className="bg-blitzBlack text-blitzBlue p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Notes</h1>
                <div className="flex space-x-4">
                    <Link to="/chat" className="text-blitzWhite">Chat</Link>
                    <Link to="/saved" className="text-blitzWhite">Saved</Link>
                    <Link to="/pomodoro" className="text-blitzWhite">Pomodoro</Link>
                </div>
            </header>
            <div className="flex-1 p-4 bg-blitzWhite">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Note Title"
                    className="w-full p-2 mb-2 border border-blitzBlue rounded text-blitzBlack"
                />
                <LexicalComposer initialConfig={initialConfig}>
                    <Toolbar />
                    <RichTextPlugin
                        contentEditable={<ContentEditable className="h-64 p-2 border border-blitzBlue rounded" />}
                        placeholder={<div className="text-gray-400 p-2">Type your notes here...</div>}
                    />
                    <HistoryPlugin />
                    <SaveButton handleSave={handleSave} />
                </LexicalComposer>
                <div className="mt-4">
                    {savedNotes.map((note) => (
                        <div key={note.id} className="p-2 border-b border-blitzBlue">
                            <h3 className="font-bold">{note.title}</h3>
                            <div dangerouslySetInnerHTML={{ __html: note.content }} /> {/* Temporary display */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const SaveButton = ({ handleSave }: { handleSave: (editor: any) => void }) => {
    const [editor] = useLexicalComposerContext();

    return (
        <button
            onClick={() => handleSave(editor)}
            className="mt-2 bg-blitzBlue text-blitzWhite p-2 rounded"
        >
            Save Note
        </button >
    );
};

export default Notes;

