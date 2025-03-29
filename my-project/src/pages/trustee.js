import React from "react";

const TrusteeImageModal = ({ show, onClose }) => {
  if (!show) return null; // If show is false, do not render anything

  return (
    <div style={modalStyle} onClick={onClose}>
      <img 
        src="../assets/trustee.jpg" 
        alt="Trustee" 
        style={imageStyle} 
      />
    </div>
  );
};

// Full-screen modal styling
const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

// Image Styling (Full Screen)
const imageStyle = {
  maxWidth: "90%",
  maxHeight: "90%",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
};

export default TrusteeImageModal;