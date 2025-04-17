import React from 'react';
import { motion as MOTION } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const testimonials = [
  {
    name: 'Arun Sharma',
    position: 'Architect, Bangalore',
    quote: 'SVM Timbers brought unmatched quality and a timeless aesthetic to our latest project.',
    image: '/img/clients/arun.jpg',
  },
  {
    name: 'Meera Iyer',
    position: 'Interior Designer, Chennai',
    quote: 'Their timbers not only look luxurious but also carry a story in every grain.',
    image: '/img/clients/meera.jpg',
  },
  {
    name: 'Rahul Nair',
    position: 'Builder, Kochi',
    quote: 'We rely on SVM Timbers for consistency, elegance, and eco-conscious sourcing.',
    image: '/img/clients/rahul.jpg',
  },
];

export default function TestimonialsSection() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1,
      spacing: 16,
      breakpoints: {
        '(min-width: 768px)': {
          perView: 2,
        },
        '(min-width: 1024px)': {
          perView: 3,
        },
      },
    },
  });

  return (
    <section className="py-16 px-6 sm:px-10 bg-[#F8F4EF] dark:bg-[#231915] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#674C28] dark:text-[#FFD700] font-playfair">
          What Our Clients Say
        </h2>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <MOTION.div
              key={index}
              className="keen-slider__slide"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="bg-white dark:bg-[#1C1C1C] shadow-xl rounded-2xl p-6 flex flex-col h-full transition-colors border border-[#EADCA6] dark:border-[#5F4E2A]">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#D8C69C] dark:border-[#FFD700]"
                  />
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-[#4A3B21] dark:text-[#FFEBC1]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#7A684A] dark:text-[#D6C49A]">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <div className="text-lg leading-relaxed text-[#5F4E2A] dark:text-[#FAF3E0] font-playfair flex-1">
                  “{testimonial.quote}”
                </div>
              </div>
            </MOTION.div>
          ))}
        </div>
      </div>
    </section>
  );
}
