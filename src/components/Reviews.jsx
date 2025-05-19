import React, { useState } from 'react';
import { Star, ThumbsUp, MessageSquare, CheckCircle2 } from 'lucide-react';

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
    verified: true,
    location: 'New York, USA',
    purchaseDate: '1 month ago'
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
    verified: true,
    location: 'London, UK',
    purchaseDate: '2 months ago'
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
    verified: true,
    location: 'Toronto, Canada',
    purchaseDate: '3 months ago'
  }
];

const Reviews = ({ productSlug }) => {
  const [sortBy, setSortBy] = useState('recent');
  const averageRating = 4.7;
  const totalReviews = reviewsData.length;
  const ratingDistribution = {
    5: 75,
    4: 20,
    3: 3,
    2: 1,
    1: 1
  };

  return (
    <div className="bg-white rounded-xl shadow-sm">
      {/* Reviews Header */}
      <div className="border-b border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          {/* Rating Summary */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Customer Reviews</h2>
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold text-gray-900">{averageRating}</div>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(averageRating) ? 'text-[#ff6a00] fill-[#ff6a00]' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1">Based on {totalReviews} reviews</p>
              </div>
            </div>
          </div>

          {/* Rating Distribution */}
          <div className="flex-grow max-w-sm">
            {Object.entries(ratingDistribution).reverse().map(([rating, percentage]) => (
              <div key={rating} className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-600 w-8">{rating}★</span>
                <div className="flex-grow bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#ff6a00] rounded-full h-2" 
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-12">{percentage}%</span>
              </div>
            ))}
          </div>

          {/* Write Review Button */}
          <button className="bg-[#ff6a00] hover:bg-[#e65f00] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
            Write a Review
          </button>
        </div>
      </div>

      {/* Sort Options */}
      <div className="border-b border-gray-200 p-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
        >
          <option value="recent">Most Recent</option>
          <option value="helpful">Most Helpful</option>
          <option value="highest">Highest Rated</option>
          <option value="lowest">Lowest Rated</option>
        </select>
      </div>

      {/* Reviews List */}
      <div className="divide-y divide-gray-200">
        {reviewsData.map(review => (
          <div key={review.id} className="p-6">
            <div className="flex items-start gap-4">
              <img 
                src={review.avatar} 
                alt={review.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-grow">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900 flex items-center gap-2">
                      {review.author}
                      {review.verified && (
                        <span className="flex items-center text-[#ff6a00] text-sm">
                          <CheckCircle2 className="h-4 w-4 mr-1" />
                          Verified Purchase
                        </span>
                      )}
                    </h3>
                    <div className="text-sm text-gray-500">
                      {review.location} • Purchased {review.purchaseDate}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>

                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${i < review.rating ? 'text-[#ff6a00] fill-[#ff6a00]' : 'text-gray-300'}`}
                    />
                  ))}
                </div>

                <h4 className="font-medium text-gray-900 mt-2">{review.title}</h4>
                <p className="mt-2 text-gray-600">{review.content}</p>

                <div className="mt-4 flex items-center gap-4">
                  <button className="flex items-center text-gray-500 hover:text-[#ff6a00] transition-colors duration-300">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>Helpful ({review.helpful})</span>
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-[#ff6a00] transition-colors duration-300">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>Reply ({review.replies})</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="p-6 text-center">
        <button className="px-6 py-2 border border-[#ff6a00] text-[#ff6a00] rounded-lg hover:bg-[#fff5eb] font-medium transition-colors duration-300">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default Reviews;