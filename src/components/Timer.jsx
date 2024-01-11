import React, { useState, useEffect, useRef } from 'react';
import Box from './Box';

const Timer = (flip, day, hour, minute, second) => {
  const [countDown, setCountDown] = useState({
    day: '00',
    hour: '00',
    minute: '00',
    second: '00',
  });

  const Ref = useRef(null);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  };

  const startTimer = (e) => {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setCountDown({
        day: days > 9 ? days : '0' + days,
        hour: hours > 9 ? hours : '0' + hours,
        minute: minutes > 9 ? minutes : '0' + minutes,
        second: seconds > 9 ? seconds : '0' + seconds,
      });
    }
  };

  const clearCountDown = (e) => {
    setCountDown({
      day: '14',
      hour: '00',
      minute: '00',
      second: '00',
    });

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 1209600);
    return deadline;
  };

  useEffect(() => {
    clearCountDown(getDeadTime());
  }, []);

  // const TimerContainer = ({ days, hours, minutes, seconds }) => {
  let dayFlip = false;
  let hourFlip = false;
  let minuteFlip = false;
  let secondFlip = true;

  if (second <= 0 && minute <= 0 && hour <= 0 && day <= 0) {
    dayFlip = false;
    hourFlip = false;
    minuteFlip = false;
    secondFlip = false;
  }

  if (second === 0) {
    if (minute !== 0) {
      second = 59;
    }

    secondFlip = false;
    minuteFlip = true;
  }
  if (minute === 0) {
    if (hour !== 0) {
      minute = 59;
    }

    minuteFlip = false;
    hourFlip = true;
  }

  if (hour === 0) {
    hourFlip = false;
    if (day !== 0) {
      dayFlip = true;
    }
  }

  if (day < 10) {
    day = '0' + day;
  }

  if (hour < 10) {
    hour = '0' + hour;
  }

  if (minute < 10) {
    minute = '0' + minute;
  }

  if (second < 10) {
    second = '0' + second;
  }
  // };

  return (
    <div className='flex flex-row justify-center items-center pb-72 space-x-3 md:space-x-7'>
      {/* Day */}
      <div className='flex flex-col relative'>
        <div className='rounded-md shadow-lg bg-very-dark-blue w-20 h-10 md:w-40 md:h-20'></div>
        <div className='absolute text-soft-red text-center font-redhat text-4xl px-5 py-5 md:p-12 md:text-7xl z-10'>
          {countDown.day}
        </div>
        <div className='rounded-md shadow-lg bg-desaturated-blue w-20 h-10 md:w-40 md:h-20'></div>
        <div
          className={`absolute w-full md:h-20 rounded-t-lg md:mt-[-4px] ${
            dayFlip
              ? 'animate-flip bg-desaturated-blue rounded-lg'
              : 'bg-very-dark-blue'
          }`}
        ></div>
        <div className='pt-5 text-grayish-blue tracking-widest'>
          <p>Days</p>
        </div>
      </div>

      {/* Hours */}
      <div className='flex flex-col relative'>
        <div className='rounded-md shadow-lg bg-very-dark-blue w-20 h-10 md:w-40 md:h-20'></div>
        <div className='text-soft-red text-center font-redhat text-4xl px-5 py-5 md:p-12 md:text-7xl absolute z-10'>
          {countDown.hour}
        </div>
        <div className='rounded-md shadow-lg bg-desaturated-blue w-20 h-10 md:w-40 md:h-20'></div>
        <div
          className={`absolute w-full md:h-20 rounded-t-lg md:mt-[-4px] ${
            hourFlip
              ? 'animate-flip bg-desaturated-blue rounded-lg'
              : 'bg-very-dark-blue'
          }`}
        ></div>
        <div className='pt-5 text-grayish-blue tracking-widest'>
          <p>Hours</p>
        </div>
      </div>

      {/* Minutes */}
      <div className='flex flex-col relative'>
        <div className='rounded-md shadow-lg bg-very-dark-blue w-20 h-10 md:w-40 md:h-20'></div>
        <div className='text-soft-red text-center font-redhat text-4xl px-5 py-5 md:p-12 md:text-7xl absolute z-10'>
          {countDown.minute}
        </div>
        <div className='rounded-md shadow-lg bg-desaturated-blue w-20 h-10 md:w-40 md:h-20'></div>
        <div
          className={`absolute w-full md:h-20 rounded-t-lg md:mt-[-4px] ${
            minuteFlip
              ? 'animate-flip bg-desaturated-blue rounded-lg'
              : 'bg-very-dark-blue'
          }`}
        ></div>
        <div className='pt-5 text-grayish-blue tracking-widest'>
          <p>Minutes</p>
        </div>
      </div>

      {/* Seconds */}
      <div className='flex flex-col relative'>
        <div className='rounded-md shadow-lg bg-very-dark-blue w-20 h-10 md:w-40 md:h-20'></div>
        <div className='text-soft-red text-center font-redhat text-4xl px-5 py-5 md:p-12 md:text-7xl absolute z-10'>
          {countDown.second}
        </div>
        <div className='rounded-md shadow-lg bg-desaturated-blue w-20 h-10 md:w-40 md:h-20'></div>
        <div
          className={`absolute w-full h-10 md:h-20 rounded-t-lg md:mt-[-4px] ${
            secondFlip
              ? 'animate-flip bg-desaturated-blue rounded-lg'
              : 'bg-very-dark-blue'
          }`}
        ></div>
        <div className='pt-5 text-grayish-blue tracking-widest'>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
