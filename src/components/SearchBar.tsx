import React, { useState } from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSearch = (value: string) => {
    setQuery(value);
    // Mock suggestions - in a real app, this would come from an API
    if (value.length > 0) {
      setSuggestions([
        'Chocolate Cake',
        'Red Velvet Cake',
        'Vanilla Bean Cake',
        'Fruit Cake',
      ].filter(item => item.toLowerCase().includes(value.toLowerCase())));
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for cakes..."
          className="w-full px-4 py-3 pl-12 rounded-full border border-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white shadow-md"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-dark w-5 h-5" />
      </div>
      
      {suggestions.length > 0 && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-secondary py-2 z-50">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => {
                setQuery(suggestion);
                setSuggestions([]);
              }}
              className="w-full text-left px-4 py-2 hover:bg-secondary-light text-primary-dark transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}