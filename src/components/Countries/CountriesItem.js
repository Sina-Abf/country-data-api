import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CountriesItem = (props) => {
  return (
    <motion.li
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      className="bg-white transition-colors duration-500 dark:bg-Dark-Blue dark:text-white w-2/3 h-full mx-auto md:w-full my-4 shadow-xl dark:shadow-2xl rounded overflow-hidden"
    >
      <Link to={`${props.name}`}>
        <div className="w-full h-3/5">
          <img className="w-full h-full" src={props.img} alt={props.name} />
        </div>
        <div className="p-5">
          <h1 className="font-bold mb-4 md:mb-2 md:text-lg">{props.name}</h1>
          <div className="px-1">
            <p className="font-semibold dark:font-medium text-sm md:text-lg">
              Population: {props.population.toLocaleString('en-US')}
            </p>
            <p className="font-semibold dark:font-medium text-sm md:text-lg">
              Region: {props.region}
            </p>
            <p className="font-semibold dark:font-medium text-sm md:text-lg">
              Capital: {props.capital}
            </p>
          </div>
        </div>
      </Link>
    </motion.li>
  );
};

export default CountriesItem;
