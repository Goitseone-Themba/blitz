import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './screens/Splash';
import Saved from './screens/Saved';
import Chat from './screens/Chat';
import Notes from './screens/Notes';

function App() {
    const [showSplash, setShowsplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowsplash(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <div className="min-h-screen bg-blitzWhite text-blitzBlack">
                <Routes>
                    {showSplash ? (
                        <Route path="/" element={<Splash />} />
                    ) : (
                        <>
                            <Route path="/" element={<Chat />} />
                            <Route path="/saved" element={<Saved />} />
                            <Route path="/notes" element={<Notes/>} />
                        </>
                    )}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
