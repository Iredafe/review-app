import ReviewItem from './ReviewItem';
import React from 'react';
import { useContext } from 'react';
import Spinner from './shared/Spinner';
import ReviewContext from '../context/ReviewContext';
function ReviewList() {
  const { review, isLoading } = useContext(ReviewContext);

  if (!isLoading && (!review || review.length === 0)) {
    return <p>No Feedback yet!!</p>;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      {review.map((item) => (
        <ReviewItem key={review.id} item={item} />
      ))}
    </div>
  );
}

export default ReviewList;
