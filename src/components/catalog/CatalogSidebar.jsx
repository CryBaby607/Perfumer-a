// src/components/catalog/CatalogSidebar.jsx
import { useState } from 'react';
import Icon from '../ui/Icon';

const CatalogSidebar = ({ brands, scentFamilies, onFilterChange }) => {
  const [selectedBrands, setSelectedBrands] = useState(['Tom Ford']);
  const [selectedScents, setSelectedScents] = useState(['Fresh']);
  const [priceRange, setPriceRange] = useState({ min: 50, max: 500 });

  const handleBrandToggle = (brand) => {
    const newBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand];
    
    setSelectedBrands(newBrands);
    onFilterChange({ brands: newBrands, scents: selectedScents, priceRange });
  };

  const handleScentToggle = (scent) => {
    const newScents = selectedScents.includes(scent)
      ? selectedScents.filter(s => s !== scent)
      : [...selectedScents, scent];
    
    setSelectedScents(newScents);
    onFilterChange({ brands: selectedBrands, scents: newScents, priceRange });
  };

  const handleResetFilters = () => {
    setSelectedBrands([]);
    setSelectedScents([]);
    setPriceRange({ min: 50, max: 500 });
    onFilterChange({ brands: [], scents: [], priceRange: { min: 50, max: 500 } });
  };

  return (
    <aside className="sticky top-[73px] hidden h-[calc(100vh-73px)] w-72 flex-col gap-6 overflow-y-auto border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:flex">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Filters</h3>
        <button 
          onClick={handleResetFilters}
          className="text-xs text-slate-500 dark:text-slate-400 hover:text-blue-500 transition"
        >
          Reset All
        </button>
      </div>

      {/* Price Range */}
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">Price Range</p>
        <div className="pt-4 pb-2 px-2">
          <div className="relative h-1 w-full rounded-full bg-slate-300 dark:bg-slate-700">
            <div className="absolute left-[20%] right-[30%] h-full rounded-full bg-blue-500"></div>
            <div className="absolute left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2 size-4 cursor-pointer rounded-full border-2 border-blue-500 bg-white dark:bg-slate-900 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"></div>
            <div className="absolute right-[30%] top-1/2 translate-x-1/2 -translate-y-1/2 size-4 cursor-pointer rounded-full border-2 border-blue-500 bg-white dark:bg-slate-900 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"></div>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>$50</span>
            <span>$500+</span>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">Brands</p>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex cursor-pointer items-center gap-3 group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandToggle(brand)}
                  className="peer size-4 appearance-none rounded border border-slate-300 dark:border-slate-700 bg-transparent checked:border-blue-500 checked:bg-blue-500 focus:ring-0 focus:ring-offset-0"
                />
                <Icon 
                  name="check" 
                  className="pointer-events-none absolute left-0 top-0 text-[16px] text-white opacity-0 peer-checked:opacity-100" 
                />
              </div>
              <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-blue-500 transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Scent Family */}
      <div className="flex flex-col gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">Scent Family</p>
        <div className="space-y-2">
          {scentFamilies.map((scent) => (
            <label key={scent} className="flex cursor-pointer items-center gap-3 group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={selectedScents.includes(scent)}
                  onChange={() => handleScentToggle(scent)}
                  className="peer size-4 appearance-none rounded border border-slate-300 dark:border-slate-700 bg-transparent checked:border-blue-500 checked:bg-blue-500 focus:ring-0 focus:ring-offset-0"
                />
                <Icon 
                  name="check" 
                  className="pointer-events-none absolute left-0 top-0 text-[16px] text-white opacity-0 peer-checked:opacity-100" 
                />
              </div>
              <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-blue-500 transition-colors">
                {scent}
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default CatalogSidebar;