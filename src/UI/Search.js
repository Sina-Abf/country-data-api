import React from 'react';

const Search = () => {
  return (
    <form className="mb-10 flex md:w-1/3 justify-center items-center px-8">
      <div className="bg-white shadow flex w-3/4 md:w-full items-center px-4">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-Dark-Gray"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          className="w-full placeholder:text-Dark-Gray p-2 outline-none bg-transparent"
          placeholder="Search for a country..."
          type="search"
        />
      </div>
    </form>
  );
};

export default Search;
