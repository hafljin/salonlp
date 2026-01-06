import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-stone-900 text-stone-500 py-12 border-t border-stone-800 text-center text-xs">
    <div className="container mx-auto px-6">
      <div className="flex justify-center gap-6 mb-8">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
          <i className="fab fa-instagram text-xl" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Twitter">
          <i className="fab fa-twitter text-xl" aria-hidden="true"></i>
        </a>
        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="TikTok">
          <i className="fab fa-tiktok text-xl" aria-hidden="true"></i>
        </a>
      </div>
      <p>&copy; 2024 Lumière Hair Salon. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;

