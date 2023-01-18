import React from 'react';
import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function ReviewForm() {
  const [text, setText] = useState('');
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Card>
      <form action=''>
        <h2>How would you rate your experience with our product?</h2>
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button>Send</Button>
        </div>
      </form>
    </Card>
  );
}

export default ReviewForm;
