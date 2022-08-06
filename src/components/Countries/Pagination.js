import React from 'react';
import { NavLink } from 'react-router-dom';

const Pagination = (props) => {
  const pageNumbers = [];

  for (
    let i = 1;
    i < Math.ceil(props.totalCountries / props.countriesPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  return (
    <ul className="flex justify-center items-center mt-5 gap-x-4 p-4">
      {pageNumbers.map((number) => {
        return (
          <li key={number} className="rounded text-lg text-white">
            <NavLink
              onClick={props.onClick}
              to={`/${number}`}
              className={(navData) =>
                navData.isActive
                  ? 'p-1 text-2xl bg-blue-400 text-white shadow'
                  : ''
              }
            >
              {number}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
