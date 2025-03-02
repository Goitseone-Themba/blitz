interface Props {
    sender: 'user' | 'blitz';
    content: string;
    timestamp: string;
    onBookmark?: () => void;
}

const ChatBubble = ({ sender, content, timestamp, onBookmark }: props) => {
    const isUser = sender === 'user';

    return (
        <div className={`flex ${isuser ? 'justify-start' : 'justify-end'} mb-4`}>
        <div 
        className={`max-w-xs p-3 rounded-lg ${
            isUser ? 'bg-gray-200' : 'bg-blitzWhite border border-blitzBlue'
        }`}
        >
        <p>{content}</p>
