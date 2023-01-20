import { v4 as uuid } from 'uuid';
import React from 'react';
import Header from './components/Header';
import ReviewList from './components/ReviewList';
import ReviewData from './data/ReviewData';
import { useState } from 'react';
import ReviewForm from './components/ReviewForm';
import ReviewStats from './components/ReviewStats';

function App() {
  const [review, setReview] = useState(ReviewData);

  const deleteReviewItem = (id) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      setReview(review.filter((review) => review.id !== id));
    }
  };

  const addReviewItem = (newReview) => {
    newReview.id = uuid();
    console.log({ newReview });
    setReview([newReview, ...review]);
  };
  return (
    <>
      <Header />
      <ReviewForm review={review} handleAdd={addReviewItem} />
      <ReviewStats review={review} />
      <ReviewList review={review} handleDelete={deleteReviewItem} />
      <div className='container'></div>
    </>
  );
}

export default App;
