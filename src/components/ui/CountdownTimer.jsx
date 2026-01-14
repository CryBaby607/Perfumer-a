// src/components/ui/CountdownTimer.jsx
import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 4, mins: 32, secs: 15 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { hours, mins, secs } = prev;
        
        if (secs > 0) {
          secs--;
        } else if (mins > 0) {
          mins--;
          secs = 59;
        } else if (hours > 0) {
          hours--;
          mins = 59;
          secs = 59;
        } else {
          return { hours: 0, mins: 0, secs: 0 };
        }
        
        return { hours, mins, secs };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center bg-slate-700 p-3 rounded-lg min-w-[70px]">
      <span className="text-2xl font-bold text-white">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs text-slate-400">{label}</span>
    </div>
  );

  return (
    <div className="flex gap-4 justify-center md:justify-start mt-4">
      <TimeUnit value={time.hours} label="Hours" />
      <TimeUnit value={time.mins} label="Mins" />
      <TimeUnit value={time.secs} label="Secs" />
    </div>
  );
};

export default CountdownTimer;