import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import FadeIn from './FadeIn';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // 実際の送信処理をここに実装
    // 今回はデモのため、2秒後に成功をシミュレート
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // 3秒後にステータスをリセット
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn>
          <SectionTitle title="Contact" subtitle="お問い合わせ" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* お問い合わせ情報 */}
          <FadeIn delay={100}>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif text-stone-800 mb-4">お問い合わせ方法</h3>
                <p className="text-stone-600 leading-relaxed mb-6">
                  ご予約・ご質問・ご要望など、お気軽にお問い合わせください。<br/>
                  お電話または下記フォームよりご連絡いただけます。
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <i className="fas fa-phone-alt text-stone-400 mt-1 w-5" aria-hidden="true"></i>
                  <div>
                    <p className="font-bold text-stone-800 mb-1">お電話でのお問い合わせ</p>
                    <a href="tel:03-1234-5678" className="text-stone-600 hover:text-stone-800 transition-colors text-lg">
                      03-1234-5678
                    </a>
                    <p className="text-stone-500 text-sm mt-1">受付時間：平日 11:00 - 21:00 / 土日祝 10:00 - 20:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <i className="fas fa-envelope text-stone-400 mt-1 w-5" aria-hidden="true"></i>
                  <div>
                    <p className="font-bold text-stone-800 mb-1">メールでのお問い合わせ</p>
                    <a href="mailto:info@lumiere-salon.com" className="text-stone-600 hover:text-stone-800 transition-colors">
                      info@lumiere-salon.com
                    </a>
                    <p className="text-stone-500 text-sm mt-1">24時間受付（返信は営業時間内）</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <i className="fas fa-map-marker-alt text-stone-400 mt-1 w-5" aria-hidden="true"></i>
                  <div>
                    <p className="font-bold text-stone-800 mb-1">店舗への直接訪問</p>
                    <p className="text-stone-600">
                      〒150-0001<br/>
                      東京都渋谷区神宮前1-2-3<br/>
                      原宿ビル 2F
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* お問い合わせフォーム */}
          <FadeIn delay={200}>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-stone-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-stone-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-stone-700 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-stone-700 mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="contact-subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                  >
                    <option value="">選択してください</option>
                    <option value="予約について">予約について</option>
                    <option value="メニューについて">メニューについて</option>
                    <option value="料金について">料金について</option>
                    <option value="アクセスについて">アクセスについて</option>
                    <option value="その他">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-stone-700 mb-2">
                    メッセージ <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                    placeholder="ご質問・ご要望などをお書きください"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    <i className="fas fa-check-circle mr-2"></i>
                    お問い合わせありがとうございます。確認のメールをお送りいたします。
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    <i className="fas fa-exclamation-circle mr-2"></i>
                    送信に失敗しました。しばらくしてから再度お試しください。
                  </div>
                )}

                <Button
                  type="submit"
                  primary
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      送信中...
                    </>
                  ) : (
                    '送信する'
                  )}
                </Button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;

