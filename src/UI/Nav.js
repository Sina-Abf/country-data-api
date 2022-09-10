import { useState } from 'react';
import { Link } from 'react-router-dom';
import useDarkmode from '../hooks/useDarkmode';
import { DarkSvg, LightSvg } from './Svg';

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
      <div className="flex items-center justify-between gap-x-4 p-5">
        <Link
          to="/1"
          className="font-extrabold text-lg md:text-2xl dark:text-white"
        >
          Where in the world?
        </Link>
        <div
          checked={darkMode}
          onClick={toggleDarkMode}
          className="flex gap-x-1 items-center cursor-pointer"
        >
          <span>{colorTheme === 'light' ? <LightSvg /> : <DarkSvg />}</span>
          <p className="dark:text-white font-semibold select-none md:text-2xl text-lg">
            {colorTheme === 'light' ? 'Light Mode' : 'Dark Mode'}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
