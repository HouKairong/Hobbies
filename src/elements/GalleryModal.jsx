import React from "react";
import Gallery from "./Gallery";
import "./GalleryModal.css";

const GalleryModal = ({ onClose }) => {
  return (
    <div className="galleryModalOverlay" onClick={onClose}>
      <div className="galleryModalContent" onClick={(e) => e.stopPropagation()}>
        <Gallery />
        <button className="closeButton" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default GalleryModal;
