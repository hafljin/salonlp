import React from 'react';
import SectionTitle from './SectionTitle';
import FadeIn from './FadeIn';

type Stylist = {
  id: number;
  name: string;
  role: string;
  image: string;
  message: string;
  specialties: string[];
};

const STYLISTS: Stylist[] = [
  { id: 1, name: 'Sakura Tanaka', role: 'Top Stylist', image: 'https://images.unsplash.com/photo-1595240277861-55db29b007cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', message: '「なりたい」を叶えます。毎日のスタイリングが楽しくなる提案を。', specialties: ['ショートボブ', '透明感カラー'] },
  { id: 2, name: 'Kenji Sato', role: 'Director', image: 'https://images.unsplash.com/photo-1616703541604-0610f639207e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', message: '髪質改善はお任せください。あなたの髪の悩みを魅力に変えます。', specialties: ['髪質改善', 'メンズカット'] },
  { id: 3, name: 'Yui Suzuki', role: 'Stylist', image: 'https://images.unsplash.com/photo-1583995627255-e9b4625b0853?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', message: 'トレンドを取り入れた、ナチュラルで可愛いスタイルが得意です。', specialties: ['アレンジ', 'ハイライト'] },
];

const Stylist: React.FC = () => (
  <section id="stylist" className="py-24 bg-stone-100">
    <div className="container mx-auto px-6">
      <SectionTitle title="Stylist" subtitle="スタイリスト紹介" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {STYLISTS.map((stylist, idx) => (
          <FadeIn key={stylist.id} delay={idx * 150}>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={stylist.image} 
                  alt={stylist.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  loading="lazy"
                  onLoad={(e) => {
                    e.currentTarget.classList.add('loaded');
                  }}
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-xs text-stone-500 mb-1">{stylist.role}</p>
                <h3 className="text-xl font-serif mb-3">{stylist.name}</h3>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {stylist.specialties.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-stone-100 text-stone-600 text-xs rounded-md">#{tag}</span>
                  ))}
                </div>
                <p className="text-sm text-stone-500 leading-relaxed text-left border-t border-stone-100 pt-4">
                  {stylist.message}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Stylist;

