// src/pages/CartPage.jsx
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Icon from '../components/ui/Icon';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartCount } = useCart();

  const handleSendToWhatsApp = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    // Construir mensaje para WhatsApp
    let message = '🛍️ *Quote Request - Luxury Scents*\n\n';
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Brand: ${item.brand}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: $${item.price.toFixed(2)}\n`;
      message += `   Subtotal: $${(item.price * item.quantity).toFixed(2)}\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━━━━\n`;
    message += `*TOTAL: $${getCartTotal().toFixed(2)}*\n`;
    message += `Total Items: ${getCartCount()}\n\n`;
    message += `Please confirm availability and final price. Thank you! 🙏`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <Icon name="shopping_cart" className="text-8xl text-slate-700 mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h2>
            <p className="text-slate-400 mb-8">
              Looks like you haven't added any fragrances yet. Start exploring our collections!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/men"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors"
              >
                Shop Men's
              </Link>
              <Link
                to="/women"
                className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-lg transition-colors"
              >
                Shop Women's
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-[1280px] mx-auto px-4 md:px-10 py-12 w-full">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-white mb-2">Shopping Cart</h1>
          <p className="text-slate-400">Review your items and request a quote</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.brand}`}
                className="bg-slate-800 rounded-xl p-4 md:p-6 border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <div className="flex gap-4">
                  {/* Image */}
                  <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                    <div
                      className="w-full h-full bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
                        {item.brand}
                      </p>
                      <h3 className="text-white text-lg font-bold mb-2">
                        {item.name}
                      </h3>
                      <p className="text-green-400 text-xl font-bold">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-2 bg-slate-700 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.brand, item.quantity - 1)}
                          className="p-2 hover:bg-slate-600 rounded-l-lg transition-colors"
                        >
                          <Icon name="remove" className="text-white" />
                        </button>
                        <span className="px-4 text-white font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.brand, item.quantity + 1)}
                          className="p-2 hover:bg-slate-600 rounded-r-lg transition-colors"
                        >
                          <Icon name="add" className="text-white" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id, item.brand)}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors"
                      >
                        <Icon name="delete" />
                      </button>

                      <div className="ml-auto text-right">
                        <p className="text-slate-400 text-xs mb-1">Subtotal</p>
                        <p className="text-white text-xl font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart Button */}
            <button
              onClick={clearCart}
              className="w-full py-3 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg border border-red-400/20 hover:border-red-400/40 transition-colors font-medium"
            >
              Clear Cart
            </button>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-slate-400">
                  <span>Items ({getCartCount()})</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Shipping</span>
                  <span className="text-green-400">To be confirmed</span>
                </div>
                <div className="border-t border-slate-700 pt-3 mt-3">
                  <div className="flex justify-between text-white text-xl font-bold">
                    <span>Total</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-4 bg-green-400 hover:bg-green-300 text-slate-900 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 mb-3"
              >
                <Icon name="chat" />
                Request Quote via WhatsApp
              </button>

              <Link
                to="/"
                className="block w-full py-3 text-center text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 rounded-lg transition-colors"
              >
                Continue Shopping
              </Link>

              {/* Info */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <Icon name="info" className="text-blue-400 mt-0.5" />
                  <p>
                    This is a quote request. Final prices and availability will be confirmed via WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;