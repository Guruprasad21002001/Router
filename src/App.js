import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Component/HeaderComponent.js';
import Footer from './Component/FooterComponent.js';
import Home from './Component/HomePage.js';
import About from './Component/AboutPage.js';
import Departments from './Component/DepartmentPAge.js';
import Events from './Component/Event.js';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/college"  element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        
      </main>
      <Footer />
    </Router>
  );
};

export default App;