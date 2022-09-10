import { useParams, useNavigate } from 'react-router-dom';
import useCountries from '../../hooks/useCountries';
import Nav from '../../UI/Nav';
import Spinner from '../../UI/Spinner';
import CountryDetailItem from './CountryDetailItem';

const CountryDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useCountries();

  if (isLoading) return <Spinner />;

  if (isError && !isLoading)
    return (
      <p className="text-center font-bold text-2xl text-white">
        {error.message}, Please Try Again..
      </p>
    );

  const filteredData = data.find(
    (country) => country.name.common === params.countryId
  );

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
      <ul>
        <CountryDetailItem data={filteredData} />
      </ul>
    </section>
  );
};

export default CountryDetails;
