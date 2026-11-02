import { useEffect, useRef, useState } from 'react';

/** Passe à `true` la première fois que l'élément entre dans le viewport. */
export const useReveal = <T extends HTMLElement = HTMLDivElement>(threshold = 0.15) => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible] as const;
};
