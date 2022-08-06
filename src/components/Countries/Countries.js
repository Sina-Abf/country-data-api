import { useEffect, useState, useContext } from 'react';
import CountryCtx from '../../store/country-ctx';
import CountriesItem from './CountriesItem';
import { motion } from 'framer-motion';
import Spinner from '../../UI/Spinner';

const Countries = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [countryData, setCountryData] = useState([]);
  const countryCtx = useContext(CountryCtx);

  useEffect(() => {
    const apiQuery = async () => {
      setIsLoading(true);
      const response = await fetch('https://restcountries.com/v3.1/all');

      if (!response.ok) {
        throw new Error('Something Went Wrong!');
      }

      const data = await response.json();
      setIsLoading(false);

      setCountryData(data);
    };
    apiQuery().catch((err) => {
      setHasError(err.message);
      setIsLoading(false);
    });
  }, []);

  let filteredCountryData = [...countryData];

  if (countryCtx.searchWord) {
    filteredCountryData = filteredCountryData.filter((country) =>
      country.name.common.toLowerCase().includes(countryCtx.searchWord)
    );
  }
  if (countryCtx.selectWord) {
    filteredCountryData = filteredCountryData.filter(
      (country) => country.region.toLowerCase() === countryCtx.selectWord
    );
  }

  return (
    <>
      {isLoading && <Spinner />}
      {hasError && !isLoading && (
        <p className="text-center font-bold text-2xl">
          {hasError}, Please Try Again..
        </p>
      )}
      {!isLoading && !hasError && (
        <motion.ul
          layout
          className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 md:gap-6 md:px-8 lg:grid-cols-4 "
        >
          {filteredCountryData.map((country) => {
            return (
              <CountriesItem
                key={country.name.official}
                population={country.population}
                capital={country.capital}
                region={country.region}
                img={country.flags.png}
                name={country.name.common}
              />
            );
          })}
        </motion.ul>
      )}
    </>
  );
};

export default Countries;
