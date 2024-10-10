// src/components/MainContent/MainContent.tsx
import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="main-content__left">
        <section className="main-content__top-section">Service Name</section>
        <section className="main-content__about-section">About Service</section>
        <div className="main-content__buttons">
          <button className="main-content__button">Try Full List</button>
          <button className="main-content__button">Try Random Quotes!</button>
        </div>
      </div>
      <div className="main-content__right">
        <section className="main-content__image-section">Beautiful Fonts</section>
      </div>
    </main>
  );
};

export default MainContent;
