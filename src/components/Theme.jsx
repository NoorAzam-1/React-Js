'use client';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-900 p-4">
      <h1 className="text-black dark:text-white">Hello World</h1>
      <button 
        onClick={toggleTheme}
        className="bg-gray-200 dark:bg-gray-700 p-2 rounded"
      >
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}