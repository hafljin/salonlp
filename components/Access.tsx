import React from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';

const Access: React.FC = () => (
  <section id="access" className="py-24 bg-stone-800 text-stone-300">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <SectionTitle title="Shop Info" subtitle="店舗情報" />
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <i className="fas fa-map-marker-alt mt-1 text-stone-400 w-5" aria-hidden="true"></i>
              <div>
                <p className="font-bold text-white mb-1">Lumière Hair Salon</p>
                <p>〒150-0001<br/>東京都渋谷区神宮前1-2-3<br/>原宿ビル 2F</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-phone-alt text-stone-400 w-5" aria-hidden="true"></i>
              <a href="tel:03-1234-5678" className="hover:text-white transition-colors">03-1234-5678</a>
            </div>
            <div className="flex items-start gap-4">
              <i className="far fa-clock mt-1 text-stone-400 w-5" aria-hidden="true"></i>
              <div>
                <p>平日 11:00 - 21:00</p>
                <p>土日祝 10:00 - 20:00</p>
                <p className="text-stone-500 text-sm mt-1">定休日：毎週火曜日、第3月曜日</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className="fas fa-train mt-1 text-stone-400 w-5" aria-hidden="true"></i>
              <p>JR山手線 原宿駅 竹下口より徒歩3分<br/>東京メトロ千代田線 明治神宮前駅 徒歩5分</p>
            </div>
          </div>
          <div className="mt-8">
            <Button 
              className="bg-white text-stone-900 w-full md:w-auto hover:bg-stone-200 border-none shadow-lg"
              onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=東京都渋谷区神宮前1-2-3', '_blank')}
            >
              Google Mapsで開く
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 h-[400px] rounded-xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-500">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.747975468358!2d139.7016358!3d35.673343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cb2eb3108d1%3A0xf11cd9b2395b6677!2z5Y6f5a6_6aeF!5e0!3m2!1sja!2sjp!4v1633000000000!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Googleマップ - Lumière Hair Salon アクセス"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default Access;

