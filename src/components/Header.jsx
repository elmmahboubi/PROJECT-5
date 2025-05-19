import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo.svg" 
              alt="Shop Happy" 
              className="w-40"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-[#313a4b] hover:text-[#ff6a00] font-medium">Home</Link>
            <a href="#products" className="text-[#313a4b] hover:text-[#ff6a00] font-medium">Products</a>
            <a href="#featured" className="text-[#313a4b] hover:text-[#ff6a00] font-medium">Featured</a>
            <Link to="/policy" className="text-[#313a4b] hover:text-[#ff6a00] font-medium">Policies</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-[#313a4b] hover:text-[#ff6a00]"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link to="/account" className="text-[#313a4b] hover:text-[#ff6a00]">
              <User className="h-5 w-5" />
            </Link>
            <Link to="/cart" className="relative text-[#313a4b] hover:text-[#ff6a00]">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-[#ff6a00] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#313a4b]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-[#313a4b] hover:text-[#ff6a00] font-medium">Home</Link>
              <a href="#products" className="text-[#313a4b] hover:text-[#ff6a00] font-medium">Products</a>
              <a href="#featured" className="text-[#313a4b] hover:text-[#ff6a00] font-medium">Featured</a>
              <Link to="/policy" className="text-[#313a4b] hover:text-[#ff6a00] font-medium">Policies</Link>
            </nav>
            <div className="mt-4 flex items-center space-x-6 pt-4 border-t border-gray-200">
              <Link to="/account" className="text-[#313a4b] hover:text-[#ff6a00] flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>Account</span>
              </Link>
              <Link to="/cart" className="text-[#313a4b] hover:text-[#ff6a00] flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                <span>Cart (0)</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;