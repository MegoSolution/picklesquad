import { useState } from 'react';
import Image from 'next/image';

const CourtGalleryModal = ({ isOpen, onClose, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="court-gallery-modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="gallery-container">
          <button className="nav-button prev" onClick={handlePrevious}>‹</button>
          
          <div className="image-container">
            <img
              src={images[currentImageIndex]}
              alt={`Court photo ${currentImageIndex + 1}`}
              style={{
                objectFit: 'contain',
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          
          <button className="nav-button next" onClick={handleNext}>›</button>
        </div>
        
        <div className="image-counter">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default CourtGalleryModal; 