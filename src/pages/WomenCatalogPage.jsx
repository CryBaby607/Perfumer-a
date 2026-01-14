// src/pages/WomenCatalogPage.jsx
import { useState } from 'react';
import Header from '../components/layout/Header';
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp';
import Icon from '../components/ui/Icon';
import { womenProducts, womenBrands, womenScentFamilies } from '../data/womenProducts';
import { useCart } from '../context/CartContext';

const WomenCatalogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === 'All'
    ? womenProducts
    : womenProducts.filter(p => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      default: return 0;
    }
  });

  const handleAddToQuote = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const handleWhatsApp = (product) => {
    const message = `Hi! I'm interested in ${product.name} by ${product.brand} ($${product.price})`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-pink-50 dark:from-slate-950 dark:to-slate-900">
      <Header />

      {/* Hero Banner */}
      <div className="relative w-full min-h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWR3XchqF6Ib-Zr7LUCS65FHzDZSkArlDV07cOTOvwyjzDaPJ_Q6ORKavKxlq3X0d_m2ypC-zWgtLkE4b1SRsmzM69afGyQouTEveeFbc5v4akP-DspzYejNmvcclZHWFnrmhOEppx1CgICLuuxYPF5Ht3uZoRZtzYaR9VBZtAj23oR_cB-33jmcA4ukmnl4Ej7_7WEMyULr31VrjR_hCAkBRahP94fp0logiaLffZCRFvLTXbg1dWrpP2P1PIdxeXWKbL_0vJUV4")'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-10 h-[400px] flex flex-col justify-end pb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[1px] w-12 bg-pink-400"></span>
            <p className="text-pink-400 font-bold tracking-widest uppercase text-sm">Silver Edition</p>
          </div>
          <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight mb-4">
            Women's Collection
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl">
            Discover exclusive fragrances from top luxury brands. Scents that define elegance and sophistication.
          </p>
        </div>
      </div>

      <main className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-8">
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 sticky top-[73px] z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm py-4 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                selectedCategory === 'All'
                  ? 'bg-pink-400 text-white'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-slate-700'
              }`}
            >
              All Brands
            </button>
            {womenScentFamilies.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-pink-400 text-white'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            <span className="text-sm text-slate-500 dark:text-slate-400">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border-none bg-white dark:bg-slate-800 py-2 px-3 text-sm font-medium text-slate-900 dark:text-white focus:ring-1 focus:ring-pink-400"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col gap-4 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-transparent hover:border-pink-400/40 dark:hover:border-pink-400/40 transition-all duration-300 hover:shadow-xl dark:hover:shadow-pink-900/10"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/5] bg-gray-50 dark:bg-slate-900 rounded-xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                {product.badge && (
                  <div className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-bold ${
                    product.badge === 'Limited' 
                      ? 'bg-gradient-to-r from-gray-200 to-pink-200 text-slate-900'
                      : 'bg-pink-400 text-white'
                  }`}>
                    {product.badge}
                  </div>
                )}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="size-8 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md flex items-center justify-center text-pink-400 hover:bg-pink-400 hover:text-white transition-colors">
                    <Icon name="favorite" className="text-[20px]" />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1">
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">
                  {product.brand}
                </p>
                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">
                  {product.name}
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <p className="text-slate-900 dark:text-white text-base font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.originalPrice && (
                    <p className="text-gray-400 dark:text-gray-500 text-sm line-through">
                      ${product.originalPrice.toFixed(2)}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <button
                  onClick={() => handleAddToQuote(product)}
                  className="mt-3 w-full h-10 rounded-lg border border-pink-400 text-pink-400 font-semibold text-sm hover:bg-pink-400 hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Add to Quote
                  <Icon name="arrow_forward" className="text-[18px] group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Results count */}
        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
          Showing {sortedProducts.length} results
        </p>
      </main>

      <FloatingWhatsApp />
    </div>
  );
};

export default WomenCatalogPage;