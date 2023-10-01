import React, { useState, useEffect } from 'react';

const ReverseTimer = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const end = new Date(endTime);
    const difference = end - now;
    return difference > 0 ? Math.floor(difference / 1000) : 0;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    if (timeLeft <= 0) {
      // Timer has reached zero
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer on unmount

  }, [timeLeft]);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / 86400); // 86400 seconds in a day
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    return `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`;
  };

  return (
    <div>
      BIDDING STARTS IN: {formatTime(timeLeft)}
    </div>
  );
};

export default ReverseTimer;
