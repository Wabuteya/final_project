

import React from 'react';
import { Routes,Route } from 'react-router-dom';
import HomePage from './Comoponent/Pages/HomePage/HomePage';
import BooksPage from './Comoponent/Pages/BooksPage/BooksPage';
import BookDetailsPage from './Comoponent/Pages/BookDetailsPage/BookDetails';
import Login from './Comoponent/Pages/Login-page/Login';
import Signup from './Comoponent/Pages/SignUpPage/Signup';

function App() {
    return (
      <div className="App">
        <Routes>
          <Route path='/' element ={<HomePage/>} />
          <Route path='/books' element ={<BooksPage/>} />
          <Route path='/book-details/:id' element={<BookDetailsPage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup />} />
          
        </Routes>
      </div>
  );
}

export default App;
