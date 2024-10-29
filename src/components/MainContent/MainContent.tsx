import { useNavigate } from 'react-router-dom';
import './MainContent.css';

const MainContent = () => {
  const navigate = useNavigate();

  return (
    <main className="main-content">
      <div className="main-content__left">
        <section className="main-content__top-section">Quotes</section>
        <section className="main-content__about-section">
          <p>Welcome to Quotes! Your source for inspirational and motivational quotes. Dive in and explore!</p>
        </section>
        <div className="main-content__buttons">
          <button onClick={() => navigate('/full-list')} className="main-content__button">
            Try Full List
          </button>
          <button onClick={() => navigate('/random-quote')} className="main-content__button">
            Try Random Quotes!
          </button>
        </div>
      </div>
      <div className="main-content__right">
        <section className="main-content__image-section">
        <img src="/src/pics/Web_fonts.png" alt="Beautiful Fonts" className="main-content__image" />
        </section>
      </div>
    </main>
  );
};

export default MainContent;
