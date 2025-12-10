import React from 'react';

type SectionTitleProps = { title: string; subtitle: string };

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-serif text-stone-800 mb-2 tracking-wide">{title}</h2>
    <p className="text-stone-500 text-sm tracking-wider uppercase">{subtitle}</p>
    <div className="w-12 h-0.5 bg-stone-400 mx-auto mt-4"></div>
  </div>
);

export default SectionTitle;
