import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import QuoteBlock from '../components/QuoteBlock/QuoteBlock';
import FontPreview from '../components/FontPreview/FontPreview';
import './Quotes.css';

interface Quote {
  id: number;
  quote: string;
  author: string;
}

const fetchQuotes = async (skip: number, limit: number): Promise<Quote[]> => {
  const response = await fetch(`https://dummyjson.com/quotes?skip=${skip}&limit=${limit}`);
  const data = await response.json();
  return data.quotes.map((item: any) => ({
    id: item.id,
    quote: item.quote,
    author: item.author
  }));
};

const Quotes: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const limit = 3; // Количество цитат за один запрос

  useEffect(() => {
    loadMoreQuotes();
  }, []);

  const loadMoreQuotes = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    const newQuotes = await fetchQuotes(page * limit, limit);
    setQuotes((prev) => [...prev, ...newQuotes]);

    if (newQuotes.length < limit) {
      setHasMore(false);
    } else {
      setPage((prev) => prev + 1);
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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading, hasMore]);

  return (
    <div>
      <Header />
      <div className="quotes-page">
        <div className="quotes-container">
          {quotes.map((quote) => (
            <div className="content-row" key={quote.id}>
              <QuoteBlock quote={quote.quote} author={quote.author} />
              <FontPreview />
            </div>
          ))}
          {isLoading && <div>Loading...</div>}
          {!hasMore && <div>No more quotes available</div>}
        </div>
      </div>
    </div>
  );
};

export default Quotes;
