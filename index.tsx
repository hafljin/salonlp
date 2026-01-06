import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Menu from './components/Menu';
import Campaign from './components/Campaign';
import Stylist from './components/Stylist';
import Gallery from './components/Gallery';
import Review from './components/Review';
import Faq from './components/Faq';
import Access from './components/Access';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Button from './components/Button';

// --- Main App ---

const App = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // 予約ボタンのクリックイベントをグローバルに設定
  React.useEffect(() => {
    const handleBookingClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const trigger = target.closest('[data-booking-trigger]');
      if (trigger) {
        e.preventDefault();
        e.stopPropagation();
        setIsBookingModalOpen(true);
      }
    };

    document.addEventListener('click', handleBookingClick, true);
    return () => document.removeEventListener('click', handleBookingClick, true);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Concept />
        <Menu />
        <Campaign />
        <Stylist />
        <Gallery />
        <Review />
        <Faq />
        <Access />
        <Contact />
      </main>
      <Footer />
      
      {/* Fixed Bottom CTA for Mobile */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <Button 
          primary 
          className="w-full shadow-2xl py-4 text-lg bg-stone-800/90 backdrop-blur"
          onClick={() => setIsBookingModalOpen(true)}
          data-booking-trigger
        >
          今すぐWeb予約する
        </Button>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
