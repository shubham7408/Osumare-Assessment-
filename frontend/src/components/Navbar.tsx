import React from 'react';
import { Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#FF4B6E]">ToDo</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <a href="#features" className="text-gray-700 hover:text-[#FF4B6E] px-3 py-2 text-sm font-medium">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-[#FF4B6E] px-3 py-2 text-sm font-medium">Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:text-[#FF4B6E] px-3 py-2 text-sm font-medium">Pricing</a>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white hero-gradient hover:opacity-90">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button className="text-gray-500 hover:text-gray-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}