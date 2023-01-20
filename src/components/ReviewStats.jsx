import React from 'react';
import PropTypes from 'prop-types';
import ReviewContext from '../context/ReviewContext';
import { useContext } from 'react';
function ReviewStats() {
  const { review } = useContext(ReviewContext);
  let numberOfReviews = review.length;
  let averageRating =
    review.reduce((accumulator, current) => {
      return accumulator + current.rating;
    }, 0) / numberOfReviews;

  averageRating = averageRating.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className='feedback-stats'>
      <h4>{numberOfReviews} Reviews</h4>
      <h4>Average Rating : {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  );
}

ReviewStats.propTypes = {
  averageRating: PropTypes.number,
  review: PropTypes.array.isRequired,
};

export default ReviewStats;
