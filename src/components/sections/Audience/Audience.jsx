import { useState, useEffect } from 'react';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import { Button } from '../../ui/Button/Button';
import { audienceData } from './audienceData';
import { Building2, User, Rocket, ArrowLeft, X, CheckCircle2 } from 'lucide-react';

const iconMap = {
  building: Building2,
  user: User,
  rocket: Rocket,
};

export const Audience = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleBooking = () => {
    setSelectedCard(null);
    document.body.style.overflow = 'unset';
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close modal on Escape key press & prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCard(null);
      }
    };

    if (selectedCard) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCard]);

  const ActiveIcon = selectedCard ? iconMap[selectedCard.icon] || Building2 : null;

  return (
    <section className="bg-bg-secondary py-20 max-md:py-16" id="services">
      <div className="w-full max-w-[1120px] mx-auto px-6 max-md:px-[18px]">
        {/* ─── Section Header (Centered) ─── */}
        <div className="text-center flex flex-col items-center mb-11 max-md:mb-8">
          <SectionTitle
            label="الفئات المستهدفة"
            title="خدمات تناسب احتياجك"
            description="حلول مالية مرنة ومصممة لتناسب مختلف مراحل العمل والحياة"
            className="flex flex-col items-center text-center"
          />
        </div>

        {/* ─── Cards Grid ─── */}
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-[22px]">
          {audienceData.map((item) => {
            const Icon = iconMap[item.icon] || Building2;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedCard(item)}
                className="bg-bg-primary rounded-card border border-border-default p-7 max-md:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.08)] hover:border-brand-red/40 group cursor-pointer"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-[52px] h-[52px] bg-brand-red-pale rounded-icon-box flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="w-6 h-6 text-brand-red" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[19px] font-[800] text-text-heading mb-3 transition-colors group-hover:text-brand-red">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] leading-[1.85] text-text-body mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Link / Button */}
                <div className="inline-flex items-center gap-2 text-sm font-[800] text-brand-red hover:text-brand-red-dark transition-colors self-start">
                  <span>{item.linkText}</span>
                  <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── Expanded Pop-up / Modal ─── */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-[2000] bg-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300"
          onClick={() => setSelectedCard(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-bg-primary rounded-card border border-border-default max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 max-md:p-6 shadow-2xl relative transition-all duration-300 animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button "X" */}
            <button
              type="button"
              onClick={() => setSelectedCard(null)}
              className="absolute top-5 left-5 w-9 h-9 rounded-full bg-bg-secondary text-text-heading hover:bg-brand-red hover:text-white transition-colors duration-200 flex items-center justify-center cursor-pointer shadow-sm group"
              aria-label="إغلاق النافذة"
            >
              <X className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 bg-brand-red-pale rounded-icon-box flex items-center justify-center shrink-0">
                {ActiveIcon && <ActiveIcon className="w-7 h-7 text-brand-red" strokeWidth={2} />}
              </div>
              <div>
                <span className="inline-block text-xs font-[800] text-brand-red mb-1">
                  الفئات المستهدفة • تفاصيل الخدمة
                </span>
                <h3 className="text-2xl font-[800] text-text-heading m-0">
                  {selectedCard.title}
                </h3>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-sm font-semibold text-text-body mb-5 leading-relaxed bg-bg-secondary/60 p-3.5 rounded-lg border-r-4 border-brand-red">
              {selectedCard.tagline}
            </p>

            {/* Detailed Services Checklist */}
            <div className="mb-6">
              <h4 className="text-sm font-[800] text-text-heading mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red" />
                <span>ماذا نقدّم لك في هذه الفئة بالتفصيل؟</span>
              </h4>
              <div className="space-y-2.5">
                {selectedCard.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-bg-secondary/50 border border-border-default/50 transition-colors hover:bg-bg-secondary"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <span className="text-[13px] leading-[1.8] text-text-body">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Highlight */}
            {selectedCard.highlight && (
              <div className="mb-6 p-3.5 rounded-lg bg-brand-red-pale/50 border border-brand-red/20 text-xs font-bold text-brand-red-dark flex items-center gap-2">
                <span>💡</span>
                <span>{selectedCard.highlight}</span>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex items-center gap-3 pt-5 border-t border-border-default/70 max-sm:flex-col">
              <Button
                href="#contact"
                variant="primary"
                onClick={handleBooking}
                className="flex-1 max-sm:w-full"
              >
                احجز استشارة لهذه الفئة
              </Button>
              <button
                type="button"
                onClick={() => setSelectedCard(null)}
                className="px-6 py-[11px] rounded-btn border border-border-default text-sm font-[800] text-text-muted hover:text-text-heading hover:bg-bg-secondary transition-colors cursor-pointer max-sm:w-full"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
