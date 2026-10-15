import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import { LuCircleCheckBig, LuBuilding2 } from 'react-icons/lu';

const features = [
  'حلول تناسب طبيعة أعمالك',
  'تواصل واضح ومتابعة مستمرة',
  'عناية بالتفاصيل والالتزام بالمواعيد',
];

export const About = () => {
  return (
    <section className="bg-bg-primary py-20 max-md:py-16" id="about">
      <div className="w-full max-w-[1120px] mx-auto px-6 max-md:px-[18px] flex items-start gap-20 max-[900px]:gap-10 max-md:flex-col max-md:gap-9">
       
       {/* ─── Left: Content ─── */}
        <div className="flex-1 min-w-0">
          <SectionTitle
            label="من نحن"
            title="خبرة محاسبية تُترجم الأرقام إلى قرارات"
            description="نؤمن أن المحاسبة الجيدة تبدأ بالفهم، وتنجح بالدقة والوضوح."
            className="mb-5"
          />

          <p className="text-[15px] leading-[1.9] text-text-body mb-7 max-w-[520px]">
            نعمل إلى جانب عملائنا لفهم احتياجاتهم المالية وتقديم حلول محاسبية عملية تتسم
            بالمهنية والشفافية. هدفنا أن تصبح أرقامك أداة تساعدك على النمو، لا عبئًا يستهلك
            وقتك.
          </p>

          <ul className="flex flex-col gap-[14px]">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-[10px] text-[15px] font-semibold text-text-heading"
              >
                <LuCircleCheckBig className="w-5 h-5 text-brand-red shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* ─── Right: Image ─── */}
        <div className="flex-[0_0_420px] max-[900px]:flex-[0_0_340px] max-md:flex-none max-md:w-full">
          <div className="bg-bg-visual rounded-about-img p-8 max-[430px]:p-6 min-h-[385px] max-md:min-h-[320px] max-[430px]:min-h-[275px] flex flex-col items-center">
            {/* Icon Box */}
            <div className="w-[52px] h-[52px] bg-brand-red-pale rounded-icon-box flex items-center justify-center mb-6 mt-5">
              <LuBuilding2 className="w-6 h-6 text-brand-red" strokeWidth={2} />
            </div>

            {/* Image Placeholder */}
            <div className="flex-1 flex flex-col items-center justify-center gap-2 text-center">
              <span className="text-lg font-[800] text-text-heading opacity-25">
                [صورة المكتب]
              </span>
              <span className="text-[13px] text-text-muted opacity-60">
                بيئة مهنية تعكس الثقة والوضوح
              </span>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};
