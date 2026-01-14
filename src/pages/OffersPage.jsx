// src/pages/OffersPage.jsx
import { useState } from 'react';
import Header from '../components/layout/Header';
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp';
import Icon from '../components/ui/Icon';
import { offersProducts } from '../data/offersProducts';

const OffersPage = () => {
  const [sortBy, setSortBy] = useState('discount');

  const sortedProducts = [...offersProducts].sort((a, b) => {
    switch (sortBy) {
      case 'discount': return b.discount - a.discount;
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      default: return 0;
    }
  });

  const handleAddToQuote = (product) => {
    alert(`${product.name} added to quote!`);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      {/* Hero Banner */}
      <div className="relative w-full bg-gradient-to-r from-green-600 to-emerald-600 py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Icon name="local_offer" className="text-white" />
            <span className="text-white font-bold text-sm uppercase tracking-wider">Limited Time</span>
          </div>
          <h1 className="text-white text-5xl md:text-6xl font-black mb-4">
            Special Offers
          </h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">
            Save big on premium fragrances. Discover amazing deals on men's and women's perfumes.
          </p>
        </div>
      </div>

      <main className="max-w-[1280px] mx-auto px-4 md:px-10 py-12">
        {/* Controls */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">
              {sortedProducts.length} Products on Sale
            </h2>
            <p className="text-slate-400 text-sm">Mix of men's and women's fragrances</p>
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border-none bg-slate-800 py-2 px-4 text-sm font-medium text-white focus:ring-1 focus:ring-green-400"
          >
            <option value="discount">Best Discount</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <div
              key={`${product.id}-${product.brand}`}
              className="group relative flex flex-col gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-green-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-400/10"
            >
              {/* Discount Badge */}
              <div className="absolute -top-3 -right-3 z-10 bg-gradient-to-r from-green-400 to-emerald-500 text-slate-900 font-black text-lg px-3 py-2 rounded-full shadow-lg">
                -{product.discount}%
              </div>

              {/* Image */}
              <div className="relative w-full aspect-[4/5] bg-slate-900 rounded-lg overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                  {product.brand}
                </p>
                <h3 className="text-white text-lg font-bold leading-tight">
                  {product.name}
                </h3>
                
                {/* Price */}
                <div className="flex items-center gap-3 mt-2">
                  <p className="text-white text-xl font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="text-slate-500 text-sm line-through">
                    ${product.originalPrice.toFixed(2)}
                  </p>
                </div>

                {/* Savings */}
                <p className="text-green-400 text-sm font-semibold mt-1">
                  You save ${(product.originalPrice - product.price).toFixed(2)}
                </p>

                {/* Action */}
                <button
                  onClick={() => handleAddToQuote(product)}
                  className="mt-3 w-full h-10 rounded-lg bg-green-400 text-slate-900 font-bold text-sm hover:bg-green-300 transition-all flex items-center justify-center gap-2"
                >
                  <Icon name="add_shopping_cart" className="text-[18px]" />
                  Add to Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 md:p-12 border border-green-400/20">
          <div className="max-w-2xl mx-auto text-center">
            <Icon name="info" className="text-green-400 text-4xl mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Limited Stock Available
            </h3>
            <p className="text-slate-300 mb-6">
              These offers won't last long. Get your favorite fragrances at unbeatable prices before they're gone.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-green-400 hover:bg-green-300 text-slate-900 font-bold rounded-lg transition-colors">
              <Icon name="chat" />
              Contact via WhatsApp
            </button>
          </div>
        </div>
      </main>

      <FloatingWhatsApp />
    </div>
  );
};

export default OffersPage;