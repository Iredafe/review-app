import { createContext, useState, useEffect } from 'react';
import React from 'react';

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reviewEdit, setReviewEdit] = useState({ item: {}, edit: false });
  useEffect(() => {
    fetchReview();
  }, []);

  const fetchReview = async () => {
    const response = await fetch(`/review?_sort=id&_order=desc`);
    const data = await response.json();
    setReview(data);
    setIsLoading(false);
  };
  const deleteReviewItem = async (id) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      await fetch(`/review/${id}`, { method: 'DELETE' });
      setReview(review.filter((review) => review.id !== id));
    }
  };

  const editReviewItem = (item) => {
    setReviewEdit({ item, edit: true });
  };

  const updateReview = async (id, updateItem) => {
    const response = await fetch(`/review/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateItem),
    });
    const data = await response.json();
    setReview(
      review.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  const addReviewItem = async (newReview) => {
    const response = await fetch('/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview),
    });
    const data = await response.json();
    setReview([data, ...review]);
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
