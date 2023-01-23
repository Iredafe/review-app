import React from 'react';
import { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import ReviewContext from '../context/ReviewContext';

function ReviewForm() {
  const { addReviewItem, reviewEdit } = useContext(ReviewContext);
  const [text, setText] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  useEffect(() => {
    if (reviewEdit.edit === true) {
      setButtonDisabled(false);
      setText(reviewEdit.item.text);
    }
  }, [reviewEdit]);
  const handleTextChange = (e) => {
    if (text === '') {
      setButtonDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setButtonDisabled(true);
      setMessage('Review must be at least 10 characters.');
    } else {
      setButtonDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newReview = {
        text,
        rating,
      };
      setText('');
      addReviewItem(newReview);
    }
  };

  return (
    <Card>
      <form action='' onSubmit={handleSubmit}>
        <h2>How would you rate your experience with our product?</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={buttonDisabled}>
            Send
          </Button>
        </div>
        <div className='message'>{message}</div>
      </form>
    </Card>
  );
}

export default ReviewForm;
