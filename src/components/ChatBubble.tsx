interface Props {
    sender: 'user' | 'blitz';
    content: string;
    timestamp: string;
    onBookmark?: () => void;
}

const ChatBubble = ({ sender, content, timestamp, onBookmark }: Props) => {
    const isUser = sender === 'user';

    return (
        <div className={`flex ${isUser ? 'justify-start' : 'justify-end'} mb-4`}>
        <div 
        className={`max-w-xs p-3 rounded-lg ${
            isUser ? 'bg-gray-200' : 'bg-blitzWhite border border-blitzBlue'
        }`}
        >
        <p>{content}</p>
        <span className="text-xs text-blitzBlack">{timestamp}</span>
        {!isUser && onBookmark && (
            <button onClick={onBookmark} className="ml-2 text-blitzBlue">
            *
            </button>
        )}
        </div>
        </div>
    );
};

export default ChatBubble;
