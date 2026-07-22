"use client";

import { useEffect, useRef, useState } from "react";

export function useReveal(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(node);
        }
      },
      { threshold: 0.18, ...options }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [options]);

  return [ref, visible] as const;
}
