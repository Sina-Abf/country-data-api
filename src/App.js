import Countries from './components/Countries/Countries';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/Countries/CountryDetails';

function App() {
  return (
    <div className="font-Nunito">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Countries />
            </>
          }
        />
        <Route path=":countryId" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
