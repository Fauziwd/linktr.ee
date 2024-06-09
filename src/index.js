// src/index.js atau src
import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';  // Import Tailwind CSS
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Webdev from './menu1/Webdev';
import Pesan from './menu1/Pesan';
import App from './App'; // Pastikan path ini benar
import Coming from './Coming';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/oops" element={<Coming />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/web-developer" element={<Webdev />} />
      <Route path="/opsi-order" element={<Pesan />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
