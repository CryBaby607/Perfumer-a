// src/components/ui/ProductCard.jsx
import Icon from './Icon';

const ProductCard = ({ product, onAddToCart }) => (
  <div className="flex-none w-[280px] snap-center flex flex-col gap-4 rounded-xl bg-slate-800 border border-slate-700 p-3 hover:border-blue-500/30 transition-all duration-300">
    <div className="w-full aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden relative group">
      <div 
        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      {product.badge && (
        <div className={`absolute top-2 right-2 ${product.badge === 'Luxury' ? 'bg-blue-500' : 'bg-black/70'} text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm`}>
          {product.badge}
        </div>
      )}
    </div>
    <div className="flex flex-col gap-1 px-1">
      <h4 className="text-white text-lg font-bold truncate">{product.name}</h4>
      <p className="text-slate-400 text-sm">{product.brand}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-green-400 font-bold text-lg">${product.price}</span>
        <button 
          onClick={() => onAddToCart(product)}
          className="size-10 rounded-full bg-slate-700 text-white flex items-center justify-center hover:bg-green-400 hover:text-black transition-colors"
        >
          <Icon name="add_shopping_cart" className="text-[20px]" />
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;