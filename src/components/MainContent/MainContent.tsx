import { useNavigate } from 'react-router-dom';
import './MainContent.css';

const MainContent = () => {
  const navigate = useNavigate();

  return (
    <main className="main-content">
      <div className="main-content__left">
        <section className="main-content__top-section">Quotes</section>
        <section className="main-content__about-section">
          <p>
          Welcome to Quotes – a sanctuary for the soul, where words transform into wings that lift you higher. ✨<br></br>

          Here, you’ll uncover a treasure trove of wisdom, inspiration, and motivation crafted to awaken your inner strength and illuminate your path. 🌟<br></br>

          Dive deep into a world of powerful quotes that stir your heart, spark your dreams, and remind you of the infinite potential within. 🌿<br></br>

          Let every word inspire greatness, let every thought ignite passion – your journey to a brighter, more empowered you starts here. 💫 Explore. Reflect. Rise.          
          </p>
        </section>
        <div className="main-content__buttons">
          <button onClick={() => navigate('/list-quotes')} className="main-content__button">
            Try Full List
          </button>
          <button onClick={() => navigate('/random-quotes')} className="main-content__button">
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
