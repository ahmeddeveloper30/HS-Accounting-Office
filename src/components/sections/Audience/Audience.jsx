import { useState, useEffect } from 'react';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import { Button } from '../../ui/Button/Button';
import { audienceData } from './audienceData';
import { Building2, User, Rocket, ArrowLeft, X } from 'lucide-react';
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
    className="fixed inset-0 z-[2000] bg-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4"
    onClick={() => setSelectedCard(null)}
    role="dialog"
    aria-modal="true"
  >
    <div
      className="bg-bg-visual rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto px-10 py-9 max-md:px-6 max-md:py-7 shadow-2xl relative animate-in fade-in zoom-in-95 duration-300"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={() => setSelectedCard(null)}
        className="absolute top-5 left-5 w-8 h-8 flex items-center justify-center text-text-muted hover:text-text-heading transition-colors cursor-pointer"
        aria-label="إغلاق النافذة"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Header: no icon box, big title */}
      <div className="mb-6">
        <span className="block text-xs font-[700] text-text-muted mb-2 tracking-wide">
          {selectedCard.audience || 'الفئات المستهدفة'}
        </span>
        <h3 className="text-[28px] max-md:text-2xl font-[800] text-text-heading leading-tight m-0">
          {selectedCard.title}
        </h3>
      </div>

      {/* Tagline: plain text, larger, no box */}
      <p className="text-base leading-[1.9] text-text-body mb-8 max-w-[560px]">
        {selectedCard.tagline}
      </p>

      {/* Numbered list with thin dividers */}
      <div className="mb-8">
        <h4 className="text-[13px] font-[700] text-text-muted mb-1">
          اللي هتتعلمه
        </h4>
        <ol className="list-none p-0 m-0">
          {selectedCard.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-baseline gap-4 py-4 border-b border-border-default/60 last:border-b-0"
            >
              <span className="text-[13px] font-[800] text-brand-red tabular-nums shrink-0 w-6">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="text-[15px] leading-[1.9] text-text-heading">
                {feature}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Highlight: normal sentence, no box, no emoji */}
      {selectedCard.highlight && (
        <p className="text-sm leading-[1.9] text-text-body mb-8">
          <strong className="text-text-heading font-[800]">مناسب لـ </strong>
          {selectedCard.highlight.replace(/^مناسب لـ:?\s*/, '')}
        </p>
      )}

      {/* Actions */}
      <div className="flex items-center gap-5 max-sm:flex-col-reverse max-sm:items-stretch">
        <button
          type="button"
          onClick={() => setSelectedCard(null)}
          className="text-sm font-[700] text-text-muted hover:text-text-heading transition-colors cursor-pointer py-2"
        >
          إغلاق
        </button>
        <Button
          href="#contact"
          variant="primary"
          onClick={handleBooking}
          className="flex-1 max-sm:w-full"
        >
          ابدأ بمكالمة مجانية
        </Button>
      </div>
    </div>
  </div>
)}
    </section>
  );
};
