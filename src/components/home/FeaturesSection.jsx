// src/components/home/FeaturesSection.jsx
import FeatureCard from '../ui/FeatureCard';
import { features } from '../../data/features';

const FeaturesSection = () => (
  <div className="w-full bg-slate-950 border-y border-slate-800">
    <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </div>
  </div>
);

export default FeaturesSection;