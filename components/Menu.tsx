import React from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import FadeIn from './FadeIn';

type Menu = {
  id: number;
  title: string;
  price: string;
  description: string;
  time: string;
};

const MENUS: Menu[] = [
  { id: 1, title: 'カット + カラー', price: '¥12,100', description: '骨格に合わせた似合わせカットと、透明感のあるカラー。', time: '120分' },
  { id: 2, title: 'カット + パーマ', price: '¥13,200', description: 'ダメージレスな薬剤で、柔らかい質感のカールを実現します。', time: '150分' },
  { id: 3, title: 'カット + トリートメント', price: '¥9,900', description: '髪の内部から補修し、ツヤとまとまりを与えます。', time: '90分' },
  { id: 4, title: 'イルミナカラー', price: '¥8,800', description: '光を含んだような透明感と輝き。ダメージも最小限に。', time: '90分' },
  { id: 5, title: 'ヘッドスパ (30分)', price: '¥4,400', description: 'アロマの香りでリラックス。頭皮環境を整えます。', time: '30分' },
  { id: 6, title: 'メンズカット', price: '¥5,500', description: 'ビジネスからカジュアルまで、清潔感のあるスタイルを提案。', time: '60分' },
];

const Menu: React.FC = () => (
  <section id="menu" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <FadeIn>
        <SectionTitle title="Menu & Price" subtitle="メニュー・料金" />
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MENUS.map((menu, idx) => (
          <FadeIn key={menu.id} delay={idx * 100}>
            <div className="group p-6 rounded-2xl border border-stone-100 hover:border-stone-200 hover:shadow-lg transition-all duration-300 bg-stone-50/50">
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-lg font-bold text-stone-800">{menu.title}</h3>
                <span className="text-lg font-serif text-stone-600">{menu.price}</span>
              </div>
              <p className="text-stone-500 text-sm mb-4 leading-relaxed">{menu.description}</p>
              <div className="flex justify-between items-center text-xs text-stone-400 border-t border-stone-200 pt-3">
                <span><i className="far fa-clock mr-1"></i> {menu.time}</span>
                <button 
                  className="group-hover:translate-x-1 transition-transform text-stone-800 hover:opacity-70"
                  data-booking-trigger
                >
                  予約する <i className="fas fa-chevron-right text-[10px]"></i>
                </button>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      
      <FadeIn>
        <div className="text-center mt-12">
          <p className="text-xs text-stone-500 mb-6">※価格は全て税込表示です。※ロング料金はいただいておりません。</p>
          <Button primary data-booking-trigger>全メニューを見る（Web予約）</Button>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default Menu;

