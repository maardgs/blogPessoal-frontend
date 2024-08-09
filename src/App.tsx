import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './componentes/navbar/Navbar';
import Footer from './componentes/footer/Footer';

function App() {
  return (
    <>
  <Navbar/>
  <Home/>
  <Footer/>
    </>
);
}

export default App;