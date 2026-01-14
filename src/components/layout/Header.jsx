// src/components/layout/Header.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../ui/Icon';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { getCartCount } = useCart();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="relative w-full border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
        {/* Logo & Navigation */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3 text-white">
            <div className="size-8 text-blue-500">
              <Icon name="diamond" className="text-3xl" />
            </div>
            <h2 className="text-white text-xl font-bold tracking-tight">
              Luxury Scents
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-white' 
                  : 'text-slate-300 hover:text-blue-500'
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/men"
              className={`text-sm font-medium transition-colors ${
                isActive('/men') 
                  ? 'text-blue-500 font-bold' 
                  : 'text-slate-300 hover:text-blue-500'
              }`}
            >
              Hombres
            </Link>
            <Link 
              to="/women"
              className={`text-sm font-medium transition-colors ${
                isActive('/women') 
                  ? 'text-pink-400 font-bold' 
                  : 'text-slate-300 hover:text-pink-400'
              }`}
            >
              Mujeres
            </Link>
            <Link 
              to="/offers"
              className={`text-sm font-medium transition-colors ${
                isActive('/offers') 
                  ? 'text-green-400 font-bold' 
                  : 'text-slate-300 hover:text-green-400'
              }`}
            >
              Ofertas
            </Link>
          </nav>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Icon name="search" className="text-[20px]" />
            </div>
            <input 
              className="block w-full rounded-lg border-none bg-slate-800 py-2 pl-10 pr-3 text-sm text-white placeholder-slate-400 focus:ring-1 focus:ring-green-400" 
              placeholder="Buscar perfume..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Cart/Quote */}
          <Link
            to="/cart"
            className="relative flex items-center justify-center p-2 text-white hover:text-green-400 transition-colors"
          >
            <Icon name="shopping_cart" />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 size-5 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-slate-900">
                {getCartCount()}
              </span>
            )}
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900">
          <nav className="flex flex-col p-4 space-y-3">
            <Link 
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'bg-slate-800 text-white' 
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/men"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                isActive('/men') 
                  ? 'bg-slate-800 text-blue-500' 
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Hombres
            </Link>
            <Link 
              to="/women"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                isActive('/women') 
                  ? 'bg-slate-800 text-pink-400' 
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Mujeres
            </Link>
            <Link 
              to="/offers"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                isActive('/offers') 
                  ? 'bg-slate-800 text-green-400' 
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Ofertas
            </Link>
            
            {/* Mobile Search */}
            <div className="relative pt-2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Icon name="search" className="text-[20px]" />
              </div>
              <input 
                className="block w-full rounded-lg border-none bg-slate-800 py-2 pl-10 pr-3 text-sm text-white placeholder-slate-400 focus:ring-1 focus:ring-green-400" 
                placeholder="Buscar perfume..." 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;