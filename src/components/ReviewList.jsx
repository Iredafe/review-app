import ReviewItem from './ReviewItem';
import React from 'react';
function ReviewList({ review }) {
  if (!review || review.length === 0) {
    return <p>No Feedback yet!!</p>;
  }
  return (
    <div className='feedback-list'>
      {review.map((item) => (
        <ReviewItem
          key={review.id}
          item={item}
          handleDelete={(id) => {
            console.log(id);
          }}
        />
      ))}
    </div>
  );
}

export default ReviewList;
