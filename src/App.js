import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import ReviewList from './components/ReviewList';
import ReviewData from './data/ReviewData';
import { useState } from 'react';
import ReviewForm from './components/ReviewForm';
import ReviewStats from './components/ReviewStats';
import AboutPage from './pages/AboutPage';

function App() {
  const [review, setReview] = useState(ReviewData);

  const deleteReviewItem = (id) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      setReview(review.filter((review) => review.id !== id));
    }
  };

  const addReviewItem = (newReview) => {
    newReview.id = uuid();
    setReview([newReview, ...review]);
  };
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <ReviewForm review={review} handleAdd={addReviewItem} />
                <ReviewStats review={review} />
                <ReviewList review={review} handleDelete={deleteReviewItem} />
              </>
            }
          ></Route>

          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
