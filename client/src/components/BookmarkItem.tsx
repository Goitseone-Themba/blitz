interface Props {
    question: string;
    answer: string;
    timestamp: string;
    onDelete: () => void;
}

const BookmarkItem = ({ question, answer, timestamp, onDelete }: Props) => {
    return (
        <div className="p-3 mb-2 bg-blitzWhite border border-blitzBlue rounded">
            <p className="font-bold">Q: {question}</p>
            <p>A: {answer.slice(0, 50)}...</p>
            <span className="text-xs text-blitzBlack">{timestamp}</span>
            <button onClick={onDelete} className="ml-2 text-blitzBlue">Delete</button>
        </div>
    );
};

export default BookmarkItem;
