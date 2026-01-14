// src/App.jsx
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import HeroSection from './components/home/HeroSection';
import FeaturesSection from './components/home/FeaturesSection';
import ProductsSection from './components/home/ProductsSection';
import FlashSaleSection from './components/home/FlashSaleSection';
import HowToBuySection from './components/home/HowToBuySection';
import TestimonialsSection from './components/home/TestimonialsSection';

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans selection:bg-green-400 selection:text-slate-900">
      <Header />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <FlashSaleSection />
        <HowToBuySection />
        <TestimonialsSection />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;