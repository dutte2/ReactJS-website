import React from 'react';
import '../Styles/Alert.css'; 

const Alert = ({ message, onClose }) => {
  return (
    <div className="alert-container">
      <div className="alert">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Alert;
