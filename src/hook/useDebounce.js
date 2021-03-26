import { useState, useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  const isFirstRender = useRef(true);
  const [state, setState] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isFirstRender.current) return (isFirstRender.current = false);

      callback(state);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [state]);

  return [state, setState];
};

export default useDebounce;
