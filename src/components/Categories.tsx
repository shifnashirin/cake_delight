import React from 'react';
import { Cake, Cookie, Heart, Leaf, Star } from 'lucide-react';

const categories = [
  { id: 'chocolate', name: 'Chocolate', icon: Cake },
  { id: 'fruit', name: 'Fruit', icon: Cookie },
  { id: 'wedding', name: 'Wedding', icon: Heart },
  { id: 'vegan', name: 'Vegan', icon: Leaf },
  { id: 'special', name: 'Special', icon: Star },
];

export function Categories() {
  return (
    <div className="py-12 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary-dark">Cake Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105"
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <span className="font-medium text-primary-dark">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}