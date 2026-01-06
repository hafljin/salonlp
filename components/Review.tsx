import React from 'react';
import SectionTitle from './SectionTitle';
import FadeIn from './FadeIn';

type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
};

const REVIEWS: Review[] = [
  { id: 1, name: 'M.K 様 (30代女性)', rating: 5, comment: '初めて伺いましたが、丁寧なカウンセリングで安心してお任せできました。カラーの色味も理想通りで大満足です！' },
  { id: 2, name: 'S.T 様 (20代女性)', rating: 5, comment: '店内の雰囲気がとても良く、リラックスして過ごせました。トリートメントで髪が生き返りました。また来ます。' },
  { id: 3, name: 'Y.O 様 (40代男性)', rating: 4, comment: 'メンズカットが得意な美容室を探していました。セットの仕方も丁寧に教えてくれて助かりました。' },
];

const Review: React.FC = () => (
  <section className="py-24 bg-stone-50 border-t border-stone-200">
    <div className="container mx-auto px-6 max-w-4xl">
      <SectionTitle title="Voice" subtitle="お客様の声" />
      
      <div className="space-y-6">
        {REVIEWS.map((review, idx) => (
          <FadeIn key={review.id} delay={idx * 100}>
            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 flex items-center gap-3 md:flex-col md:items-center md:w-32">
                 <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-stone-500 font-bold">
                   {review.name.charAt(0)}
                 </div>
                 <div className="text-center">
                   <p className="font-bold text-sm text-stone-800">{review.name}</p>
                   <div className="text-yellow-400 text-xs mt-1" role="img" aria-label={`評価 ${review.rating}つ星`}>
                     {new Array(5).fill(null).map((_, i) => (
                       <i key={`${review.id}-star-${i}`} className={`fas fa-star ${i < review.rating ? '' : 'text-stone-300'}`}></i>
                     ))}
                   </div>
                 </div>
              </div>
              <div className="flex-grow">
                <i className="fas fa-quote-left text-stone-200 text-2xl mb-2 block" aria-hidden="true"></i>
                <p className="text-stone-600 leading-relaxed">{review.comment}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Review;

