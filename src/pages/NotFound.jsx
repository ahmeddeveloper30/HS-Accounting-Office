import { Button } from '../components/ui/Button/Button';
import notFoundImg from '../assets/not-found-dashboard.svg';
import { Compass, HelpCircle } from 'lucide-react';

export const NotFound = () => {
  return (
    <main className="bg-charcoal min-h-[calc(100vh-78px)] flex items-center justify-center overflow-hidden py-12 max-md:py-10">
      <div className="w-full max-w-[1120px] mx-auto px-6 max-md:px-[18px] flex items-center gap-[60px] max-md:flex-col-reverse max-md:text-center max-md:gap-10">
        {/* ─── Right: Content (RTL) ─── */}
        <div className="flex-1 min-w-0 max-md:flex max-md:flex-col max-md:items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red-pale/15 border border-brand-red/30 mb-5">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span className="text-xs font-bold text-icon-red-light tracking-wide">
              خطأ 404 • الصفحة مفقودة
            </span>
          </div>

          <h1 className="text-[clamp(34px,4vw,52px)] max-md:text-[30px] max-[430px]:text-[26px] font-[800] leading-[1.3] text-text-inverse mb-4">
            عذرًا، الصفحة التي
            <br />
            تبحث عنها غير متاحة
          </h1>

          <p className="text-[16px] max-md:text-[14.5px] leading-[1.9] text-text-inverse-secondary max-w-[480px] max-md:max-w-full mb-8">
            يبدو أن الرابط غير صحيح، أو أن الصفحة تم نقلها أو حذفها أثناء تدقيق وتنظيم
            سجلاتنا المالية. لا تقلق، يمكنك العودة سريعًا ومتابعة أعمالك معنا.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mb-8 max-md:justify-center max-md:flex-wrap max-[430px]:flex-col max-[430px]:w-full">
            <Button to="/" variant="primary" icon>
              العودة للرئيسية
            </Button>
            
          </div>

          {/* Helpful Tips */}
          <div className="flex items-center gap-4 text-xs text-text-inverse-detail border-t border-charcoal-soft/80 pt-5 max-md:justify-center max-md:flex-wrap">
            <div className="flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-icon-red-light" />
              <span>تأكد من صحة الرابط المكتوب</span>
            </div>
            <span className="opacity-30">|</span>
            <div className="flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-icon-red-light" />
              <span>تصفح خدماتنا المحاسبية</span>
            </div>
          </div>
        </div>

        {/* ─── Left: Illustration ─── */}
        <div className="flex-[0_0_460px] max-[960px]:flex-[0_0_360px] max-md:flex-none max-md:w-full max-md:max-w-[360px] flex items-center justify-center">
          <div className="relative w-full">
            <img
              src={notFoundImg}
              alt="رسم توضيحي لخطأ 404 — لوحة تحكم مفقودة"
              className="w-full h-auto drop-shadow-2xl animate-hero-float"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
