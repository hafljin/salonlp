import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-stone-200 border-t-stone-800 mb-4"></div>
      <p className="text-stone-600 font-serif">Loading...</p>
    </div>
  </div>
);

export default LoadingSpinner;

