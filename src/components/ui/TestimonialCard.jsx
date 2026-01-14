// src/components/ui/TestimonialCard.jsx
import Icon from './Icon';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Icon key={`full-${i}`} name="star" />);
    }
    if (hasHalfStar) {
      stars.push(<Icon key="half" name="star_half" />);
    }
    return stars;
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
      <div className="flex text-blue-500 mb-4">
        {renderStars(testimonial.rating)}
      </div>
      <p className="text-slate-300 text-sm mb-6 leading-relaxed">
        {testimonial.text}
      </p>
      <div className="flex items-center gap-3">
        <div 
          className="size-10 rounded-full bg-slate-700 bg-cover"
          style={{ backgroundImage: `url(${testimonial.avatar})` }}
        />
        <div>
          <p className="text-white font-bold text-sm">{testimonial.name}</p>
          <p className="text-slate-400 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;