import ReviewItem from './ReviewItem';
import React from 'react';
import { useContext } from 'react';
import ReviewContext from '../context/ReviewContext';
function ReviewList() {
  const { review } = useContext(ReviewContext);

  if (!review || review.length === 0) {
    return <p>No Feedback yet!!</p>;
  }
  return (
    <div className='feedback-list'>
      {review.map((item) => (
        <ReviewItem key={review.id} item={item} />
      ))}
    </div>
  );
}

export default ReviewList;
