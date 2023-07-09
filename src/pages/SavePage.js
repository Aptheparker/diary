import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

import Background4 from '../assets/images/background4.png';


const ImageExporter = () => {
  const componentRef = useRef(null);

  const exportAsPng = () => {
    html2canvas(componentRef.current).then((canvas) => {
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'image.png';
      link.click();
    });
  };

  return (
    <div>
      {/* Your component with the <img> tag */}
      <div ref={componentRef}>
        <img src={Background4} alt="Your Image" />
      </div>

      {/* Button to trigger export */}
      <button onClick={exportAsPng}>Export as PNG</button>
    </div>
  );
};

export default ImageExporter;
