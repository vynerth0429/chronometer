import {
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';

import {
  setDate,
  setHours,
  setMinutes,
  setSeconds,
  differenceInSeconds,
} from 'date-fns';

const useTimer = () => {
  const timerRef = useRef(0);
  const intervalRef = useRef<any>();

  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const updateTimeValues = useCallback((total: number) => {
    var d = Math.floor(total / (3600*24));
    var h = Math.floor(total % (3600*24) / 3600);
    var m = Math.floor(total % 3600 / 60);
    var s = Math.floor(total % 60);

    setDay(d);
    setHour(h);
    setMinute(m);
    setSecond(s);
  }, []);

  const calculateEndTime = useCallback(() => {
    const date = new Date();
    let baseDate = new Date();
    baseDate = setDate(date, 0);
    baseDate = setHours(baseDate, 0);
    baseDate = setMinutes(baseDate, 0);
    baseDate = setSeconds(baseDate, 0);
    timerRef.current = differenceInSeconds(date, baseDate);
  }, []);

  const run = useCallback(() => {
    decreaseNum();
    intervalRef.current = setInterval(decreaseNum, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const decreaseNum = useCallback(() => {
    if (timerRef.current >= 0) {
      updateTimeValues(timerRef.current);
      timerRef.current = timerRef.current - 1;
    } else {
      clearInterval(intervalRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    calculateEndTime();
    run();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    day,
    hour,
    minute,
    second,
  };
};

export default useTimer;
