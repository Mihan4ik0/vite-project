import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './RandomQuotes.css';

const RandomQuotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [font, setFont] = useState('Arial');
  const location = useLocation(); // Хук для отслеживания изменений в пути

  // Функция для получения случайной цитаты
  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://dummyjson.com/quotes/random');
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching the quote:', error);
      setQuote('Failed to fetch quote. Please try again.');
      setAuthor('');
    }
  };

  // Получаем цитату при изменении пути (перезагрузка компонента)
  useEffect(() => {
    fetchRandomQuote();
  }, [location]); // Зависимость от `location` — при изменении маршрута цитата будет обновляться

  // Функция для смены шрифта
  const changeFont = () => {
    const fonts = [
      'Arial',
      'Times New Roman',
      'Georgia',
      'Verdana',
      'Courier New',
      'Tahoma',
      'Impact',
      'Comic Sans MS',
      'Lucida Console',
    ];
    const currentIndex = fonts.indexOf(font);
    const nextIndex = (currentIndex + 1) % fonts.length;
    setFont(fonts[nextIndex]);
  };

  return (
    <main style={{ fontFamily: font }} className="main-content">
      <div className="main-content__left">
        <section className="quote-content-random">
          <p className="quote-text">{quote}</p>
        </section>
        <div className="quote-actions">
          <button className="action-button author-button" disabled>
            {author ? `Author: ${author}` : 'Author: Unknown'}
          </button>
          <button onClick={changeFont} className="action-button">
            Change Font: {font} {/* Отображаем текущий шрифт */}
          </button>
        </div>
      </div>
      <div className="main-content__right">
        <section className="main-content__image-section">
          <img src="/src/pics/Web_fonts.png" alt="Font Illustration" className="main-content__image" />
        </section>
      </div>
    </main>
  );
};

export default RandomQuotes;
