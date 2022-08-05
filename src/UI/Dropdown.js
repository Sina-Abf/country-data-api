const Dropdown = (props) => {
  // // const [region, setRegion] = useState('');
  // // const [isChanged, setIsChanged] = useState(false);

  // const regionChangeHandler = (event) => {
  //   setRegion(event.target.value);
  //   setIsChanged(true);
  // };

  return (
    <div className="px-4 w-1/3  mb-12">
      <select className="w-full shadow p-2">
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
