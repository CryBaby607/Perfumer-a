// src/components/catalog/CatalogProductCard.jsx
import Icon from '../ui/Icon';

const CatalogProductCard = ({ product, onAddToQuote, onWhatsApp }) => {
  const getBadgeStyles = () => {
    if (!product.badge) return null;
    
    if (product.badgeColor === 'red') {
      return 'bg-red-500 text-white';
    }
    return 'bg-slate-200 dark:bg-slate-300 text-black';
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10">
      {/* Badge */}
      {product.badge && (
        <div className={`absolute left-3 top-3 z-10 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getBadgeStyles()}`}>
          {product.badge}
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100 dark:bg-slate-950 p-4">
        <div 
          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${product.image})` }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Brand */}
        <div className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          {product.brand}
        </div>

        {/* Name */}
        <h3 className="mb-2 text-lg font-bold leading-tight text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
          {product.name}
        </h3>

        {/* Price */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-xl font-bold text-slate-900 dark:text-white">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm font-medium text-slate-400 dark:text-slate-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-col gap-2">
          <button 
            onClick={() => onAddToQuote(product)}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-200 dark:bg-slate-300 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-blue-500 hover:text-white"
          >
            <Icon name="add_notes" className="text-[18px]" />
            Add to Quote
          </button>
          
          <button 
            onClick={() => onWhatsApp(product)}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-800 bg-transparent py-2.5 text-sm font-semibold text-slate-900 dark:text-white transition hover:border-blue-500 hover:text-blue-500"
          >
            <Icon name="chat" className="text-[18px]" />
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogProductCard;