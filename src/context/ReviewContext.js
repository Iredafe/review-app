import { createContext, useState, useEffect } from 'react';
import React from 'react';
import { v4 as uuid } from 'uuid';

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reviewEdit, setReviewEdit] = useState({ item: {}, edit: false });
  useEffect(() => {
    fetchReview();
  }, []);

  const fetchReview = async () => {
    const response = await fetch(
      `http://localhost:5000/review?_sort=id&_order=desc`
    );
    const data = await response.json();
    setReview(data);
    setIsLoading(false);
  };
  const deleteReviewItem = (id) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      setReview(review.filter((review) => review.id !== id));
    }
  };

  const editReviewItem = (item) => {
    setReviewEdit({ item, edit: true });
  };

  const updateReview = (id, updateItem) => {
    console.log('update item', updateItem);
    console.log('review', review);
    setReview(
      review.map((item) => (item.id === id ? { ...item, ...updateItem } : item))
    );
  };

  const addReviewItem = (newReview) => {
    newReview.id = uuid();
    setReview([newReview, ...review]);
  };

  return (
    <ReviewContext.Provider
      value={{
        review,
        deleteReviewItem,
        addReviewItem,
        editReviewItem,
        reviewEdit,
        updateReview,
        isLoading,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewContext;
