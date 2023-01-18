import React from 'react';
import Header from './components/Header';
import ReviewList from './components/ReviewList';
import ReviewData from './data/ReviewData';
import { useState } from 'react';
import ReviewForm from './components/ReviewForm';

function App() {
  const [review, setReview] = useState(ReviewData);

  const deleteReviewItem = (id) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      setReview(review.filter((review) => review.id !== id));
    }
  };
  return (
    <>
      <Header />
      <ReviewForm />
      <ReviewList review={review} handleDelete={deleteReviewItem} />
      <div className='container'></div>
    </>
  );
}

export default App;
