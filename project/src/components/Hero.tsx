import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative bg-blue-600 h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80"
          alt="Printing press"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto pt-32 px-4 sm:px-6 lg:px-8 flex flex-col h-full justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Transform Your Ideas Into Print Excellence
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl">
          At Pastex, we bring your vision to life with cutting-edge printing solutions and unmatched quality.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors">
            Get Started <ArrowRight className="h-5 w-5" />
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
}