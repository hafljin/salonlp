import React from 'react';
import SectionTitle from './SectionTitle';
import FadeIn from './FadeIn';

const Concept: React.FC = () => (
  <section id="concept" className="py-24 bg-stone-50">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full md:w-1/2">
          <FadeIn>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Styling"
                className="rounded-lg shadow-xl w-full"
                loading="lazy"
                onLoad={(e) => {
                  e.currentTarget.classList.add('loaded');
                }}
              />
              <div className="absolute -bottom-6 -right-6 w-2/3">
                 <img
                  src="https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Detail"
                  className="rounded-lg shadow-lg border-4 border-stone-50"
                  loading="lazy"
                  onLoad={(e) => {
                    e.currentTarget.classList.add('loaded');
                  }}
                />
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="w-full md:w-1/2 pt-8 md:pt-0">
          <FadeIn delay={200}>
            <SectionTitle title="Concept" subtitle="こだわり" />
            <div className="text-stone-600 leading-loose space-y-6">
              <p>
                Lumière（ルミエール）は、フランス語で「光」を意味します。<br/>
                お客様一人ひとりの個性が光り輝くスタイルをご提案したい。<br/>
                そんな想いを込めて、私たちはハサミを握ります。
              </p>
              <p>
                骨格や髪質に合わせた「似合わせカット」はもちろん、<br/>
                髪の健康を第一に考えたオーガニック薬剤や、<br/>
                極上のリラックスタイムを提供するヘッドスパなど、<br/>
                すべてにおいて上質さを追求しています。
              </p>
              <p>
                忙しい日常を忘れ、あなただけの特別な時間をお過ごしください。
              </p>
            </div>
            <div className="mt-8">
              <a href="#menu" className="text-stone-800 border-b border-stone-800 pb-1 hover:opacity-60 transition-opacity inline-flex items-center gap-2">
                View Menu <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

export default Concept;

