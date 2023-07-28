import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { FavouritesPage } from './pages/FavouritesPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>

      <Navigation />
      <HomePage />
      <Routes>
        {/* <Route path='/' element={} /> */}
        <Route path='/favourites' element={<FavouritesPage />} />
      </Routes>

    </>

  );
}

export default App;
