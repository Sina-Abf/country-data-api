import Countries from './components/Countries/Countries';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="font-Nunito">
      <Navbar />
      <Routes>
        <Route path="/" element={<Countries />} />
      </Routes>
    </div>
  );
}

export default App;
