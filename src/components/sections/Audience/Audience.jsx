import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import { audienceData } from '../../../data/audience';
import { Building2, User, Rocket, ArrowLeft } from 'lucide-react';

const iconMap = {
  building: Building2,
  user: User,
  rocket: Rocket,
};

export const Audience = () => {
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
                className="bg-bg-primary rounded-card border border-border-default p-7 max-md:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.06)] hover:border-brand-red/30 group"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-[52px] h-[52px] bg-brand-red-pale rounded-icon-box flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="w-6 h-6 text-brand-red" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[19px] font-[800] text-text-heading mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] leading-[1.85] text-text-body mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Link */}
                <a
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm font-[800] text-brand-red hover:text-brand-red-dark transition-colors self-start"
                >
                  <span>{item.linkText}</span>
                  <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
