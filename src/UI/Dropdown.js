import { useContext } from 'react';
import CountryCtx from '../store/country-ctx';

const Dropdown = (props) => {
  const countryCtx = useContext(CountryCtx);

  const regionChangeHandler = (event) => {
    countryCtx.selectWordHandler(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="px-4 w-1/3  mb-12">
      <select
        onChange={regionChangeHandler}
        className="w-full shadow p-2 outline-none"
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
