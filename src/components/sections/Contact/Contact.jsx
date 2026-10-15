import { useState } from 'react';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import { MapPin, Clock, Phone, Send, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;

    setIsSubmitting(true);
    // Simulate submission until backend is ready
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', contact: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section className="bg-bg-primary py-20 max-md:py-16" id="contact">
      <div className="w-full max-w-[1120px] mx-auto px-6 max-md:px-[18px]">
        {/* ─── Section Header ─── */}
        <div className="text-center flex flex-col items-center mb-11 max-md:mb-8">
          <SectionTitle
            label="تواصل معنا"
            title="لنبدأ بخطوة واضحة"
            description="شاركنا احتياجك، وسنتواصل معك لمناقشة الحل الأنسب."
            className="flex flex-col items-center text-center"
          />
        </div>

        {/* ─── Two Columns Grid ─── */}
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          {/* ─── Column 1: Consultation Form (Right in RTL) ─── */}
          <div className="bg-bg-primary rounded-card border border-border-default p-[34px] max-md:p-[25px_20px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]">
            <h3 className="text-[21px] font-[800] text-text-heading mb-1">
              احجز استشارتك
            </h3>
            <p className="text-[13px] text-text-muted mb-6">
              املأ النموذج وسنعاود التواصل معك.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-btn bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2.5 text-sm animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>تم إرسال طلبك بنجاح! سنتواصل معك في أقرب وقت.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Field: Name */}
              <div>
                <label className="text-xs font-[800] text-text-heading mb-2 block">
                  الاسم
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="اكتب اسمك"
                  className="w-full min-h-[48px] px-[14px] py-[11px] rounded-[9px] bg-input-bg border border-input-border text-[13px] font-cairo text-text-heading placeholder:text-text-muted/60 focus:border-brand-red focus:ring-[3px] focus:ring-brand-red/10 transition-all outline-none"
                />
              </div>

              {/* Field: Phone or Email */}
              <div>
                <label className="text-xs font-[800] text-text-heading mb-2 block">
                  رقم الهاتف أو البريد الإلكتروني
                </label>
                <input
                  type="text"
                  required
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                  placeholder="اكتب وسيلة التواصل المناسبة"
                  className="w-full min-h-[48px] px-[14px] py-[11px] rounded-[9px] bg-input-bg border border-input-border text-[13px] font-cairo text-text-heading placeholder:text-text-muted/60 focus:border-brand-red focus:ring-[3px] focus:ring-brand-red/10 transition-all outline-none"
                />
              </div>

              {/* Field: Message */}
              <div>
                <label className="text-xs font-[800] text-text-heading mb-2 block">
                  كيف يمكننا مساعدتك؟
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full min-h-[112px] px-[14px] py-[11px] rounded-[9px] bg-input-bg border border-input-border text-[13px] font-cairo text-text-heading placeholder:text-text-muted/60 focus:border-brand-red focus:ring-[3px] focus:ring-brand-red/10 transition-all outline-none resize-y"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[48px] mt-2 px-6 py-[10px] rounded-btn font-cairo text-sm font-[800] leading-none text-text-inverse bg-btn-primary hover:bg-btn-primary-hover active:scale-[0.99] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>جاري الإرسال...</span>
                ) : (
                  <>
                    <span>إرسال</span>
                    <Send className="w-4 h-4 rotate-180" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* ─── Column 2: Office Info & Map (Left in RTL) ─── */}
          <div className="bg-bg-primary rounded-card border border-border-default p-6 flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]">
            <div>
              {/* Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 bg-brand-red-pale rounded-icon-box flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-red" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-[800] text-text-heading leading-tight mb-1">
                    نحن قريبون منك
                  </h3>
                  <p className="text-xs text-text-muted">
                    يسعدنا استقبال استفسارك والتعرف على احتياجك.
                  </p>
                </div>
              </div>

              {/* Contact Info Pills */}
              <div className="grid grid-cols-3 gap-2.5 pb-6 text-center border-b border-border-default/70 mb-6">
                {/* Phone */}
                <div className="flex flex-col items-center p-2 rounded-lg bg-bg-secondary">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-brand-red mb-1">
                    <Phone className="w-3.5 h-3.5" />
                    <span>الهاتف</span>
                  </div>
                  <span className="text-xs font-semibold text-text-heading" dir="ltr">
                    +20 100 000 0000
                  </span>
                </div>

                {/* Working Hours */}
                <div className="flex flex-col items-center p-2 rounded-lg bg-bg-secondary">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-brand-red mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>ساعات العمل</span>
                  </div>
                  <span className="text-xs font-semibold text-text-heading">
                    الأحد - الخميس (٩ - ٥)
                  </span>
                </div>

                {/* Address */}
                <div className="flex flex-col items-center p-2 rounded-lg bg-bg-secondary">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-brand-red mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>العنوان</span>
                  </div>
                  <span className="text-xs font-semibold text-text-heading">
                    القاهرة، مصر
                  </span>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="relative w-full h-[220px] rounded-map overflow-hidden bg-bg-visual border border-border-default flex items-center justify-center group">
              {/* Map Graphic Lines (Matching Mockup) */}
              <svg
                className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
                viewBox="0 0 400 220"
                preserveAspectRatio="none"
              >
                {/* Road curves */}
                <path
                  d="M -20,120 Q 120,150 200,130 T 420,140"
                  fill="none"
                  stroke="#202223"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
                <path
                  d="M 60,-20 Q 80,110 200,130 T 320,240"
                  fill="none"
                  stroke="#202223"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
                <path
                  d="M 360,-20 Q 300,100 200,130 T 100,240"
                  fill="none"
                  stroke="#202223"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                {/* Accent red path */}
                <path
                  d="M -20,120 Q 120,150 200,130"
                  fill="none"
                  stroke="#D43C35"
                  strokeWidth="3"
                />
              </svg>

              {/* Pin with Badge */}
              <div className="relative z-10 flex flex-col items-center cursor-pointer transition-transform duration-300 group-hover:scale-110">
                <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg shadow-brand-red/40 animate-bounce">
                  <MapPin className="w-5 h-5 fill-white" />
                </div>
                <div className="mt-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-border-default shadow-sm text-[11px] font-bold text-text-heading">
                  [موقع المكتب على الخريطة]
                </div>
              </div>

              {/* Google Maps Link Overlay on Hover */}
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20 flex items-center justify-center bg-charcoal/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-bold gap-1.5 backdrop-blur-[1px]"
              >
                <span>فتح في خرائط Google</span>
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
