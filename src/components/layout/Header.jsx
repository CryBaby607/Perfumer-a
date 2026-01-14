// src/components/layout/Header.jsx
import { useState } from 'react';
import Icon from '../ui/Icon';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
        {/* Logo & Navigation */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-white">
            <div className="size-8 text-blue-500">
              <Icon name="diamond" className="text-3xl" />
            </div>
            <h2 className="text-white text-xl font-bold tracking-tight">
              Luxury Scents
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a 
              className="text-white hover:text-blue-500 transition-colors text-sm font-medium" 
              href="#"
            >
              Home
            </a>
            <a 
              className="text-slate-300 hover:text-blue-500 transition-colors text-sm font-medium" 
              href="#"
            >
              Catalog
            </a>
            <a 
              className="text-slate-300 hover:text-blue-500 transition-colors text-sm font-medium" 
              href="#"
            >
              Brands
            </a>
          </nav>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Icon name="search" className="text-[20px]" />
            </div>
            <input 
              className="block w-full rounded-lg border-none bg-slate-800 py-2 pl-10 pr-3 text-sm text-white placeholder-slate-400 focus:ring-1 focus:ring-green-400" 
              placeholder="Search perfume..." 
              type="text"
            />
          </div>
          
          <a 
            className="relative flex items-center justify-center p-2 text-white hover:text-green-400 transition-colors" 
            href="#"
          >
            <Icon name="shopping_cart" />
            <span className="absolute top-0 right-0 size-2 bg-green-400 rounded-full"></span>
          </a>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;