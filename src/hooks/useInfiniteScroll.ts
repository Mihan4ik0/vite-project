import { useEffect, useState } from 'react';
import { Quote, initialQuotes } from '../data/quotes';

export const useInfiniteScroll = () => {
  const [quotes, setQuotes] = useState<Quote[]>(initialQuotes.slice(0, 2));
  const [loading, setLoading] = useState(false);

  const loadMoreQuotes = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const currentLength = quotes.length;
      const nextQuotes = initialQuotes.slice(
        currentLength,
        currentLength + 2
      );
      
      if (nextQuotes.length > 0) {
        setQuotes(prev => [...prev, ...nextQuotes]);
      }
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (loading) return;
      
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight - 800;
      
      if (scrollPosition > threshold) {
        loadMoreQuotes();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return { quotes, loading };
};