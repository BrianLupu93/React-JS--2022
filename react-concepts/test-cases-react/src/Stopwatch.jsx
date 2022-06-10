import React, { useEffect, useState } from "react";

export const Stopwatch = (props) => {
  const [count, setCount] = useState(props.time);
  const [visualTime, setVisualTime] = useState({
    min: parseInt(count / 60),
    sec: count % 60,
  });
  const [zeroMin, setZeroMin] = useState();
  const [zeroSec, setZeroSec] = useState();

  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    setVisualTime({ min: parseInt(count / 60), sec: count % 60 });
  }, [count]);

  useEffect(() => {
    if (visualTime.min < 10) {
      setZeroMin(true);
    } else {
      setZeroMin(false);
    }
    if (visualTime.sec < 10) {
      setZeroSec(true);
    } else {
      setZeroSec(false);
    }
  }, [visualTime, count]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        if (count > 0) {
          setCount((prevCount) => prevCount - 1);
        }
      }
      if (isPaused) {
        clearInterval(interval);
      }
      clearInterval(interval);
    }, 1000);
  }, [isPaused, count]);

  const startCounting = () => {
    setIsPaused(false);
  };
  const stopCounting = () => {
    setIsPaused(true);
  };

  console.log(isPaused);
  return (
    <div className="stopwatch">
      <label>
        <p>User: {props.name}</p>
        {
          <p>
            Time: {zeroMin ? `0${visualTime.min}` : `${visualTime.min}`}:
            {zeroSec ? `0${visualTime.sec}` : `${visualTime.sec}`}
          </p>
        }
        <button onClick={startCounting}>Start</button>
        <button onClick={stopCounting}>Stop</button>
      </label>
    </div>
  );
};
