import { useEffect, useState } from 'react';
import './ThemeToggle.sass';

export const ThemeToggle = () => {
  const [dark, setDark] = useState(() => localStorage.getItem('portfolio-theme') === 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => setDark((value) => !value)}
      aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}
      title={`Switch to ${dark ? 'light' : 'dark'} mode`}
    >
      <span aria-hidden="true">{dark ? '☀' : '☾'}</span>
      <span className="theme-toggle__label">{dark ? 'Light' : 'Dark'}</span>
    </button>
  );
};
