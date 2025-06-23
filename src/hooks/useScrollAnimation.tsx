
import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLElement>(options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0
  } = options;

  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
      if (delay > 0) {
        timeoutRef.current = setTimeout(() => {
          setIsVisible(true);
          setHasAnimated(true);
        }, delay);
      } else {
        // Use requestAnimationFrame for 60fps smooth transitions
        requestAnimationFrame(() => {
          setIsVisible(true);
          setHasAnimated(true);
        });
      }
    } else if (!triggerOnce && !entry.isIntersecting) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      requestAnimationFrame(() => {
        setIsVisible(false);
      });
    }
  }, [triggerOnce, delay, hasAnimated]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [threshold, rootMargin, handleIntersection]);

  return { elementRef, isVisible };
};

export default useScrollAnimation;
