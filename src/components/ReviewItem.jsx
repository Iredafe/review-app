// eslint-disable-next-line no-unused-expressions
import { useState } from 'react';
function ReviewItem() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('This is an example of a review item');

  const handleClick = () => {
    setRating((prev) => {
      return prev + 1;
    });
  };
  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ReviewItem;
