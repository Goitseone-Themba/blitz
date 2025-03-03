interface Props {
    value: string;
    onChange: (value: string) => void;
    onSend: () => void;
}

const InputBox = ({ value, onChange, onSend }: Props) => {
    return (
        <div className="p-4 bg-blitzWhite border-t border-blitzBlue flex">
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="flex-1 p-2 border border-blitzBlue rounded-1 text-blitzBlack focus:outline-none resize-none"
                placeholder="Type here..."
                rows={2}
            />
            <button onClick={onSend} className="bg-blitzBlue text-blitzWhite p-2 rounded-r">
                Send
            </button>
        </div>
    );
};

export default InputBox;
