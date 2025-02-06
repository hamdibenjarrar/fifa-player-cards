import React from 'react';
import './LoadingSpinner.css'; 

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="football"></div>
    <p className="loading-text">Loading Players...</p>
  </div>
);

export default LoadingSpinner;