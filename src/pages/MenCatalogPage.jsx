// src/pages/MenCatalogPage.jsx
import { useState } from 'react';
import Header from '../components/layout/Header';
import CatalogSidebar from '../components/catalog/CatalogSidebar';
import CatalogProductCard from '../components/catalog/CatalogProductCard';
import Pagination from '../components/catalog/Pagination';
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp';
import Icon from '../components/ui/Icon';
import { menProducts, brands, scentFamilies } from '../data/menProducts';
import { useCart } from '../context/CartContext';

const MenCatalogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    brands: [],
    scents: [],
    priceRange: { min: 50, max: 500 }
  });
  const [sortBy, setSortBy] = useState('featured');
  const { addToCart } = useCart();

  // Filtrar productos
  const filteredProducts = menProducts.filter(product => {
    // Filtro de marcas
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
      return false;
    }
    
    // Filtro de categorías (scent families)
    if (filters.scents.length > 0 && !filters.scents.includes(product.category)) {
      return false;
    }
    
    // Filtro de precio
    if (product.price < filters.priceRange.min || product.price > filters.priceRange.max) {
      return false;
    }
    
    return true;
  });

  // Ordenar productos
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset a página 1 cuando se filtran
  };

  const handleAddToQuote = (product) => {
    addToCart(product);
    // Opcional: mostrar notificación
    alert(`${product.name} added to cart!`);
  };

  const handleWhatsApp = (product) => {
    const message = `Hi! I'm interested in ${product.name} by ${product.brand} ($${product.price})`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      <Header />
      
      <div className="mx-auto flex max-w-[1440px] flex-col md:flex-row flex-1 w-full">
        {/* Sidebar */}
        <CatalogSidebar 
          brands={brands}
          scentFamilies={scentFamilies}
          onFilterChange={handleFilterChange}
        />

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">
          {/* Mobile Filters & Sort */}
          <div className="mb-6 flex items-center justify-between md:hidden">
            <button className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-sm font-medium text-slate-900 dark:text-white">
              <Icon name="filter_list" className="text-[18px]" />
              Filters
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500 dark:text-slate-400">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-lg border-none bg-white dark:bg-slate-900 py-1 pl-2 pr-8 text-sm font-medium text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>

          {/* Page Title */}
          <div className="mb-10 flex flex-col gap-2">
            <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              Men's Collection
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Discover masculine luxury and timeless essences.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
              Showing {sortedProducts.length} results
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sortedProducts.map((product) => (
              <CatalogProductCard
                key={product.id}
                product={product}
                onAddToQuote={handleAddToQuote}
                onWhatsApp={handleWhatsApp}
              />
            ))}
          </div>

          {/* Empty State */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <Icon name="search_off" className="text-6xl text-slate-300 dark:text-slate-700 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                No products found
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Try adjusting your filters
              </p>
            </div>
          )}

          {/* Pagination */}
          {sortedProducts.length > 0 && (
            <Pagination 
              currentPage={currentPage}
              totalPages={3}
              onPageChange={setCurrentPage}
            />
          )}
        </main>
      </div>

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
};

export default MenCatalogPage;