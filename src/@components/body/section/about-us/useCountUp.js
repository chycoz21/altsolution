import { useEffect, useState } from "react";

export const useCountUp = (end, startWhenVisible = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startWhenVisible) return;

    let start = 0;
    const duration = 1000; // ms
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    const increment = end / totalFrames;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = Math.min(increment * frame, end);
      setCount(Math.floor(progress));
      if (frame === totalFrames) clearInterval(counter);
    }, frameDuration);

    return () => clearInterval(counter);
  }, [end, startWhenVisible]);

  return count;
};
