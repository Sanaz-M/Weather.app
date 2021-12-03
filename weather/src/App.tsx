import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import './components/component.css'

function App() {
  return (
  <div id="main-body">
    <BrowserRouter>
    
      <MyNavBar />
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
