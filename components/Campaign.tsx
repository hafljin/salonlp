import React from 'react';
import FadeIn from './FadeIn';
import Button from './Button';

const Campaign: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-stone-800 via-stone-700 to-stone-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-6">
              <i className="fas fa-gift mr-2"></i>
              キャンペーン情報
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              初回限定キャンペーン
            </h2>
            <p className="text-xl md:text-2xl mb-4 text-stone-200">
              カット + カラーが
            </p>
            <div className="mb-8">
              <span className="text-5xl md:text-6xl font-bold line-through text-stone-400 mr-4">¥12,100</span>
              <span className="text-6xl md:text-7xl font-bold text-yellow-300">¥9,900</span>
            </div>
            <p className="text-stone-300 mb-8 leading-relaxed">
              初めてご来店のお客様限定で、カット+カラーが特別価格でご利用いただけます。<br/>
              この機会にぜひ、Lumièreの技術とサービスをお試しください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                primary
                className="bg-white text-stone-900 hover:bg-stone-200 text-lg px-8 py-4"
                data-booking-trigger
              >
                今すぐ予約する
              </Button>
              <Button
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4"
                onClick={() => {
                  const menuSection = document.getElementById('menu');
                  menuSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                メニューを見る
              </Button>
            </div>
            <p className="text-sm text-stone-400 mt-6">
              ※ キャンペーンは予約時に自動適用されます<br/>
              ※ 他の割引との併用はできません
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Campaign;

