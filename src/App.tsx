// src/App.tsx
import React from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
};

export default App;
