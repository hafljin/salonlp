import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import FadeIn from './FadeIn';

type Faq = {
  id: number;
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
  { id: 1, question: '予約は必要ですか？', answer: 'はい、当サロンは完全予約制となっております。Web予約、またはお電話にてご予約をお願いいたします。' },
  { id: 2, question: '駐車場はありますか？', answer: '店舗前に3台分の駐車スペースをご用意しております。' },
  { id: 3, question: 'クレジットカードは使えますか？', answer: 'VISA, MasterCard, JCB, Amex, Diners がご利用いただけます。また、PayPayなどのQR決済も可能です。' },
  { id: 4, question: '子供連れでも大丈夫ですか？', answer: 'はい、個室もご用意しておりますので、お子様連れでも気兼ねなくご来店ください（要事前予約）。' },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <SectionTitle title="Q & A" subtitle="よくある質問" />
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <FadeIn key={faq.id} delay={idx * 50}>
              <div className="border border-stone-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-stone-50 hover:bg-stone-100 transition-colors"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-medium text-stone-800">Q. {faq.question}</span>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} aria-hidden="true"></i>
                </button>
                <div 
                  id={`faq-answer-${faq.id}`}
                  className={`bg-white px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === idx ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                  }`}
                >
                  <p className="text-stone-600 text-sm leading-relaxed">A. {faq.answer}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

