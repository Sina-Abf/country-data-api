import { useEffect, useState } from 'react';
import CountriesItem from './CountriesItem';

const Countries = () => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const apiQuery = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountryData(data);
    };
    apiQuery();
  }, []);
  console.log(countryData);
  return (
    <ul className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 md:gap-6 md:px-8 lg:grid-cols-4 ">
      {countryData.map((country) => {
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
    </ul>
  );
};

export default Countries;
