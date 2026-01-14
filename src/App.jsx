// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenCatalogPage from './pages/MenCatalogPage';
import WomenCatalogPage from './pages/WomenCatalogPage';
import OffersPage from './pages/OffersPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<MenCatalogPage />} />
        <Route path="/women" element={<WomenCatalogPage />} />
        <Route path="/offers" element={<OffersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;