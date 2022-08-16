import React, { Suspense } from 'react';
import { useEffect, useState, useCallback, useContext } from 'react';
import CountryCtx from '../../store/country-ctx';
import { motion } from 'framer-motion';
import Spinner from '../../UI/Spinner';
import Pagination from './Pagination';
import { useParams } from 'react-router-dom';

const CountriesItem = React.lazy(() => import('./CountriesItem'));

const Countries = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [countryData, setCountryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(18);

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

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countryData.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  let filteredCountryData = [...currentCountries];

  if (countryCtx.searchWord) {
    filteredCountryData = [...countryData];
    filteredCountryData = filteredCountryData.filter((country) =>
      country.name.common.toLowerCase().includes(countryCtx.searchWord)
    );
  }
  if (countryCtx.selectWord) {
    filteredCountryData = [...countryData];
    filteredCountryData = filteredCountryData.filter(
      (country) => country.region.toLowerCase() === countryCtx.selectWord
    );
  }

  const changePaginateHandler = useCallback(() => {
    const pageNum = params.pageNum;
    setCurrentPage(pageNum);
    countryCtx.searchWordHandler('');
    window.scrollTo(0, 0);
  }, [params.pageNum]);

  useEffect(() => {
    changePaginateHandler();
  }, [params.pageNum, changePaginateHandler]);

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
          className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 md:gap-10 md:px-8 lg:grid-cols-3 "
        >
          {filteredCountryData.map((country) => {
            return (
              <Suspense fallback={<Spinner />}>
                <CountriesItem
                  key={country.name.official}
                  population={country.population}
                  capital={country.capital}
                  region={country.region}
                  img={country.flags.png}
                  name={country.name.common}
                />
              </Suspense>
            );
          })}
        </motion.ul>
      )}
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countryData.length}
        onClick={changePaginateHandler}
      />
    </>
  );
};

export default Countries;
