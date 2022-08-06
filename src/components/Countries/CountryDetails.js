import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Nav from '../../UI/Nav';
import Spinner from '../../UI/Spinner';
import CountryDetailItem from './CountryDetailItem';

const CountryDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [countryData, setCountryData] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const apiQuery = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${params.countryId}`
      );

      if (!response.ok) {
        throw new Error('Something Went Wrong!');
      }

      const data = await response.json();

      setIsLoading(false);

      setCountryData(data.slice(0, 1));
    };
    apiQuery().catch((err) => {
      setHasError(err.message);
      setIsLoading(false);
    });
  }, [params.countryId]);

  console.log(countryData);

  return (
    <section className="min-h-screen">
      <Nav />
      <div className="p-4">
        <button
          onClick={() => navigate(-1)}
          className="dark:text-white dark:bg-Dark-Blue flex items-center justify-center gap-x-2 rounded shadow-lg px-4 py-1"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
          </span>
          <span>Back</span>
        </button>
      </div>
      {isLoading && <Spinner />}
      {hasError && !isLoading && (
        <p className="text-center font-bold text-2xl">
          {hasError}, Please Try Again..
        </p>
      )}
      {!isLoading && !hasError && (
        <ul>
          {countryData.map((country) => {
            return (
              <CountryDetailItem
                key={country.name.common}
                name={country.name.common}
                img={country.flags.png}
                nativeName={Object.values(country.name.nativeName)[0].official}
                population={country.population}
                region={country.region}
                subRegion={country.subregion}
                capital={country.capital}
                currencies={Object.values(country.currencies)[0].name}
                languages={Object.values(country.languages)[0]}
                borders={country.borders || ['-', '-', '-']}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default CountryDetails;
