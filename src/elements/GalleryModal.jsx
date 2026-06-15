import React from "react";
import Gallery from "./Gallery";
import "./GalleryModal.css";

const GalleryModal = ({ galleryType, onClose }) => {
  return (
    <div className="galleryModalOverlay" onClick={onClose}>
      <div className="galleryModalContent" onClick={(e) => e.stopPropagation()}>
        <Gallery galleryType={galleryType} />

        <button className="closeButton" onClick={onClose} aria-label="Close gallery">
          ×
        </button>
      </div>
    </div>
  );
};

export default GalleryModal;
