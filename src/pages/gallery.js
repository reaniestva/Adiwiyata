import React from 'react';

const Gallery = () => {
  return (
    <div>
      <h1 className="text-center mt-5">Gallery Adiwiyata</h1>
      <div className="gallery-container">
        <div className="gallery-item">
          <img src="aisa.png" alt="Gambar 1" />
        </div>
        <div className="gallery-item">
          <img src="program-adiwiyata.jpg" alt="Gambar 2" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;