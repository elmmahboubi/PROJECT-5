import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#313a4b] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.svg" 
                alt="Shop Happy" 
                className="w-40 brightness-0 invert"
              />
            </Link>
            <p className="mb-4">
              Your trusted destination for quality electronics and second-hand items. Making online shopping simple since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#ff6a00] transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ff6a00] transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ff6a00] transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ff6a00] transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#ff6a00] transition-colors duration-300">Home</Link>
              </li>
              <li>
                <a href="#products" className="hover:text-[#ff6a00] transition-colors duration-300">Shop</a>
              </li>
              <li>
                <a href="#featured" className="hover:text-[#ff6a00] transition-colors duration-300">Featured Products</a>
              </li>
              <li>
                <Link to="/policy" className="hover:text-[#ff6a00] transition-colors duration-300">Return Policy</Link>
              </li>
              <li>
                <Link to="/policy" className="hover:text-[#ff6a00] transition-colors duration-300">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/policy" className="hover:text-[#ff6a00] transition-colors duration-300">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#ff6a00] transition-colors duration-300">Electronics</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff6a00] transition-colors duration-300">Computers</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff6a00] transition-colors duration-300">Smartphones</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff6a00] transition-colors duration-300">Gaming</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff6a00] transition-colors duration-300">Accessories</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff6a00] transition-colors duration-300">Second Hand</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#ff6a00] mr-2 mt-0.5" />
                <span>123 Happy Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#ff6a00] mr-2" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#ff6a00] mr-2" />
                <a href="mailto:info@shophappy.com" className="hover:text-[#ff6a00] transition-colors duration-300">
                  info@shophappy.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium text-white mb-2">Subscribe to our newsletter</h4>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff6a00] flex-1"
                />
                <button 
                  type="submit"
                  className="px-4 py-2 bg-[#ff6a00] hover:bg-[#e65f00] text-white rounded-r-lg transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Shop Happy. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <img 
              src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Payment methods" 
              className="h-8"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer