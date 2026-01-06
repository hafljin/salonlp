import React, { useState, useEffect } from 'react';
import Button from './Button';

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    stylist: '',
    message: '',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここで実際の予約処理を行う
    alert('ご予約ありがとうございます。確認のメールをお送りいたします。');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      service: '',
      stylist: '',
      message: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-stone-200 px-6 py-4 flex justify-between items-center">
          <h2 id="booking-modal-title" className="text-2xl font-serif text-stone-800">
            ご予約フォーム
          </h2>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-600 transition-colors"
            aria-label="閉じる"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
              電話番号 <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-stone-700 mb-2">
                希望日 <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="date"
                required
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-stone-700 mb-2">
                希望時間 <span className="text-red-500">*</span>
              </label>
              <select
                id="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
              >
                <option value="">選択してください</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-stone-700 mb-2">
              ご希望メニュー <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
            >
              <option value="">選択してください</option>
              <option value="カット + カラー">カット + カラー</option>
              <option value="カット + パーマ">カット + パーマ</option>
              <option value="カット + トリートメント">カット + トリートメント</option>
              <option value="イルミナカラー">イルミナカラー</option>
              <option value="ヘッドスパ">ヘッドスパ</option>
              <option value="メンズカット">メンズカット</option>
            </select>
          </div>

          <div>
            <label htmlFor="stylist" className="block text-sm font-medium text-stone-700 mb-2">
              ご希望スタイリスト
            </label>
            <select
              id="stylist"
              value={formData.stylist}
              onChange={(e) => setFormData({ ...formData, stylist: e.target.value })}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
            >
              <option value="">指定なし</option>
              <option value="Sakura Tanaka">Sakura Tanaka</option>
              <option value="Kenji Sato">Kenji Sato</option>
              <option value="Yui Suzuki">Yui Suzuki</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
              ご要望・ご質問
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
              placeholder="ご要望やご質問がございましたら、お気軽にお書きください"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              onClick={onClose}
              className="flex-1 bg-stone-200 text-stone-800 hover:bg-stone-300"
            >
              キャンセル
            </Button>
            <Button type="submit" primary className="flex-1">
              予約を送信
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;

