import React from 'react';
import { Star } from 'lucide-react';

const bestSellers = [
  {
    id: 1,
    name: "Classic Chocolate",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&h=400",
    price: 39.99,
    rating: 4.8,
    reviews: 128
  },
  {
    id: 2,
    name: "Red Velvet Dream",
    image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=600&h=400",
    price: 44.99,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 3,
    name: "Strawberry Delight",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&h=400",
    price: 42.99,
    rating: 4.7,
    reviews: 98
  }
];

export function BestSellers() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-primary-dark">Best Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((cake) => (
            <div key={cake.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:scale-105">
              <div className="relative">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-accent px-3 py-1 rounded-full text-sm font-medium text-white">
                  ${cake.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-dark">{cake.name}</h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="ml-1 text-primary-dark">{cake.rating}</span>
                  </div>
                  <span className="text-primary-dark/60">({cake.reviews} reviews)</span>
                </div>
                <button className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}