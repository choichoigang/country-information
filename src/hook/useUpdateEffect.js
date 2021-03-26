import { useRef, useEffect } from "react";

const useUpdateEffect = (callback, deps) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      return callback();
    }

    return () => {};
  }, deps);
};

export default useUpdateEffect;
