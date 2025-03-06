import React from 'react';
import { Link } from 'react-router-dom';
import { Cake, Heart, Gift, PartyPopper, Sparkles } from 'lucide-react';

const occasions = [
  {
    id: 'birthday',
    title: 'Birthday Celebrations',
    description: 'Make their day extra special with our custom birthday cakes',
    icon: PartyPopper,
    image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=600&h=400',
    cakes: [
      {
        id: 'birthday-1',
        name: 'Rainbow Surprise',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=300&h=200',
      },
      {
        id: 'birthday-2',
        name: 'Chocolate Fantasy',
        price: 54.99,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&h=200',
      },
    ],
  },
  {
    id: 'wedding',
    title: 'Wedding Cakes',
    description: 'Elegant and beautiful cakes for your special day',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1522767131594-6b7e96848fba?auto=format&fit=crop&w=600&h=400',
    cakes: [
      {
        id: 'wedding-1',
        name: 'Classic White Elegance',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=300&h=200',
      },
      {
        id: 'wedding-2',
        name: 'Rose Gold Dream',
        price: 349.99,
        image: 'https://images.unsplash.com/photo-1560180474-e8563fd75bab?auto=format&fit=crop&w=300&h=200',
      },
    ],
  },
  {
    id: 'anniversary',
    title: 'Anniversary Delights',
    description: 'Celebrate years of love with our special cakes',
    icon: Gift,
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=600&h=400',
    cakes: [
      {
        id: 'anniversary-1',
        name: 'Golden Memories',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=300&h=200',
      },
      {
        id: 'anniversary-2',
        name: 'Silver Jubilee',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1560180474-e8563fd75bab?auto=format&fit=crop&w=300&h=200',
      },
    ],
  },
];

export function SpecialOccasions() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-dark mb-4">Special Occasions</h1>
        <p className="text-lg text-primary-dark/60">Find the perfect cake for your celebration</p>
      </div>

      <div className="space-y-16">
        {occasions.map((occasion) => {
          const Icon = occasion.icon;
          return (
            <div key={occasion.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={occasion.image}
                    alt={occasion.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent flex items-center justify-center">
                    <Icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-primary-dark mb-4">{occasion.title}</h2>
                  <p className="text-primary-dark/60 mb-6">{occasion.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {occasion.cakes.map((cake) => (
                      <Link
                        key={cake.id}
                        to={`/cake/${cake.id}`}
                        className="group block bg-secondary-light rounded-lg overflow-hidden hover:shadow-md transition-all"
                      >
                        <div className="relative h-48">
                          <img
                            src={cake.image}
                            alt={cake.name}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-primary-dark">{cake.name}</h3>
                          <p className="text-accent font-medium">${cake.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <button className="mt-8 w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg transition-colors">
                    View All {occasion.title}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}