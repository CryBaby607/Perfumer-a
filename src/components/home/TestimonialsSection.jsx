// src/components/home/TestimonialsSection.jsx
import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '../../data/testimonials';

const TestimonialsSection = () => (
  <div className="w-full py-16 border-t border-slate-800">
    <div className="max-w-[1280px] mx-auto px-4 md:px-10">
      <h2 className="text-white text-3xl font-bold mb-10 text-center">
        What Our Clients Say
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  </div>
);

export default TestimonialsSection;