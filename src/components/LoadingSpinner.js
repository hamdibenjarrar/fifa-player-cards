import React from 'react';
import './LoadingSpinner.css'; // We'll create this next

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="football"></div>
    <p className="loading-text">Loading Players...</p>
  </div>
);

export default LoadingSpinner;