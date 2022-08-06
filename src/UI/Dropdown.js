import { useContext } from 'react';
import CountryCtx from '../store/country-ctx';

const Dropdown = (props) => {
  const countryCtx = useContext(CountryCtx);

  const regionChangeHandler = (event) => {
    let value = event.target.value;
    if (value === 'Filter by Region') {
      value = '';
    }
    countryCtx.selectWordHandler(value.toLowerCase());
  };

  return (
    <div className="px-4 w-2/3 mb-12 mx-auto md:mx-0 md:w-1/3">
      <select
        onChange={regionChangeHandler}
        className="w-full transition-all duration-500 dark:bg-Dark-Blue dark:text-white shadow p-2 outline-none"
      >
        <option>Filter by Region</option>
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  );
};

export default Dropdown;
