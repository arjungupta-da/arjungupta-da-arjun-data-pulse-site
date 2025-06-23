
import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  duration?: number;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLElement>(options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true,
    delay = 0,
    duration = 800
  } = options;

  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rafRef = useRef<number | null>(null);

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    const element = elementRef.current;
    if (!element) return;

    if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
      // Cancel any pending animations
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      const animate = () => {
        rafRef.current = requestAnimationFrame(() => {
          setIsVisible(true);
          setHasAnimated(true);
        });
      };

      if (delay > 0) {
        timeoutRef.current = setTimeout(animate, delay);
      } else {
        animate();
      }
    } else if (!triggerOnce && !entry.isIntersecting) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      
      rafRef.current = requestAnimationFrame(() => {
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
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [threshold, rootMargin, handleIntersection]);

  return { elementRef, isVisible };
};

export default useScrollAnimation;
