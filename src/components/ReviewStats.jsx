import React from 'react';

function ReviewStats({ review }) {
  let sumOfRatings = 0;
  let averageRating = 0;
  let numberOfReviews = review.length;

  review.forEach((element) => {
    sumOfRatings += element.rating;
  });
  averageRating = sumOfRatings / numberOfReviews;
  return (
    <div className='feedback-stats'>
      <h4>{numberOfReviews} Reviews</h4>
      <h4>Average Rating: {averageRating}</h4>
    </div>
  );
}

export default ReviewStats;
