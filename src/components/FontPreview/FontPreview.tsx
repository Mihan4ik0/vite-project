import React from 'react';
import './FontPreview.css';

const FontPreview: React.FC = () => {
  return (
    <div className="font-preview">
      <div className="font-preview-box">
        {/* You can replace this with actual font preview image */}
        <div className="font-preview-content">
          A B C D E F G
          a b c d e f g
        </div>
      </div>
    </div>
  );
};

export default FontPreview;