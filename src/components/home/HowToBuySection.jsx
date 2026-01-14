// src/components/home/HowToBuySection.jsx
import Icon from '../ui/Icon';
import { steps } from '../../data/features';

const HowToBuySection = () => (
  <div className="w-full py-16 bg-slate-900">
    <div className="max-w-[1280px] mx-auto px-4 md:px-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-white text-3xl font-bold mb-4">How to Buy</h2>
        <p className="text-slate-400">
          Simple, secure, and personalized via WhatsApp.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-slate-800 z-0"></div>
        
        {steps.map((step, idx) => (
          <div 
            key={idx} 
            className="flex flex-col items-center text-center relative z-10"
          >
            <div 
              className={`size-24 rounded-full ${
                step.highlight 
                  ? 'bg-slate-800 border-4 border-green-400 shadow-[0_0_20px_rgba(19,236,91,0.2)]' 
                  : 'bg-slate-800 border-4 border-slate-700 shadow-lg'
              } flex items-center justify-center mb-6`}
            >
              <Icon 
                name={step.icon} 
                className={`text-4xl ${
                  step.highlight ? 'text-green-400' : 'text-white'
                }`} 
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {step.title}
            </h3>
            <p className="text-slate-400 text-sm px-4">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HowToBuySection;