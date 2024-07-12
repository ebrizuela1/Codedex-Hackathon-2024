import React from 'react'
import { useState, useEffect } from 'react'
import TimerCard from './TimerCard.jsx';

function Timer({duration}) {
    const[time,setTime] = useState(duration);
    const [milliseconds, setMilliseconds] = useState(0);
    const[seconds,setSeconds] = useState(0);
    const[minutes,setMinutes] = useState(0);
    const[hours,setHours] = useState(0);
    const[days,setDays] = useState(0);

    useEffect(() => {
        const updateClock = () => {
          const days = Math.floor(time / (1000 * 60 * 60 * 24));
          const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((time % (1000 * 60)) / 1000);
          const milliseconds = time % 1000;
    
          setDays(days);
          setHours(hours);
          setMinutes(minutes);
          setSeconds(seconds);
          setMilliseconds(milliseconds);
        };
    
        const timerId = setInterval(() => {
            setTime(prevTime => {
              const newTime = prevTime - 10; // Decrement by 10 milliseconds
              if (newTime <= 0) {
                clearInterval(timerId);
                return 0;
              }
              return newTime;
            });
          }, 10); // Update every 10 milliseconds
    
        updateClock();
    
        return () => clearTimeout(timerId);
      }, [time]);
    
      return (
        <>

            
        <div className='time-container'>
            <TimerCard time={days} unit="days" />
            <TimerCard time={hours} unit="hours" />
            <TimerCard time={minutes} unit="minutes" />
            <TimerCard time={seconds} unit="seconds" />
        </div>
            
        </>
      );
    }
    
    export default Timer;