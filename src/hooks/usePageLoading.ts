import { useState, useEffect } from 'react';

export const usePageLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Initial page load
    if (isInitialLoad) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsInitialLoad(false);
      }, 2000); // Minimum loading time

      return () => clearTimeout(timer);
    }
  }, [isInitialLoad]);

  const startLoading = () => {
    setIsLoading(true);
    // Simulate page transition loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return {
    isLoading,
    startLoading,
    isInitialLoad
  };
};