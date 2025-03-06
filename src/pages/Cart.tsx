import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus } from 'lucide-react';

export function Cart() {
  const [cartItems, setCartItems] = React.useState([
    {
      id: '1',
      name: 'Classic Chocolate Cake',
      price: 39.99,
      quantity: 1,
      size: '1kg',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&h=200',
    },
    {
      id: '2',
      name: 'Red Velvet Dream',
      price: 44.99,
      quantity: 2,
      size: '0.5kg',
      image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=300&h=200',
    },
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary-dark mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-semibold text-primary-dark">{item.name}</h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-primary-dark/40 hover:text-accent transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-primary-dark/60">Size: {item.size}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-secondary rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2 hover:bg-secondary-light transition-colors"
                      >
                        <Minus className="w-4 h-4 text-primary-dark" />
                      </button>
                      <span className="px-4 py-2 font-medium text-primary-dark">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2 hover:bg-secondary-light transition-colors"
                      >
                        <Plus className="w-4 h-4 text-primary-dark" />
                      </button>
                    </div>
                    <p className="font-semibold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm h-fit">
          <h2 className="text-xl font-semibold text-primary-dark mb-4">Order Summary</h2>
          <div className="space-y-3 text-primary-dark/60">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="h-px bg-secondary my-4"></div>
            <div className="flex justify-between text-lg font-semibold text-primary-dark">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-lg mt-6 transition-colors">
            Proceed to Checkout
          </button>
          <Link
            to="/"
            className="block text-center text-primary mt-4 hover:text-primary-dark transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}