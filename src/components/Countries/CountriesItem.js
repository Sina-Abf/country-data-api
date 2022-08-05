import React from 'react';

const CountriesItem = (props) => {
  return (
    <li className="bg-white w-1/2 h-full mx-auto md:w-full my-4 shadow-lg rounded overflow-hidden">
      <div className="w-full h-3/5">
        <img className="w-full h-full" src={props.img} alt={props.name} />
      </div>
      <div className="p-5">
        <h1 className="font-bold mb-4 md:mb-2 md:text-lg">{props.name}</h1>
        <div className="px-1">
          <p className="font-semibold text-sm md:text-lg">
            Population: {props.population.toLocaleString('en-US')}
          </p>
          <p className="font-semibold text-sm md:text-lg">
            Region: {props.region}
          </p>
          <p className="font-semibold text-sm md:text-lg">
            Capital: {props.capital}
          </p>
        </div>
      </div>
    </li>
  );
};

export default CountriesItem;