import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
