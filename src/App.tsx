import React from 'react';
import { Routes, Route, HashRouter as Router } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { FavouritesPage } from './pages/FavouritesPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>

      <Navigation />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/favourites' element={<FavouritesPage />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
