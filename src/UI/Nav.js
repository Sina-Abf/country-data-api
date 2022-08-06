import { useState } from 'react';
import useDarkmode from '../hooks/useDarkmode';

const Nav = () => {
  const [colorTheme, setTheme] = useDarkmode();
  const [darkMode, setDarkmode] = useState(
    colorTheme === 'light' ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkmode(checked);
  };
  return (
    <nav className="bg-white dark:bg-Dark-Blue transition-all duration-500 shadow mb-5">
      <div className="flex items-center justify-between p-5">
        <h1 className="font-extrabold md:text-2xl dark:text-white">
          Where in the world?
        </h1>
        <div
          checked={darkMode}
          onClick={toggleDarkMode}
          className="flex gap-x-3 items-center cursor-pointer"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </span>
          <p className="dark:text-white font-semibold select-none md:text-2xl text-sm">
            Dark Mode
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
