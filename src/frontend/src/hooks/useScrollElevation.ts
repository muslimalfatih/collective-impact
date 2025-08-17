import { useEffect, useState } from "react";

interface ScrollTriggerInstance {
  kill: () => void;
}

interface ScrollTriggerStatic {
  create: (options: {
    start?: number | string;
    onUpdate?: (self: { scroll: () => number }) => void;
  }) => ScrollTriggerInstance;
}

declare global {
  interface Window {
    gsap?: {
      ScrollTrigger?: ScrollTriggerStatic;
    };
  }
}

export function useScrollElevation(threshold = 0) {
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const ScrollTrigger = window.gsap?.ScrollTrigger;

    if (ScrollTrigger && typeof ScrollTrigger.create === "function") {
      const st = ScrollTrigger.create({
        start: 0,
        onUpdate: (self) => setElevated(self.scroll() > threshold),
      });
      return () => st.kill();
    }

    const onScroll = () => setElevated((window.scrollY || 0) > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return elevated;
}
