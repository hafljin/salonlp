import React from 'react';
import SectionTitle from './SectionTitle';
import FadeIn from './FadeIn';

const GALLERY_IMAGES: string[] = [
  'https://images.unsplash.com/photo-1582095133179-bfd08d34a832?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1562547256-2c5eece99d48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1533596919106-9635b7b1349f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1494354145959-25cb82edf23d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
];

const Gallery: React.FC = () => (
  <section id="gallery" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <SectionTitle title="Style Gallery" subtitle="施術事例" />
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {GALLERY_IMAGES.map((img, idx) => (
          <FadeIn key={img} delay={idx * 50}>
            <div className="aspect-square overflow-hidden rounded-lg group relative cursor-pointer">
              <img 
                src={img} 
                alt={`施術事例 ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                loading="lazy"
                onLoad={(e) => {
                  e.currentTarget.classList.add('loaded');
                }}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <i className="fab fa-instagram text-white text-3xl drop-shadow-lg"></i>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors" aria-label="Instagramでもっと見る">
          <i className="fab fa-instagram text-xl" aria-hidden="true"></i>
          <span>Instagramでもっと見る</span>
        </a>
      </div>
    </div>
  </section>
);

export default Gallery;

