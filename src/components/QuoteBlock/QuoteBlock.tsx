import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuoteBlock.css';

interface QuoteBlockProps {
  quote: string;
  author: string;
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({ quote, author }) => {
  const [fontFamily, setFontFamily] = useState('Arial');
  const navigate = useNavigate();

  const handleFontChange = () => {
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
    const currentIndex = fonts.indexOf(fontFamily);
    const nextIndex = (currentIndex + 1) % fonts.length;
    setFontFamily(fonts[nextIndex]);
  };

  return (
    <div className="quote-block">
      <div className="quote-content" style={{ fontFamily }}>
        <p className="quote-text">{quote}</p>
      </div>
      <div className="quote-actions">
        <button className="action-button author-button" disabled>
          {author ? `Author: ${author}` : 'Author: Unknown'}
        </button>
        <button
          onClick={handleFontChange}
          className="action-button"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          Change Font: {fontFamily}
        </button>
      </div>
    </div>
  );
};

export default QuoteBlock;
