import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./componentes/navbar/Navbar";
import Footer from "./componentes/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
