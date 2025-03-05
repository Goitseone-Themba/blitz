import { Link } from "react-router-dom";
import { useChat } from "../hooks/useChat"
import BookmarkItem from "../components/BookmarkItem";

const Saved = () => {
    const { bookmarks, deleteBookmark } = useChat();

    return (
        <div className="flex flex-col h-screen">
            <header className="bg-blitzBlack text-blitzBlue p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Saved</h1>
                <Link to="/" className="text-blitzWhite">Back</Link>
            </header>
            <div className="flex-1 overflow-y-auto p-4 bg-blitzWhite">
                {bookmarks.length ? (
                    bookmarks.map((bmk) => (
                        <BookmarkItem
                            key={bmk.bookmarkId}
                            question={bmk.question}
                            answer={bmk.answer}
                            timestamp={bmk.timestamp}
                            onDelete={() => deleteBookmark(bmk.bookmarkId)}
                        />
                    ))
                ) : (
                    <p className="text-center text-blitzBlack">No saves yet, fam.</p>
                )}
            </div>
        </div>
    );
};

export default Saved;
