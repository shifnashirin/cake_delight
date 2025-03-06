import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Minus, Plus, Heart } from 'lucide-react';

export function CakeDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = React.useState(1);
  const [selectedSize, setSelectedSize] = React.useState('1kg');

  // Mock data - in a real app, this would come from an API
  const cake = {
    id: '1',
    name: 'Classic Chocolate Cake',
    description: 'Rich, moist chocolate cake layered with premium dark chocolate ganache and decorated with chocolate shavings.',
    price: 39.99,
    rating: 4.8,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&h=600',
    sizes: ['0.5kg', '1kg', '2kg'],
    ingredients: ['Dark Chocolate', 'Fresh Cream', 'Belgian Cocoa', 'Pure Vanilla'],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src={cake.image}
            alt={cake.name}
            className="w-full h-[500px] object-cover rounded-2xl"
          />
          <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-secondary-light transition-colors">
            <Heart className="w-6 h-6 text-accent" />
          </button>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-primary-dark">{cake.name}</h1>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <span className="ml-1 text-primary-dark">{cake.rating}</span>
            </div>
            <span className="text-primary-dark/60">({cake.reviews} reviews)</span>
          </div>

          <p className="text-primary-dark/80 text-lg">{cake.description}</p>

          <div>
            <h3 className="text-lg font-semibold text-primary-dark mb-2">Size</h3>
            <div className="flex gap-4">
              {cake.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedSize === size
                      ? 'border-primary bg-secondary text-primary'
                      : 'border-primary-dark/20 text-primary-dark hover:border-primary'
                  } transition-colors`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary-dark mb-2">Ingredients</h3>
            <div className="flex flex-wrap gap-2">
              {cake.ingredients.map((ingredient) => (
                <span
                  key={ingredient}
                  className="px-3 py-1 bg-secondary rounded-full text-primary-dark"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center border border-secondary rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-secondary-light transition-colors"
              >
                <Minus className="w-5 h-5 text-primary-dark" />
              </button>
              <span className="px-4 py-2 font-medium text-primary-dark">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-secondary-light transition-colors"
              >
                <Plus className="w-5 h-5 text-primary-dark" />
              </button>
            </div>
            <p className="text-3xl font-bold text-primary">${(cake.price * quantity).toFixed(2)}</p>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-primary hover:bg-primary-dark text-white py-3 rounded-lg transition-colors">
              Add to Cart
            </button>
            <button className="flex-1 bg-accent hover:bg-accent-dark text-white py-3 rounded-lg transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}