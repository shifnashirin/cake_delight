import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-secondary-light shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            CakeDelight
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-primary-dark hover:text-primary">Home</Link>
            <Link to="/categories" className="text-primary-dark hover:text-primary">Categories</Link>
            <Link to="/special-occasions" className="text-primary-dark hover:text-primary">Special Occasions</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-primary-dark hover:text-primary" />
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Link>
            <button className="text-primary-dark hover:text-primary">
              <User className="w-6 h-6" />
            </button>
            <button className="md:hidden text-primary-dark">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}