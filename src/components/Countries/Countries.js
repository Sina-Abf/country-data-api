import { useEffect, useState, useContext } from 'react';
import CountryCtx from '../../store/country-ctx';
import CountriesItem from './CountriesItem';
import { motion } from 'framer-motion';

const Countries = (props) => {
  const [countryData, setCountryData] = useState([]);
  const countryCtx = useContext(CountryCtx);

  useEffect(() => {
    const apiQuery = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();

      setCountryData(data);
    };
    apiQuery();
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
  );
};

export default Countries;
