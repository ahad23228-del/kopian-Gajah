import React, { useState, useEffect } from 'react';

function DarkModeToggle() {
  const savedMode = localStorage.getItem('darkMode') === 'true';
  const [isDark, setIsDark] = useState(savedMode);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDark]);

  return (
    <button 
      onClick={toggleTheme}
      style={{
        /* Gaya baru: Tidak lagi fixed/melayang */
        background: isDark ? '#fff' : '#333',
        color: isDark ? '#333' : '#fff',
        border: '2px solid #fff',
        padding: '5px 15px',
        borderRadius: '20px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '0.8rem',
        marginLeft: '10px', /* Jarak dari menu sebelah */
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
      }}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}

export default DarkModeToggle;