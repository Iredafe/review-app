import React from 'react';
import Header from './components/Header';
import ReviewList from './components/ReviewList';
import ReviewData from './data/ReviewData';
import { useState } from 'react';

function App() {
  const [review, setReview] = useState(ReviewData);

  return (
    <>
      <Header />
      <ReviewList review={review} />
      <div className='container'></div>
    </>
  );
}

export default App;
