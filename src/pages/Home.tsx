import React from 'react';
import { Hero } from '../components/Hero';
import { SearchBar } from '../components/SearchBar';
import { Categories } from '../components/Categories';
import { BestSellers } from '../components/BestSellers';

export function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <SearchBar />
      </div>
      <Categories />
      <BestSellers />
    </>
  );
}