import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import ReviewList from './components/ReviewList';
import ReviewForm from './components/ReviewForm';
import ReviewStats from './components/ReviewStats';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { ReviewProvider } from './context/ReviewContext';

function App() {
  return (
    <ReviewProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <ReviewForm />
                  <ReviewStats />
                  <ReviewList />
                  <AboutIconLink />
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </ReviewProvider>
  );
}

export default App;
