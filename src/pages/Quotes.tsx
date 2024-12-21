import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import QuoteBlock from '../components/QuoteBlock/QuoteBlock';
import FontPreview from '../components/FontPreview/FontPreview';
import { initialQuotes, Quote } from '../data/quotes';
import './Quotes.css';

// Симуляция загрузки данных
const fetchQuotes = (start: number, count: number): Promise<Quote[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newQuotes = initialQuotes.slice(start, start + count);
      resolve(newQuotes);
    }, 500); // Имитация задержки сети
  });
};

const Quotes: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [hasMore, setHasMore] = useState(true); // Флаг для определения, есть ли еще данные
  const [isLoading, setIsLoading] = useState(false); // Флаг для предотвращения повторной загрузки

  useEffect(() => {
    // Загрузка первых данных при монтировании
    loadMoreQuotes();
  }, []);

  const loadMoreQuotes = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    const newQuotes = await fetchQuotes(quotes.length, 3); // Загружаем 3 новых цитаты
    setQuotes((prev) => [...prev, ...newQuotes]);

    if (newQuotes.length < 3) {
      setHasMore(false); // Если новых данных меньше ожидаемого количества
    }

    setIsLoading(false);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 200
    ) {
      loadMoreQuotes();
    }
  };

  useEffect(() => {
    // Подписываемся на событие прокрутки
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading, hasMore]); // Обновляем подписку, если меняются зависимости

  return (
    <div>
      <Header />
      <div className="quotes-page">
        <div className="quotes-container">
          {quotes.map((quote) => (
            <div className="content-row" key={quote.id}>
              <QuoteBlock quote={quote.text} author={quote.author} />
              <FontPreview />
            </div>
          ))}
          {isLoading && <div>Loading...</div>}
        </div>
      </div>
    </div>
  );
};

export default Quotes;