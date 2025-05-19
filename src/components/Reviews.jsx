import React from 'react';
import { Star, ThumbsUp, MessageSquare } from 'lucide-react';

// Mock review data
const reviewsData = [
  {
    id: 1,
    author: 'Alex Johnson',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    date: '2 months ago',
    title: 'Exceptional quality and performance',
    content: 'This camera exceeded all my expectations. The image quality is outstanding, and the autofocus is lightning fast. Battery life is impressive too - I can shoot all day on a single charge. Highly recommended for both professionals and enthusiasts.',
    helpful: 24,
    replies: 2,
    verified: true
  },
  {
    id: 2,
    author: 'Sarah Miller',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4,
    date: '3 weeks ago',
    title: 'Great camera with minor issues',
    content: 'The image quality and features are excellent for the price point. My only complaint is that the menu system takes some getting used to. Once you learn your way around, it\'s a powerful tool for photography. The low light performance is particularly impressive.',
    helpful: 15,
    replies: 1,
    verified: true
  },
  {
    id: 3,
    author: 'Michael Chen',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    date: '1 month ago',
    title: 'Perfect for travel photography',
    content: 'I\'ve taken this camera on several trips now, and it\'s been the perfect companion. Lightweight yet durable, with excellent image stabilization for handheld shots. The connectivity features make it easy to transfer photos to my phone for quick sharing. Couldn\'t be happier with my purchase!',
    helpful: 32,
    replies: 3,
    verified: true
  }
];

const Reviews = ({ productSlug }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
          <div className="mt-2 flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`h-5 w-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">Based on {reviewsData.length} reviews</span>
          </div>
        </div>
        <button className="mt-4 md:mt-0 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors duration-300">
          Write a Review
        </button>
      </div>
      
      {/* Review filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">
          All Reviews
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-full text-sm font-medium transition-colors duration-300">
          5 Star
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-full text-sm font-medium transition-colors duration-300">
          4 Star
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-full text-sm font-medium transition-colors duration-300">
          3 Star
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-full text-sm font-medium transition-colors duration-300">
          With Photos
        </button>
      </div>
      
      {/* Reviews list */}
      <div className="space-y-8">
        {reviewsData.map(review => (
          <div key={review.id} className="border-b border-gray-200 pb-8 last:border-0">
            <div className="flex items-start">
              <img 
                src={review.avatar} 
                alt={review.author}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900 flex items-center">
                      {review.author}
                      {review.verified && (
                        <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                          Verified Purchase
                        </span>
                      )}
                    </h3>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                </div>
                <h4 className="font-medium text-gray-900 mt-3">{review.title}</h4>
                <p className="mt-2 text-gray-600">{review.content}</p>
                <div className="mt-4 flex items-center space-x-4">
                  <button className="flex items-center text-gray-500 hover:text-indigo-600">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>Helpful ({review.helpful})</span>
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-indigo-600">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>Reply ({review.replies})</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Load more */}
      <div className="mt-8 text-center">
        <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors duration-300">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default Reviews;