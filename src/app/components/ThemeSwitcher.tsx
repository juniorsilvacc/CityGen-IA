"use client";

import { useTheme } from "next-themes";
import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeSwitcher() {
  const { setTheme } = useTheme();
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    setTheme(isLightMode ? 'dark' : 'light');
  };

  return (
    <div className="my-3">
      <button
        onClick={toggleTheme}
        className={`${
          isLightMode ? 'bg-gray-300 text-gray-800' : 'bg-gray-800 text-white'
        } flex items-center justify-center font-semibold py-2 px-4 rounded-full`}
      >
        {isLightMode ? <FaSun className="mr-1" /> : <FaMoon className="mr-1" />}
        {isLightMode ? '' : ''}
      </button>
    </div>
  );
}