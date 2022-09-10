import { useQuery } from 'react-query';

const useCountries = () => {
  const useCountry = useQuery(
    'countries',
    async () => {
      const data = await fetch('https://restcountries.com/v3.1/all');
      const res = await data.json();
      return res;
    },
    {
      staleTime: Infinity,
    }
  );

  return useCountry;
};
export default useCountries;
