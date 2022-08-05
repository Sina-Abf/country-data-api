import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow mb-5">
      <div className="flex justify-between p-5">
        <h1 className=" font-extrabold">Where in the world?</h1>
        <div className="flex gap-x-3 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          <p className="font-semibold text-sm md:text-lg">Dark Mode</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
