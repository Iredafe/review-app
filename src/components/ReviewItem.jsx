import Card from './shared/Card';
import React from 'react';
function ReviewItem({ item }) {
  return (
    <Card reverse={false}>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

export default ReviewItem;
