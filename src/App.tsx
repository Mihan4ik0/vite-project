import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Quotes from './pages/Quotes';
import RandomPage from './pages/RandomPage';
import './App.css';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<HomePage />} />
      <Route path="/list-quotes" element={<Quotes />} />
      <Route path="/random-quotes" element={<RandomPage />}/>
    </Routes>
  </Router>
);

export default App;
