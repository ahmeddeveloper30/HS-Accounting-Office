import { Button } from '../../ui/Button/Button';
import { LuCircleCheckBig } from 'react-icons/lu';
import heroImg from '../../../assets/hero-dashboard.png';

export const Hero = () => {
  return (
    <section className="bg-charcoal min-h-[620px] max-md:min-h-0 flex items-center overflow-hidden max-md:py-[60px_0_50px]">
      <div className="w-full max-w-[1120px] mx-auto px-6 max-md:px-[18px] flex items-center gap-[60px] py-10 max-md:flex-col-reverse max-md:text-center max-md:gap-10">
        {/* ─── left: Content ─── */}
        <div className="flex-1 min-w-0 max-md:flex max-md:flex-col max-md:items-center">
          <h1 className="text-[clamp(38px,4.25vw,60px)] max-md:text-[34px] max-[430px]:text-[30px] font-[800] leading-[1.3] text-text-inverse mb-5">
            حساباتك في أيدٍ
            <br />
            أمينة، وقرارك المالي
            <br />
            أوضح
          </h1>

          <p className="text-[17px] max-md:text-[15px] leading-[1.9] text-text-inverse-secondary max-w-[480px] max-md:max-w-full mb-8">
            نقدّم حلولًا محاسبية واستشارات مالية دقيقة تساعدك على فهم أرقامك، تنظيم
            أعمالك، والتخطيط بثقة للخطوات القادمة.
          </p>

          <div className="flex items-center gap-4 mb-7 max-md:justify-center max-md:flex-wrap max-[430px]:flex-col max-[430px]:w-full">
            <Button href="#contact" variant="primary">
              احجز استشارة
            </Button>
            <Button href="#services" variant="secondary" icon>
              شاهد خدماتنا
            </Button>
          </div>

          <div className="flex items-center gap-3 max-md:justify-center">
            <div className="flex items-center gap-[6px] text-[13px] text-text-inverse-detail">
              <LuCircleCheckBig className="w-4 h-4 text-icon-red-light shrink-0" />
              <span>وضوح في الإنجازات</span>
            </div>
            <span className="text-text-inverse-detail opacity-40 text-sm">|</span>
            <div className="flex items-center gap-[6px] text-[13px] text-text-inverse-detail">
              <LuCircleCheckBig className="w-4 h-4 text-icon-red-light shrink-0" />
              <span>اهتمام بكل تفصيل</span>
            </div>
          </div>
        </div>

        {/* ─── right: Illustration ─── */}
        <div className="flex-[0_0_420px] max-[900px]:flex-[0_0_320px] max-md:flex-none max-md:w-full max-md:max-w-[300px] flex items-center justify-center">
          <img
            src={heroImg}
            alt="لوحة تحكم محاسبية — رسم بياني"
            className="w-full max-w-[420px] max-[900px]:max-w-[320px] max-md:max-w-full h-auto rounded-card animate-hero-float"
          />
        </div>
      </div>
    </section>
  );
};
