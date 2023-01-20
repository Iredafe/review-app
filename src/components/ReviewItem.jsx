import Card from './shared/Card';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import ReviewContext from '../context/ReviewContext';
import { useContext } from 'react';
function ReviewItem({ item }) {
  const { deleteReviewItem } = useContext(ReviewContext);
  return (
    <Card reverse={false}>
      <button onClick={() => deleteReviewItem(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='num-display' key={item.id}>
        {item.rating}
      </div>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

export default ReviewItem;
