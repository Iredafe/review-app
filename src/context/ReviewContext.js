import { createContext, useState } from 'react';
import React from 'react';

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [review, setReview] = useState([
    { id: 20, rating: 4, text: 'This is from context' },
  ]);
  return (
    <ReviewContext.Provider value={{ review }}>
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewContext;
