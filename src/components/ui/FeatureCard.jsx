// src/components/ui/FeatureCard.jsx
import Icon from './Icon';

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-800 border border-slate-700 hover:border-blue-500/50 transition-colors group">
    <div className="p-3 rounded-full bg-slate-700 text-blue-500 group-hover:text-green-400 transition-colors">
      <Icon name={icon} />
    </div>
    <div>
      <h3 className="text-white font-bold text-lg">{title}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  </div>
);

export default FeatureCard;