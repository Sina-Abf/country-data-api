import Countries from './components/Countries/Countries';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import CountryDetails from './components/Countries/CountryDetails';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="font-Nunito min-h-screen dark:bg-Very-Dark-Blue2 transition-all duration-500 dark:h-1 dark:scrollbar dark:scrollbar-thumb-Very-Dark-Blue2 dark:scrollbar-track-Dark-Gray">
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </div>
  );
}

export default App;
