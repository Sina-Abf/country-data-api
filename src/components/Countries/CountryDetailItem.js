import React from 'react';

const CountryDetailItem = (props) => {
  return (
    <li className="grid grid-cols-1 md:grid-cols-5">
      <div className="mb-4 md:mb-0 col-start-1 md:row-start-2 flex justify-center items-center md:w-full md:scale-125 mx-auto md:ml-28">
        <img src={props.img} alt={props.name} className="w-full" />
      </div>
      <div className="p-6 md:p-0 md:col-start-3 mt-20 dark:text-white">
        <h1 className="font-bold mb-4 md:text-3xl">{props.name}</h1>
      </div>
      <div className="mb-8 md:col-start-3 flex flex-col gap-y-1 dark:text-white">
        <div className="px-6 md:px-0">
          <span className="mr-2 font-semibold dark:font-medium md:text-xl">
            Native Name:
          </span>
          <span className="md:text-xl dark:font-medium">
            {props.nativeName}
          </span>
        </div>
        <div className="px-6 md:px-0">
          <span className="mr-2 font-semibold md:text-xl dark:font-medium">
            Population:
          </span>
          <span className="md:text-xl">
            {props.population.toLocaleString('en-US')}
          </span>
        </div>
        <div className="px-6 md:px-0">
          <span className="mr-2 font-semibold md:text-xl dark:font-medium">
            Region:
          </span>
          <span className="md:text-xl">{props.region}</span>
        </div>
        <div className="px-6 md:px-0">
          <span className="mr-2 font-semibold md:text-xl dark:font-medium">
            Sub Region:
          </span>
          <span className="md:text-xl">{props.subRegion}</span>
        </div>
        <div className="px-6 md:px-0">
          <span className="mr-2 font-semibold md:text-xl dark:font-medium">
            Capital:
          </span>
          <span className="md:text-xl">{props.capital}</span>
        </div>
      </div>

      <div className="dark:text-white md:col-start-4 md:ml-20 mb-8 md:mb-0">
        <div className="px-6 md:px-0">
          <span className="mr-2 font-semibold dark:font-medium md:text-xl">
            Currencies:
          </span>
          <span className="md:text-xl dark:font-medium">
            {props.currencies}
          </span>
        </div>
        <div className="px-6 md:px-0">
          <span className="mr-2 font-semibold dark:font-medium md:text-xl">
            Languages:
          </span>
          <span className="md:text-xl dark:font-medium">
            {' '}
            {props.languages}
          </span>
        </div>
      </div>
      <div className="md:col-start-3">
        <h1 className="font-bold dark:text-white dark:font-medium mb-4 px-6 md:px-0 md:text-xl">
          Border Countries:
        </h1>
        <div className="flex justify-center items-center gap-x-5 ">
          <span className="px-6 md:text-lg shadow-[0.5px_-0.5px_5px_rgba(0,0,0,0.2)] bg-white dark:bg-Dark-Blue dark:text-white">
            {props.borders[0] || '-'}
          </span>
          <span className="px-6 md:text-lg shadow-[0.5px_-0.5px_5px_rgba(0,0,0,0.2)] bg-white dark:bg-Dark-Blue dark:text-white">
            {props.borders[1] || '-'}
          </span>
          <span className="px-6 md:text-lg shadow-[0.5px_-0.5px_5px_rgba(0,0,0,0.2)] bg-white dark:bg-Dark-Blue dark:text-white">
            {props.borders[2] || '-'}
          </span>
        </div>
      </div>
    </li>
  );
};

export default CountryDetailItem;
