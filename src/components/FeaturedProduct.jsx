import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award, Check } from 'lucide-react';

const FeaturedProduct = ({ product }) => {
  const { slug, title, description, price, rating, reviewCount, images, features } = product;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-1/2 relative overflow-hidden">
          <div className="absolute top-4 left-4 z-10 bg-indigo-600 text-white text-sm font-medium px-3 py-1 rounded-full">
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-1" />
              <span>Featured</span>
            </div>
          </div>
          <img 
            src={images[0]} 
            alt={title}
            className="w-full h-full object-cover object-center lg:h-[500px]"
          />
        </div>
        
        {/* Content Section */}
        <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col">
          <div className="flex-grow">
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            
            {/* Rating */}
            <div className="mt-2 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">({reviewCount} reviews)</span>
            </div>
            
            {/* Price */}
            <div className="mt-4">
              <span className="text-3xl font-bold text-gray-900">${price.toLocaleString()}</span>
              <span className="ml-2 text-sm text-gray-500">Free shipping</span>
            </div>
            
            {/* Description */}
            <p className="mt-4 text-gray-600">{description}</p>
            
            {/* Features */}
            <div className="mt-6">
              <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
              <ul className="space-y-2">
                {features && Array.isArray(features) ? features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                )) : null}
              </ul>
            </div>
          </div>
          
          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300">
              Add to Cart
            </button>
            <Link 
              to={`/product/${slug}`}
              className="flex-1 flex items-center justify-center border border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-3 px-6 rounded-lg font-medium transition-colors duration-300"
            >
              View Details
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;