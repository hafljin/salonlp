import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  primary?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, primary = false, className = '', ...props }) => (
  <button
    className={`px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
      primary
        ? 'bg-stone-800 text-white hover:bg-stone-700 shadow-lg'
        : 'bg-white text-stone-800 border border-stone-300 hover:bg-stone-50'
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
