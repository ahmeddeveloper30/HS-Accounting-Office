
import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import { LuCircleCheckBig, LuBuilding2 } from "react-icons/lu";
import manger from "../../../assets/manger.jpg";
const features = [
  "حلول تناسب طبيعة أعمالك",
  "تواصل واضح ومتابعة مستمرة",
  "عناية بالتفاصيل والالتزام بالمواعيد",
];

export const About = () => {
  return (
    <section className="bg-bg-primary py-20 max-md:py-16" id="about">
      <div className="w-full max-w-[1120px] mx-auto px-6 max-md:px-[18px] flex items-start gap-20 max-[900px]:gap-10 max-md:flex-col max-md:gap-9">

        {/* Left: Content */}
        <div className="flex-1 min-w-0">
          <SectionTitle
            label="من نحن"
            title="خبرة محاسبية تُترجم الأرقام إلى قرارات"
            description="نؤمن أن المحاسبة الجيدة تبدأ بالفهم، وتنجح بالدقة والوضوح."
            className="mb-5"
          />

          <p className="text-[15px] leading-[1.9] text-text-body mb-7 max-w-[520px]">
            نعمل إلى جانب عملائنا لفهم احتياجاتهم المالية وتقديم حلول محاسبية
            عملية تتسم بالمهنية والشفافية. هدفنا أن تصبح أرقامك أداة تساعدك
            على النمو، لا عبئًا يستهلك وقتك.
          </p>

          <ul className="flex flex-col gap-[14px]">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-[10px] text-[15px] font-semibold text-text-heading"
              >
                <LuCircleCheckBig className="w-5 h-5 text-brand-red shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Manager Image */}
        <div className="flex-[0_0_420px] max-[900px]:flex-[0_0_340px] max-md:flex-none max-md:w-full">

            

            {/* Manager Image */}
            <div className="w-full overflow-hidden rounded-about-img">
              <img
                src={manger}
                alt="إدارة مكتب الشايب للمحاسبة والمراجعة"
                className="block w-full h-[400px] max-md:h-[350px] max-[430px]:h-[280px] object-cover object-center"
                loading="lazy"
              />
            </div>
        </div>

      </div>
    </section>
  );
};
