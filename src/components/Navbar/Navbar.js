import React from 'react';
import Dropdown from '../../UI/Dropdown';
import Search from '../../UI/Search';

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow mb-5">
        <div className="flex items-center justify-between p-5">
          <h1 className="font-extrabold md:text-xl">Where in the world?</h1>
          <div className="flex gap-x-3 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8"
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
            <p className="font-semibold md:text-xl text-sm md:text-lg">
              Dark Mode
            </p>
          </div>
        </div>
      </nav>
      <div className="md:flex md:justify-between">
        <Search />
        <Dropdown />
      </div>
    </>
  );
};

export default Navbar;
