// src/components/home/ProductsSection.jsx
import ProductCard from '../ui/ProductCard';
import Icon from '../ui/Icon';
import { products } from '../../data/products';

const ProductsSection = () => {
  const handleAddToCart = (product) => {
    alert(`¡${product.name} agregado al carrito!`);
  };

  return (
    <div className="w-full py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-2">
              Selección del Editor
            </h2>
            <h3 className="text-white text-3xl font-bold">
              Fragancias Destacadas
            </h3>
          </div>
          <a 
            className="hidden sm:flex items-center gap-1 text-green-400 hover:text-white transition-colors text-sm font-bold" 
            href="#"
          >
            Ver Todo <Icon name="arrow_forward" className="text-lg" />
          </a>
        </div>

        {/* Products Carousel */}
        <div 
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory" 
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none' 
          }}
        >
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;