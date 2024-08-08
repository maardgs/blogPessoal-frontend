import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>} />
    </Routes>
  </BrowserRouter>
    </>
);
}

export default App;