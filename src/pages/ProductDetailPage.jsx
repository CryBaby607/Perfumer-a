// src/pages/ProductDetailPage.jsx
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Icon from '../components/ui/Icon';
import { useCart } from '../context/CartContext';
import { menProducts } from '../data/menProducts';
import { womenProducts } from '../data/womenProducts';

const ProductDetailPage = () => {
  const { id, gender } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Buscar producto en ambas listas
  const allProducts = [...menProducts, ...womenProducts];
  const product = allProducts.find(p => p.id === parseInt(id) && 
    (gender === 'men' ? menProducts.includes(p) : womenProducts.includes(p))
  );

  // Productos relacionados (misma categoría)
  const relatedProducts = allProducts
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Producto no encontrado</h2>
            <Link to="/" className="text-blue-500 hover:underline">
              Volver al inicio
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    alert(`${quantity} x ${product.name} agregado al carrito`);
  };

  const handleWhatsApp = () => {
    const message = `Hola! Estoy interesado en:\n\n*${product.name}*\nMarca: ${product.brand}\nPrecio: $${product.price}\n\n¿Está disponible?`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleShare = () => {
    const url = window.location.href;
    const message = `Mira este perfume: ${product.name} - ${product.brand}\n${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Header />

      <main className="flex-1 max-w-[1280px] mx-auto px-4 md:px-10 py-8 w-full">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm mb-8">
          <Link to="/" className="text-slate-400 hover:text-white">Inicio</Link>
          <Icon name="chevron_right" className="text-slate-600" />
          <Link to={`/${gender}`} className="text-slate-400 hover:text-white">
            {gender === 'men' ? 'Hombres' : 'Mujeres'}
          </Link>
          <Icon name="chevron_right" className="text-slate-600" />
          <span className="text-white">{product.name}</span>
        </nav>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Image */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] bg-slate-800 rounded-2xl overflow-hidden group">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              {product.badge && (
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-lg text-sm font-bold ${
                  product.badgeColor === 'red' ? 'bg-red-500 text-white' : 'bg-slate-200 text-slate-900'
                }`}>
                  {product.badge}
                </div>
              )}
              <button
                onClick={handleShare}
                className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              >
                <Icon name="share" className="text-slate-900 dark:text-white" />
              </button>
            </div>
          </div>

          {/* Right: Info */}
          <div className="space-y-6">
            {/* Brand & Name */}
            <div>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">
                {product.brand}
              </p>
              <h1 className="text-4xl font-black text-white mb-4">
                {product.name}
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-black text-white">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-2xl text-slate-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-lg">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`size-2 rounded-full ${product.inStock ? 'bg-green-400' : 'bg-red-400'}`} />
              <span className={product.inStock ? 'text-green-400' : 'text-red-400'}>
                {product.inStock ? 'En Stock' : 'Agotado'}
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <label className="text-white font-semibold">Cantidad</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-slate-800 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-slate-700 rounded-l-lg transition-colors"
                  >
                    <Icon name="remove" className="text-white" />
                  </button>
                  <span className="px-6 text-white font-bold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-slate-700 rounded-r-lg transition-colors"
                  >
                    <Icon name="add" className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full py-4 bg-green-400 hover:bg-green-300 text-slate-900 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Icon name="add_shopping_cart" />
                Agregar al Carrito
              </button>
              <button
                onClick={handleWhatsApp}
                className="w-full py-4 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Icon name="chat" />
                Consultar por WhatsApp
              </button>
            </div>

            {/* Quick Info */}
            {product.volume && (
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800">
                <div>
                  <p className="text-slate-400 text-sm mb-1">Volumen</p>
                  <p className="text-white font-semibold">{product.volume}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Concentración</p>
                  <p className="text-white font-semibold">{product.concentration}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Duración</p>
                  <p className="text-white font-semibold">{product.longevity}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Estela</p>
                  <p className="text-white font-semibold">{product.sillage}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Detailed Info Tabs */}
        {product.longDescription && (
          <div className="bg-slate-800 rounded-2xl p-8 mb-16">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Descripción</h2>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {product.longDescription}
                </p>
              </div>

              {/* Notes */}
              {product.notes && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Notas Olfativas</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-900 p-6 rounded-xl">
                      <h3 className="text-green-400 font-bold mb-3 flex items-center gap-2">
                        <Icon name="local_florist" />
                        Notas de Salida
                      </h3>
                      <ul className="space-y-2">
                        {product.notes.top.map((note, idx) => (
                          <li key={idx} className="text-slate-300">{note}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl">
                      <h3 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
                        <Icon name="spa" />
                        Notas de Corazón
                      </h3>
                      <ul className="space-y-2">
                        {product.notes.heart.map((note, idx) => (
                          <li key={idx} className="text-slate-300">{note}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl">
                      <h3 className="text-amber-400 font-bold mb-3 flex items-center gap-2">
                        <Icon name="forest" />
                        Notas de Fondo
                      </h3>
                      <ul className="space-y-2">
                        {product.notes.base.map((note, idx) => (
                          <li key={idx} className="text-slate-300">{note}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Additional Info */}
              {product.occasion && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-white font-bold mb-2">Ocasión</h3>
                    <p className="text-slate-300">{product.occasion}</p>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Temporada</h3>
                    <p className="text-slate-300">{product.season}</p>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Género</h3>
                    <p className="text-slate-300">{product.gender}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Productos Relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  to={`/product/${gender}/${related.id}`}
                  className="group bg-slate-800 rounded-xl p-4 hover:border-slate-600 border border-slate-700 transition-all"
                >
                  <div className="aspect-[4/5] bg-slate-900 rounded-lg overflow-hidden mb-4">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${related.image})` }}
                    />
                  </div>
                  <p className="text-slate-400 text-xs font-bold uppercase mb-1">
                    {related.brand}
                  </p>
                  <h3 className="text-white font-bold mb-2 line-clamp-1">
                    {related.name}
                  </h3>
                  <p className="text-green-400 font-bold">${related.price.toFixed(2)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;