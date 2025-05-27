"use client";
import { CardContainer, SelectNavigation } from "@/components";
import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  //initializing state variables for count and isRunning
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  //using useRef to hold the interval ID
  //this allows us to clear the interval when the component unmounts or when isRunning changes
  const timeRef = useRef<NodeJS.Timeout | null>(null);

  //useEffect to handle the countdown logic
  //when isRunning is true, we set an interval to decrement the count every second
  //if count reaches 0, we clear the interval and set isRunning to false
  useEffect(() => {
    if (isRunning && count > 0) {
      timeRef.current = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    } else {
      if (timeRef.current) {
        clearInterval(timeRef.current);
      }
    }

    return () => {
      if (timeRef.current) {
        clearInterval(timeRef.current);
      }
    };
  }, [isRunning, count]);

  // handler for starting the timer
  const handleStart = () => {
    if (!isRunning && count > 0) {
      setIsRunning(true);
    }
  };

  // handler for resetting the timer
  const handleReset = () => {
    setIsRunning(false);
    setCount(10);
  };

  return (
    <CardContainer>
      <div className="justify-between flex items-center mb-6">
        <h1 className="text-2xl font-bold mb-4">Countdown Timer</h1>
        <div className="flex justify-end">
          <SelectNavigation />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 mt-10 text-center">
        <div className="text-4xl font-bold">
          {count === 0 ? "Done!" : count}
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleStart}
            disabled={isRunning || count === 0}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            Start
          </button>

          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Reset
          </button>
        </div>
      </div>
    </CardContainer>
  );
};

export default Timer;
