import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getProductBySlug } from '../api/products';
import { ChevronLeft, ChevronRight, ShoppingCart, ChevronDown, ChevronUp, X } from 'lucide-react';

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProductBySlug(slug);
        if (data) {
          console.log('Product loaded:', data);
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

  useEffect(() => {
    // Prevent scrolling when zoom modal is open
    if (showZoom) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showZoom]);

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
              <div 
                onClick={() => setShowZoom(true)}
                className="cursor-zoom-in relative group"
              >
                <img 
                  src={images[activeImage]} 
                  alt={`${title} - Image ${activeImage + 1}`}
                  className="w-full h-[500px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-200 rounded-lg"></div>
              </div>
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
              
              <div className="mt-8 space-y-4">
                <button className="w-full bg-[#ff6a00] hover:bg-[#e65f00] text-white py-4 px-6 rounded-lg font-medium flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>

                {/* PayPal Buy Now Button */}
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className="w-full">
                  <input type="hidden" name="cmd" value="_xclick" />
                  <input type="hidden" name="business" value="elmahboubimehdi@gmail.com" />
                  <input type="hidden" name="lc" value="US" />
                  <input type="hidden" name="item_name" value={title} />
                  <input type="hidden" name="amount" value={price} />
                  <input type="hidden" name="currency_code" value="USD" />
                  <input type="hidden" name="button_subtype" value="products" />
                  <input type="hidden" name="no_note" value="0" />
                  <input type="hidden" name="tax_rate" value="0.00" />
                  <input type="hidden" name="shipping" value="0.00" />
                  <input
                    type="submit"
                    className="w-full bg-[#0070ba] hover:bg-[#003087] text-white py-4 px-6 rounded-lg font-medium cursor-pointer transition-colors duration-200"
                    value="Buy Now with PayPal"
                  />
                </form>
              </div>
              
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

      {/* Zoom Modal */}
      {showZoom && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setShowZoom(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src={images[activeImage]}
              alt={`${title} - Image ${activeImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors duration-200"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors duration-200"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;