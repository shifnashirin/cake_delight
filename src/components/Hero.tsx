import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const featuredCakes = [
  {
    id: 1,
    title: "Chocolate Paradise",
    description: "Rich, decadent chocolate cake with premium cocoa",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&h=600",
    price: 49.99
  },
  {
    id: 2,
    title: "Berry Bliss",
    description: "Fresh seasonal berries on vanilla sponge",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&h=600",
    price: 54.99
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredCakes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredCakes.length) % featuredCakes.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {featuredCakes.map((cake) => (
          <div key={cake.id} className="relative w-full flex-shrink-0">
            <img
              src={cake.image}
              alt={cake.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
              <div className="ml-16 text-white max-w-xl">
                <h1 className="text-5xl font-bold mb-4">{cake.title}</h1>
                <p className="text-xl mb-6">{cake.description}</p>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold">${cake.price}</span>
                  <button className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-full font-semibold transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {featuredCakes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}