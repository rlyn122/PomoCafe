import React, { useState, useEffect } from 'react';
import "./Timer.css";

const Timer = () => {
    const [time, setTime] = useState(1500); // 25 minutes in seconds
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, time]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div class="Center-Timer">
            <h1 class="time-text">{formatTime(time)}</h1>
            <div className="TimerButtons">
                <button className="RoundButton buttonText" onClick={() => setIsActive(!isActive)}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className="RoundButton buttonText" onClick={() => setTime(1500)}>Reset</button>
            </div>
        </div>
    );
};

export default Timer;