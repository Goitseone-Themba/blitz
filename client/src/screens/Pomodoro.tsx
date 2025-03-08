import { useState } from "react";
import { Link } from "react-router-dom";
import { useTimer } from "react-timer-hook";

const Pomodoro = () => {
    const [workTime, setWorkTime] = useState(25);
    const [breakTime, setBreakTime] = useState(25);
    const [isWork, setIsWork] = useState(true);

    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + workTime * 60);

    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({
        expiryTimestamp,
        onExpire: () => {
            const notification = new Notification(isWork ? 'Work Done!' : 'Break Over!', {
                body: isWork ? 'Time for a break!' : 'Back to work!',
            });
            setIsWork(!isWork);
            const newTime = (isWork ? breakTime : workTime) * 60;
            const newExpiry = new Date();
            newExpiry.setSeconds(newExpiry.getSeconds() + newTime);
            restart(newExpiry);
        },
    });

    const handleStart = () => {
        if (!isRunning) {
            Notification.requestPermission().then(perm => {
                if (perm === 'granted') start();
            });
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <header className="bg-blitzBlack text-blitzBlue p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Pomodoro</h1>
                <Link to="/" className="text-blitzWhite">Chat</Link>
            </header>
            <div className="flex-1 p-4 bg-blitzWhite flex flex-col items-center justify-center">
                <div className="text-6xl font-bold text-blitzBlack">
                    {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                </div>
                <div className="mt-4 space-x-4">
                    <button onClick={handleStart} className="bg-blitzBlue text-blitzWhite p-2 rounded">
                        Start
                    </button>
                    <button onClick={pause} className="bg-gray-500 text-blitzWhite p-2 rounded">
                        Pause
                    </button>
                    <button onClick={resume} className="bg-blitzBlue text-blitzWhite p-2 rounded">
                        Resume
                    </button>
                </div>
                <div className="mt-4">
                <label className="mr-2">Work (min):</label>
                <input
                type="number"
                value={workTime}
                onChange={(e) => setWorkTime(parseInt(e.target.value))}
                className="p-1 border border-blitzBlue rounded"
                />
                <label className="ml-4 mr-2">Break (min):</label>
                <input
                type="number"
                value={breakTime}
                onChange={(e) => setBreakTime(parseInt(e.target.value))}
                className="p-1 border border-blitzBlue rounded"
                />
                </div>
                </div>
                </div>
    );
};

export default Pomodoro;
