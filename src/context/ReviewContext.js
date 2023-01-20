import { createContext, useState } from 'react';
import React from 'react';
import { v4 as uuid } from 'uuid';
import ReviewData from '../data/ReviewData';

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [review, setReview] = useState(ReviewData);
  console.log('review', review);
  const deleteReviewItem = (id) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      setReview(review.filter((review) => review.id !== id));
    }
  };

  const addReviewItem = (newReview) => {
    newReview.id = uuid();
    setReview([newReview, ...review]);
  };
  return (
    <ReviewContext.Provider value={{ review, deleteReviewItem, addReviewItem }}>
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewContext;
