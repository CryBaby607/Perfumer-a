// src/components/home/FlashSaleSection.jsx
import CountdownTimer from '../ui/CountdownTimer';

const FlashSaleSection = () => (
  <div className="w-full py-12 md:py-20 relative overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-slate-950"></div>
    <div 
      className="absolute inset-0 opacity-5" 
      style={{ 
        backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" 
      }}
    ></div>
    
    <div className="max-w-[1280px] mx-auto px-4 md:px-10 relative z-10">
      <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 shadow-[0_0_50px_rgba(59,130,246,0.15)]">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          <div className="inline-block">
            <span className="text-green-400 font-bold tracking-widest uppercase text-sm bg-green-400/10 px-3 py-1 rounded">
              Oferta por Tiempo Limitado
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Venta Flash: <br/>
            <span className="text-blue-500">Creed Aventus</span>
          </h2>
          
          <div className="flex items-center justify-center md:justify-start gap-4">
            <span className="text-slate-500 line-through text-2xl font-medium">
              $435
            </span>
            <span className="text-white text-4xl font-bold">$349</span>
          </div>
          
          <CountdownTimer />
          
          <button className="mt-4 w-full md:w-auto h-12 px-8 rounded-lg bg-green-400 hover:bg-green-300 text-slate-900 text-base font-bold transition-all">
            Obtener Oferta
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[60px] transform scale-75"></div>
          <img 
            alt="Botella de perfume Creed Aventus" 
            className="relative z-10 w-full max-w-[400px] mx-auto drop-shadow-2xl rounded-xl rotate-[-5deg] hover:rotate-0 transition-transform duration-500" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIh9ISDhDNkNO7DrOTIE-nOZqy4KbyiaxHvm0wpOIpNGlFP2mV9bS6cJYbjSLlua6GTC5Q_coDNu3me1-YiIUyXGV_fpNWaIpMH_Kg2-AtwC458heF1ztpmNLoTNF5VIgRi_-sysQ1w_ORCcqfzs8KsD3u4VSDyS3i9yELK-ingWqPKiAquV88Trc38hng-dyzcH1GVQnF0sE9sRHzo6Mi5vxSdY_ykRSEf9U1kyCm0u09WHZvFCaqyraQOOnmlf6ha0ROEY5PPIw"
          />
        </div>
      </div>
    </div>
  </div>
);

export default FlashSaleSection;