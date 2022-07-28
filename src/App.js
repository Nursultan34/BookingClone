import React from 'react';
import {  Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import ListPage from './pages/List/ListPage';
import Hotel from './pages/hotel/Hotel';
import SingPage from './pages/SingPage/SingPage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<ListPage />} />
      <Route path="/hotels/:id" element={<Hotel />} />
      <Route path="/sing" element={<SingPage/>} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
