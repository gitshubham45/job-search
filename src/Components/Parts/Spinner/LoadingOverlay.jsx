import React from 'react';
import { ClipLoader } from 'react-spinners'; // Example spinner
import './loadingOverlay.css'; // CSS for styling the overlay

const LoadingOverlay = ({ isLoading }) => {
  return (
    isLoading && (
      <div className="overlay">
        <div className="spinner-container">
          <ClipLoader size={40} color={"#fff"} loading={isLoading} /> {/* Spinner */}
        </div>
      </div>
    )
  );
};

export default LoadingOverlay;
