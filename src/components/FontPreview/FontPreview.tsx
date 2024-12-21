import React, { useState, useEffect } from 'react';
import './FontPreview.css';

const FontPreview: React.FC = () => {
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

  const [randomFont, setRandomFont] = useState<string>(fonts[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * fonts.length);
    setRandomFont(fonts[randomIndex]);
  }, []);

  return (
    <div className="font-preview">
      <div className="font-preview-box" style={{ fontFamily: randomFont }}>
        <div className="font-preview-content">
          <p>{randomFont}</p>
          <p>A B C D E F G  a b c d e f g</p>
        </div>
      </div>
    </div>
  );
};

export default FontPreview;
