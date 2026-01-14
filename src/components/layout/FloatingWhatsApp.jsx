// src/components/layout/FloatingWhatsApp.jsx
import Icon from '../ui/Icon';

const FloatingWhatsApp = () => (
  <a 
    className="fixed bottom-6 right-6 z-50 bg-green-400 hover:bg-green-300 text-slate-900 rounded-full p-4 shadow-[0_4px_20px_rgba(19,236,91,0.4)] transition-all hover:scale-110 flex items-center justify-center group" 
    href="#"
    aria-label="Chat with us on WhatsApp"
  >
    <Icon name="chat" className="text-3xl" />
    <span className="absolute right-full mr-3 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Chat with us
    </span>
  </a>
);

export default FloatingWhatsApp;