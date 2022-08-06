import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

      setCountryData(data);
    };
    apiQuery().catch((err) => {
      setHasError(err.message);
      setIsLoading(false);
    });
  }, []);
  console.log(countryData);
  return (
    <>
      <nav className="bg-white shadow mb-5">
        <div className="flex items-center justify-between p-5">
          <h1 className="font-extrabold md:text-xl">Where in the world?</h1>
          <div className="flex gap-x-3 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </span>
            <p className="font-semibold md:text-xl text-sm">Dark Mode</p>
          </div>
        </div>
      </nav>
      <div className="p-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center gap-x-2 rounded shadow-lg px-4"
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
            />
          );
        })}
      </ul>
    </>
  );
};

export default CountryDetails;
