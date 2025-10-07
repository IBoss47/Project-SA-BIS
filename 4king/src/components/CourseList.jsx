import React, { useState } from 'react';
import { HeartIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartSolidIcon, StarIcon as StarSolidIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const CourseList = ({ book }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    setIsInCart(!isInCart);
    // Add cart logic here
  };

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
    // Add favorite logic here
  };

  return (
    <Link to={`/Exam1`} className="block">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden group 
        hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        
        {/* Book Cover */}
        <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200">
          <img 
            src={book.coverImage || '/images/book-placeholder.jpg'} 
            alt={book.title}
            className="w-full h-full object-cover"
          />
          
          {/* Badges */}
          {book.isNew && (
            <span className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 
              rounded-full text-xs font-semibold">
              ใหม่
            </span>
          )}
          {book.discount && (
            <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 
              rounded-full text-xs font-semibold">
              -{book.discount}%
            </span>
          )}
          
          
        </div>
        
        {/* Book Details */}
        <div className="p-5">
          {/* Category */}
          <p className="text-xs text-viridian-600 font-semibold uppercase tracking-wider mb-2">
            {book.category}
          </p>
          
          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1 
            group-hover:text-viridian-600 transition-colors">
            {book.title}
          </h3>
          
          {/* Author */}
          <p className="text-sm text-gray-600 mb-3">โดย {book.author}</p>
          
          
          
          
        </div>
      </div>
    </Link>
  );
};

export default CourseList;