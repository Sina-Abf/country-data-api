import React from 'react';

const CountryDetailItem = (props) => {
  return (
    <li className="grid grid-cols-1">
      <div className="mb-4 flex justify-center items-center w-2/3 mx-auto">
        <img src={props.img} />
      </div>
      <div className="p-6">
        <h1 className="font-bold mb-4">{props.name}</h1>
      </div>
      <div className="mb-8">
        <div className="px-6">
          <span className="mr-2 font-semibold">Native Name:</span>
          <span>{props.nativeName}</span>
        </div>
        <div className="px-6">
          <span className="mr-2 font-semibold">Population:</span>
          <span>{props.population.toLocaleString('en-US')}</span>
        </div>
        <div className="px-6">
          <span className="mr-2 font-semibold">Region:</span>
          <span>{props.region}</span>
        </div>
        <div className="px-6">
          <span className="mr-2 font-semibold">Sub Region:</span>
          <span>{props.subRegion}</span>
        </div>
        <div className="px-6">
          <span className="mr-2 font-semibold">Capital:</span>
          <span>{props.capital}</span>
        </div>
      </div>

      <div>
        <div className="px-6">
          <span className="mr-2 font-semibold">Currencies:</span>
          <span>{props.currencies}</span>
        </div>
        <div className="px-6">
          <span className="mr-2 font-semibold">Languages:</span>
          <span>{props.languages}</span>
        </div>
      </div>
    </li>
  );
};

export default CountryDetailItem;
