import { useEffect } from 'react';
import { useMedia } from './useMedia';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  // Use our useLocalStorage hook to persist state through a page refresh.
  // Read the recipe for this hook to learn more: usehooks.com/useLocalStorage
  const [enabledState, setEnabledState] = useLocalStorage<boolean>(
    'dark-mode-enabled',
    false
  );
  useEffect(
    () => {
      const className = 'dark-mode';
      const element = window.document.body;
      if (enabledState) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [enabledState] // Only re-call effect when value changes
  );
  // Return enabled state and setter
  return [enabledState, setEnabledState] as const;
};

// Compose our useMedia hook to detect dark mode preference.
const usePrefersDarkMode = () => {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false);
};
