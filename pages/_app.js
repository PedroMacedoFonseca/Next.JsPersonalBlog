import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css'; 
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme); 
  };

  return (
    <>
      <span className={`theme-${theme}`} />
      <button onClick={toggleTheme} className="theme-toggle-btn">
        Toggle Theme
      </button>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
