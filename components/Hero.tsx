import React from 'react';
import Button from './Button';
import FadeIn from './FadeIn';

const Hero: React.FC = () => (
  <section id="top" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        alt="落ち着いた雰囲気の美容室店内の写真"
        className="w-full h-full object-cover brightness-75"
        loading="eager"
      />
    </div>
    <div className="relative z-10 text-center text-white px-4 sm:px-6 mt-16">
      <FadeIn>
        <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 tracking-[0.2em] uppercase opacity-90">Private Hair Salon</p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif mb-6 sm:mb-8 leading-tight drop-shadow-lg">
          日常に、<br className="md:hidden" />洗練された輝きを。
        </h1>
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 justify-center">
          <Button 
            className="bg-white text-stone-900 hover:bg-stone-200 min-w-[180px] sm:min-w-[200px] border-none shadow-lg font-semibold text-base sm:text-lg" 
            primary
            data-booking-trigger
          >
            予約する
          </Button>
          <a href="#menu" aria-label="メニューセクションへ移動" className="focus:outline-none">
            <Button className="bg-white text-stone-900 hover:bg-stone-200 min-w-[180px] sm:min-w-[200px] border-none shadow-lg font-semibold text-base sm:text-lg">
              メニューを見る
            </Button>
          </a>
        </div>
      </FadeIn>
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
      <a href="#concept" aria-label="次のセクションへスクロール">
        <i className="fas fa-chevron-down text-2xl" aria-hidden="true"></i>
      </a>
    </div>
  </section>
);

export default Hero;

