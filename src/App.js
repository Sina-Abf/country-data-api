import Countries from './components/Countries/Countries';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import CountryDetails from './components/Countries/CountryDetails';

function App() {
  return (
    <div className="font-Nunito min-h-screen dark:bg-Very-Dark-Blue2 transition-all duration-500">
      <Routes>
        <Route path="/" element={<Navigate to="/1" />} />
        <Route
          path="/:pageNum"
          element={
            <>
              <Navbar />
              <Countries />
            </>
          }
        />
        <Route path="/:pageNum/:countryId" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
