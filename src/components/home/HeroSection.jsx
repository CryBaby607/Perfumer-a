// src/components/home/HeroSection.jsx
import Icon from '../ui/Icon';

const HeroSection = () => (
  <div className="relative w-full overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
    
    <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-12 md:py-20">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300/30 bg-slate-300/10 w-fit mx-auto md:mx-0">
            <span className="text-slate-300 text-xs font-bold tracking-wider uppercase">
              Colección Premium
            </span>
          </div>
          
          <h1 className="text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
            Perfumes originales a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
              precio accesible
            </span>
          </h1>
          
          <p className="text-slate-300 text-lg md:text-xl font-light max-w-lg mx-auto md:mx-0">
            Eleva tu presencia con nuestra colección curada de aromas de clase mundial. 
            Fragancias auténticas entregadas directamente en tu puerta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button className="flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-green-400 hover:bg-green-300 text-slate-900 text-base font-bold transition-all shadow-[0_0_20px_rgba(19,236,91,0.3)]">
              <Icon name="chat" />
              <span>Ordenar por WhatsApp</span>
            </button>
            <button className="flex items-center justify-center gap-2 h-12 px-8 rounded-lg border border-slate-700 hover:bg-slate-800 text-white text-base font-medium transition-all">
              <span>Ver Catálogo</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-transparent rounded-full blur-2xl transform scale-90"></div>
          <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 group">
            <div 
              className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
              style={{ 
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9LYpHlAmHBCiKyDbSqedU5ChzbbB3n_jPT0KOIzm2jq6ih-lwqhzj4zsFF1mQaLE4svSG344LV9hPrzA2t5sw7ORLVq-OZ1F7vTUMTubedqCYHIAyRACIJjJPWftQYFhHrvmuRA0Hq7XJBRRy3CkhWESmjGji0NWvTrmM-fEyYS0IK8CtzY8sniYdZ61sVgfrdAcPOnW8nYstMnXWiNjTqew-7Ig2N9qp0FGNXnRvBt3I0GFpsH80d3UeQe_4aRvEGDgAtPn7a60")' 
              }}
            />
            {/* Featured Product Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-slate-900/80 backdrop-blur-md border border-white/10 p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-blue-500 text-xs font-bold uppercase">Destacado</p>
                  <p className="text-white font-bold">Tom Ford Oud Wood</p>
                </div>
                <span className="text-green-400 font-bold">$295</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;