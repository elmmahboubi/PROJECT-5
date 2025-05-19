import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getProductBySlug } from '../api/products';
import { ChevronLeft, ChevronRight, ShoppingCart, ChevronDown, ChevronUp } from 'lucide-react';

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [showFAQ, setShowFAQ] = useState(false);
  
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProductBySlug(slug);
        if (data) {
          console.log('Product loaded:', data); // Debug log
          setProduct(data);
        }
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <Link to="/" className="text-[#ff6a00] hover:text-[#e65f00]">
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const { title, description, price, images, condition } = product;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="relative">
              <img 
                src={images[activeImage]} 
                alt={`${title} - Image ${activeImage + 1}`}
                className="w-full h-[500px] object-cover rounded-lg"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => setActiveImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
              <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-2 h-2 rounded-full ${
                      activeImage === idx ? 'bg-[#ff6a00]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-medium text-gray-900">{title}</h1>
              <div className="mt-2 text-gray-600">{condition}</div>
              <div className="mt-4 text-4xl font-bold text-gray-900">
                ${price.toLocaleString()}
              </div>
              
              <div className="mt-6">
                <p className="text-gray-600">{description}</p>
              </div>
              
              <button className="mt-8 w-full bg-[#ff6a00] hover:bg-[#e65f00] text-white py-4 px-6 rounded-lg font-medium flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
              
              {/* FAQ Section */}
              <div className="mt-12 border-t pt-8">
                <button
                  onClick={() => setShowFAQ(!showFAQ)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-xl font-medium">Frequently Asked Questions</span>
                  {showFAQ ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                
                {showFAQ && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-900">Shipping Information</h3>
                      <p className="mt-1 text-gray-600">Free shipping on orders over $50. Delivery within 3-5 business days.</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Return Policy</h3>
                      <p className="mt-1 text-gray-600">30-day return policy for unused items in original packaging.</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Warranty</h3>
                      <p className="mt-1 text-gray-600">All products come with a standard 90-day warranty unless otherwise specified.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;