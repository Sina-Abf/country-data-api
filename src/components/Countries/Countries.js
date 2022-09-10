import React, { Suspense } from 'react';
import { useEffect, useState, useCallback, useContext } from 'react';
import CountryCtx from '../../store/country-ctx';
import { motion } from 'framer-motion';
import Spinner from '../../UI/Spinner';
import Pagination from './Pagination';
import { useParams } from 'react-router-dom';
import useCountries from '../../hooks/useCountries';

const CountriesItem = React.lazy(() => import('./CountriesItem'));

const Countries = () => {
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(18);

  const countryCtx = useContext(CountryCtx);

  const changePaginateHandler = useCallback(() => {
    const pageNum = params.pageNum;
    setCurrentPage(pageNum);
    countryCtx.searchWordHandler('');
    window.scrollTo(0, 0);
  }, [params.pageNum]);

  useEffect(() => {
    changePaginateHandler();
  }, [params.pageNum, changePaginateHandler]);

  const { data, isLoading, isError, error } = useCountries();

  console.log(data);

  if (isLoading) return <Spinner />;

  if (isError && !isLoading)
    return (
      <p className="text-center font-bold text-2xl text-white">
        {error.message}, Please Try Again..
      </p>
    );

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = data.slice(indexOfFirstCountry, indexOfLastCountry);

  let filteredCountryData = [...currentCountries];

  if (countryCtx.searchWord) {
    filteredCountryData = [...data];
    filteredCountryData = filteredCountryData.filter((country) =>
      country.name.common.toLowerCase().includes(countryCtx.searchWord)
    );
  }
  if (countryCtx.selectWord) {
    filteredCountryData = [...data];
    filteredCountryData = filteredCountryData.filter(
      (country) => country.region.toLowerCase() === countryCtx.selectWord
    );
  }

  return (
    <>
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

      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={data.length}
        onClick={changePaginateHandler}
      />
    </>
  );
};

export default Countries;
