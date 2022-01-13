import { useEffect, useRef, useState } from 'react';

function useInterval(callback, delay) {
  const [result, setResult] = useState(null);
  const intervalRef = useRef(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current();
    if (typeof delay === 'number') {
      intervalRef.current = setInterval(async () => {
        const res = await tick();
        console.log(res);
        setResult(res);
      }, delay);
      return () => clearInterval(intervalRef.current);
    }
  }, [delay]);
  return result;
}
export default useInterval;