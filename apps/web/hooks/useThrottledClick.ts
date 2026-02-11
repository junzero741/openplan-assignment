"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type UseThrottledClickOptions = {
  throttleMs?: number;
  disabled?: boolean;
};

export function useThrottledClick(
  action: () => Promise<void>,
  options: UseThrottledClickOptions = {},
) {
  const { throttleMs = 800, disabled = false } = options;
  const isThrottledRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleThrottledClick = useCallback(async () => {
    setIsLocked(true);
    if (disabled || isLocked || isThrottledRef.current) {
      return;
    }

    isThrottledRef.current = true;
    timeoutRef.current = window.setTimeout(() => {
      isThrottledRef.current = false;
    }, throttleMs);

    try {
      await action();
    } catch {
      setIsLocked(false);
    }
  }, [action, disabled, isLocked, throttleMs]);

  return { handleThrottledClick, isLocked };
}
