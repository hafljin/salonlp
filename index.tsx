import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// --- Data Definitions ---

const MENUS = [
  { id: 1, title: 'カット + カラー', price: '¥12,100', description: '骨格に合わせた似合わせカットと、透明感のあるカラー。', time: '120分' },
  { id: 2, title: 'カット + パーマ', price: '¥13,200', description: 'ダメージレスな薬剤で、柔らかい質感のカールを実現します。', time: '150分' },
  { id: 3, title: 'カット + トリートメント', price: '¥9,900', description: '髪の内部から補修し、ツヤとまとまりを与えます。', time: '90分' },
  { id: 4, title: 'イルミナカラー', price: '¥8,800', description: '光を含んだような透明感と輝き。ダメージも最小限に。', time: '90分' },
  { id: 5, title: 'ヘッドスパ (30分)', price: '¥4,400', description: 'アロマの香りでリラックス。頭皮環境を整えます。', time: '30分' },
  { id: 6, title: 'メンズカット', price: '¥5,500', description: 'ビジネスからカジュアルまで、清潔感のあるスタイルを提案。', time: '60分' },
];

const STYLISTS = [
  { id: 1, name: 'Sakura Tanaka', role: 'Top Stylist', image: 'https://images.unsplash.com/photo-1595240277861-55db29b007cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', message: '「なりたい」を叶えます。毎日のスタイリングが楽しくなる提案を。', specialties: ['ショートボブ', '透明感カラー'] },
  { id: 2, name: 'Kenji Sato', role: 'Director', image: 'https://images.unsplash.com/photo-1616703541604-0610f639207e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', message: '髪質改善はお任せください。あなたの髪の悩みを魅力に変えます。', specialties: ['髪質改善', 'メンズカット'] },
  { id: 3, name: 'Yui Suzuki', role: 'Stylist', image: 'https://images.unsplash.com/photo-1583995627255-e9b4625b0853?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', message: 'トレンドを取り入れた、ナチュラルで可愛いスタイルが得意です。', specialties: ['アレンジ', 'ハイライト'] },
];

const REVIEWS = [
  { id: 1, name: 'M.K 様 (30代女性)', rating: 5, comment: '初めて伺いましたが、丁寧なカウンセリングで安心してお任せできました。カラーの色味も理想通りで大満足です！' },
  { id: 2, name: 'S.T 様 (20代女性)', rating: 5, comment: '店内の雰囲気がとても良く、リラックスして過ごせました。トリートメントで髪が生き返りました。また来ます。' },
  { id: 3, name: 'Y.O 様 (40代男性)', rating: 4, comment: 'メンズカットが得意な美容室を探していました。セットの仕方も丁寧に教えてくれて助かりました。' },
];

const FAQS = [
  { id: 1, question: '予約は必要ですか？', answer: 'はい、当サロンは完全予約制となっております。Web予約、またはお電話にてご予約をお願いいたします。' },
  { id: 2, question: '駐車場はありますか？', answer: '店舗前に3台分の駐車スペースをご用意しております。' },
  { id: 3, question: 'クレジットカードは使えますか？', answer: 'VISA, MasterCard, JCB, Amex, Diners がご利用いただけます。また、PayPayなどのQR決済も可能です。' },
  { id: 4, question: '子供連れでも大丈夫ですか？', answer: 'はい、個室もご用意しておりますので、お子様連れでも気兼ねなくご来店ください（要事前予約）。' },
];

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1582095133179-bfd08d34a832?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1562547256-2c5eece99d48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1533596919106-9635b7b1349f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1494354145959-25cb82edf23d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
];

// --- Components ---

const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-serif text-stone-800 mb-2 tracking-wide">{title}</h2>
    <p className="text-stone-500 text-sm tracking-wider uppercase">{subtitle}</p>
    <div className="w-12 h-0.5 bg-stone-400 mx-auto mt-4"></div>
  </div>
);

const Button = ({ children, primary = false, className = '', ...props }: any) => (
  <button
    className={`px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
      primary
        ? 'bg-stone-800 text-white hover:bg-stone-700 shadow-lg'
        : 'bg-white text-stone-800 border border-stone-300 hover:bg-stone-50'
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Concept', href: '#concept' },
    { name: 'Menu', href: '#menu' },
    { name: 'Stylist', href: '#stylist' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Access', href: '#access' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className={`font-serif text-2xl tracking-widest ${scrolled ? 'text-stone-800' : 'text-stone-800 md:text-white'}`}>
          Lumière
        </h1>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm tracking-wide hover:opacity-70 transition-colors ${
                scrolled ? 'text-stone-600' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button primary className="text-sm px-6 py-2">
            WEB予約
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-stone-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-stone-100 shadow-lg py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-600 py-2 border-b border-stone-50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button primary className="w-full mt-2">WEB予約</Button>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        alt="Salon Interior"
        className="w-full h-full object-cover brightness-75"
      />
    </div>
    <div className="relative z-10 text-center text-white px-6 mt-16">
      <FadeIn>
        <p className="text-lg md:text-xl mb-4 tracking-[0.2em] uppercase opacity-90">Private Hair Salon</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight">
          日常に、<br className="md:hidden" />洗練された輝きを。
        </h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button className="bg-white text-stone-900 hover:bg-stone-200 min-w-[200px] border-none shadow-lg">
            予約する
          </Button>
          <Button className="bg-white text-stone-900 hover:bg-stone-200 min-w-[200px] border-none shadow-lg">
            メニューを見る
          </Button>
        </div>
      </FadeIn>
    </div>
    
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
      <i className="fas fa-chevron-down text-2xl"></i>
    </div>
  </section>
);

const Concept = () => (
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
              />
              <div className="absolute -bottom-6 -right-6 w-2/3">
                 <img
                  src="https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Detail"
                  className="rounded-lg shadow-lg border-4 border-stone-50"
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

const Menu = () => (
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
                <span className="group-hover:translate-x-1 transition-transform text-stone-800">予約する <i className="fas fa-chevron-right text-[10px]"></i></span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      
      <FadeIn>
        <div className="text-center mt-12">
          <p className="text-xs text-stone-500 mb-6">※価格は全て税込表示です。※ロング料金はいただいておりません。</p>
          <Button primary>全メニューを見る（Web予約）</Button>
        </div>
      </FadeIn>
    </div>
  </section>
);

const Stylist = () => (
  <section id="stylist" className="py-24 bg-stone-100">
    <div className="container mx-auto px-6">
      <SectionTitle title="Stylist" subtitle="スタイリスト紹介" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {STYLISTS.map((stylist, idx) => (
          <FadeIn key={stylist.id} delay={idx * 150}>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={stylist.image} alt={stylist.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
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

const Gallery = () => (
  <section id="gallery" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <SectionTitle title="Style Gallery" subtitle="施術事例" />
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {GALLERY_IMAGES.map((img, idx) => (
          <FadeIn key={idx} delay={idx * 50}>
            <div className="aspect-square overflow-hidden rounded-lg group relative cursor-pointer">
              <img src={img} alt="Style" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <i className="fab fa-instagram text-white text-3xl drop-shadow-lg"></i>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a href="#" className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors">
          <i className="fab fa-instagram text-xl"></i>
          <span>Instagramでもっと見る</span>
        </a>
      </div>
    </div>
  </section>
);

const Review = () => (
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
                   <div className="text-yellow-400 text-xs mt-1">
                     {[...Array(5)].map((_, i) => (
                       <i key={i} className={`fas fa-star ${i < review.rating ? '' : 'text-stone-300'}`}></i>
                     ))}
                   </div>
                 </div>
              </div>
              <div className="flex-grow">
                <i className="fas fa-quote-left text-stone-200 text-2xl mb-2 block"></i>
                <p className="text-stone-600 leading-relaxed">{review.comment}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
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
                >
                  <span className="font-medium text-stone-800">Q. {faq.question}</span>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}></i>
                </button>
                <div 
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

const Access = () => (
  <section id="access" className="py-24 bg-stone-800 text-stone-300">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <SectionTitle title="Access" subtitle="アクセス" />
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <i className="fas fa-map-marker-alt mt-1 text-stone-400 w-5"></i>
              <div>
                <p className="font-bold text-white mb-1">Lumière Hair Salon</p>
                <p>〒150-0001<br/>東京都渋谷区神宮前1-2-3<br/>原宿ビル 2F</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-phone-alt text-stone-400 w-5"></i>
              <p>03-1234-5678</p>
            </div>
            <div className="flex items-start gap-4">
              <i className="far fa-clock mt-1 text-stone-400 w-5"></i>
              <div>
                <p>平日 11:00 - 21:00</p>
                <p>土日祝 10:00 - 20:00</p>
                <p className="text-stone-500 text-sm mt-1">定休日：毎週火曜日、第3月曜日</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className="fas fa-train mt-1 text-stone-400 w-5"></i>
              <p>JR山手線 原宿駅 竹下口より徒歩3分<br/>東京メトロ千代田線 明治神宮前駅 徒歩5分</p>
            </div>
          </div>
          <div className="mt-8">
            <Button className="bg-white text-stone-900 w-full md:w-auto hover:bg-stone-200 border-none shadow-lg">
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
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-stone-900 text-stone-500 py-12 border-t border-stone-800 text-center text-xs">
    <div className="container mx-auto px-6">
      <div className="flex justify-center gap-6 mb-8">
        <a href="#" className="hover:text-white transition-colors"><i className="fab fa-instagram text-xl"></i></a>
        <a href="#" className="hover:text-white transition-colors"><i className="fab fa-twitter text-xl"></i></a>
        <a href="#" className="hover:text-white transition-colors"><i className="fab fa-tiktok text-xl"></i></a>
      </div>
      <p>&copy; 2024 Lumière Hair Salon. All Rights Reserved.</p>
    </div>
  </footer>
);

// --- Main App ---

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Concept />
        <Menu />
        <Stylist />
        <Gallery />
        <Review />
        <FAQ />
        <Access />
      </main>
      <Footer />
      
      {/* Fixed Bottom CTA for Mobile */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <Button primary className="w-full shadow-2xl py-4 text-lg bg-stone-800/90 backdrop-blur">
          今すぐWeb予約する
        </Button>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);