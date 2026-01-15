// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import MenCatalogPage from './pages/MenCatalogPage';
import WomenCatalogPage from './pages/WomenCatalogPage';
import OffersPage from './pages/OffersPage';
import CartPage from './pages/CartPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/men" element={<MenCatalogPage />} />
          <Route path="/women" element={<WomenCatalogPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:gender/:id" element={<ProductDetailPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;