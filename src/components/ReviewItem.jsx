import Card from './shared/Card';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
function ReviewItem({ item, handleDelete }) {
  return (
    <Card reverse={false}>
      <button onClick={() => handleDelete(item.id)} className='close'>
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
