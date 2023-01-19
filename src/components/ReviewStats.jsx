import React from 'react';

function ReviewStats({ review }) {
  let numberOfReviews = review.length;
  let averageRating =
    review.reduce((accumulator, current) => {
      return accumulator + current.rating;
    }, 0) / numberOfReviews;
  return (
    <div className='feedback-stats'>
      <h4>{numberOfReviews} Reviews</h4>
      <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  );
}

export default ReviewStats;
