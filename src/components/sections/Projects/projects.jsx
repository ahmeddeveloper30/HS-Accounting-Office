import React, { useEffect, useRef, useState } from "react";

/* =====================================================================
   ملاحظات قبل النشر (مهم لمصداقية المكتب):
   1) اللوجو: ما تحطّش لوجو أي شركة غير بعد التأكد من العلاقة وإذن النشر.
      لحد ما ده يحصل سيب logo فاضي وهتظهر أيقونة مبنى.
   2) result: ما تكتبش نتيجة غير لو موثقة بمستندات. لو مفيش، سيبها null.
   3) دراسة الحالة الضريبية: متنسبهاش لشركة بعينها غير بعد مراجعة المستندات.
   4) الأوصاف تحت وصف عام للخدمة، عدّلها لوصف الخدمة الفعلية.
   ===================================================================== */

const CASE_STUDY = {
  title: "دراسة حالة ضريبية",
  description:
    "مطالبة ضريبية أصلية تمت مراجعتها وتسويتها لتنتهي بمبلغ نهائي معتمد.",
  before: 1000000, // المطالبة الأصلية
  after: 7000, // المبلغ النهائي المعتمد
  currency: "جنيه",
  // ضع true فقط عند توافر المستندات التي تثبت الرقمين
  documented: true,
};

const CLIENTS = [
  {
    id: "taqwa",
    name: "الشركة العربية الدولية لصناعة الدهانات",
    service: "خدمات محاسبية وضريبية",
    description:
      "تنظيم الدورة المحاسبية ومتابعة الالتزامات الضريبية للشركة بصورة دورية.",
    result: null,
  },
  {
    id: "alforsan",
    name: "شركة الفرسان",
    service: "مراجعة وإعداد تقارير مالية",
    description:
      "مراجعة الإجراءات المالية وإعداد تقارير مبسطة تدعم قرارات الإدارة.",
    result: null,
  },
  {
    id: "alettehada",
    name: "الشركة المتحدة",
    service: "مراجعة وتسوية ضريبية",
    description:
      "متابعة حالة المراجعة والتسوية الفعلية مع الحفاظ على سرية بيانات العميل.",
    result: null,
  },
];

const fmt = (n) => n.toLocaleString("en-US");

/* بيرجع seen=true أول ما العنصر يظهر في الشاشة (مرة واحدة بس) */
function useInView(threshold = 0.35) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, seen];
}

/* عدّاد بيطلع من 0 لحد target بعد ما active تبقى true */
function useCountUp(target, active, { duration = 1800, delay = 0 } = {}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    let raf;
    let start;
    const timer = setTimeout(() => {
      const tick = (now) => {
        if (start === undefined) start = now;
        const p = Math.min((now - start) / duration, 1);
        setValue(target * (1 - Math.pow(1 - p, 3))); 
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [active, target, duration, delay]);

  return value;
}

function CaseStudy({ before, after, currency, title, description, documented }) {
  const [ref, seen] = useInView();

  const reduction = ((before - after) / before) * 100;
  const afterWidth = Math.max((after / before) * 100, 1.5);

  const beforeNum = useCountUp(before, seen, { duration: 1800 });
  const afterNum = useCountUp(after, seen, { duration: 1400, delay: 500 });
  const pctNum = useCountUp(reduction, seen, { duration: 2000, delay: 500 });

  return (
    <article
      className="grid grid-cols-[1fr_1.2fr] max-[900px]:grid-cols-1 gap-10 max-[900px]:gap-7 items-center bg-charcoal border border-red-500/15 border-t-[3px] border-t-[#ecd28f] rounded-[18px] p-9 max-[900px]:p-7 max-[900px]:px-6 mb-6"
      ref={ref}
    >
      <div>
        <span className="inline-block bg-[rgba(212,169,79,0.14)] text-brand-red text-xs font-[800] px-3 py-1 rounded-full mb-3">
          {title}
        </span>
        <h3 className="my-3.5 mb-2.5 text-[clamp(22px,2.6vw,28px)] font-[800] leading-[1.5] text-text-inverse">
          من {fmt(before)} إلى {fmt(after)} {currency}
        </h3>
        <p className="m-0 text-[#aebbd0] text-sm leading-[1.9]">{description}</p>
        {!documented && (
          <small className="block mt-2.5 text-brand-red text-xs">
            * بانتظار توثيق المستندات
          </small>
        )}
      </div>

      <div
        className="flex flex-col gap-[18px]"
        aria-label="مقارنة المبلغ قبل التسوية وبعدها"
      >
        <div>
          <div className="flex justify-between gap-3 mb-2 text-[13px] text-[#aebbd0]">
            <span>قبل التسوية</span>
            <strong className="text-text-inverse text-[15px] font-[700] tabular-nums">
              {fmt(Math.round(beforeNum))} {currency}
            </strong>
          </div>
          <div className="h-3.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-brand-red transition-all duration-[1800ms] ease-[cubic-bezier(0.22,0.8,0.2,1)] motion-reduce:transition-none"
              style={{ width: seen ? "100%" : "0%" }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between gap-3 mb-2 text-[13px] text-[#aebbd0]">
            <span>بعد التسوية</span>
            <strong className="text-text-inverse text-[15px] font-[700] tabular-nums">
              {fmt(Math.round(afterNum))} {currency}
            </strong>
          </div>
          <div className="h-3.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-brand-red transition-all duration-[1800ms] delay-[1500ms] ease-[cubic-bezier(0.22,0.8,0.2,1)] motion-reduce:transition-none"
              style={{ width: seen ? `${afterWidth}%` : "0%" }}
            />
          </div>
        </div>

        <div className="flex items-baseline gap-3 mt-1 pt-[18px] border-t border-dashed border-red-500/15">
          <b className="text-[40px] max-[600px]:text-[34px] font-[800] text-brand-red leading-none tabular-nums">
            {pctNum.toFixed(2)}%
          </b>
          <span className="text-[#aebbd0] text-[13px]">نسبة الخفض</span>
        </div>
      </div>
    </article>
  );
}

function BuildingIcon() {
  return (
    <svg
      aria-hidden="true"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 21h16M6 21V5l6-2 6 2v16M9 9h1M14 9h1M9 13h1M14 13h1M10 21v-4h4v4" />
    </svg>
  );
}

function ClientCard({ name, service, description, logo, result }) {
  return (
    <article className="bg-charcoal border border-red-500/15 rounded-card p-[26px] flex flex-col gap-2.5 transition-colors duration-200 hover:border-brand-red motion-reduce:transition-none">
      <div className="flex items-center justify-between gap-3 mb-1.5">
        <span className="w-[54px] h-[54px] rounded-logo bg-white grid place-items-center overflow-hidden shrink-0 text-brand-red text-[22px] font-[800]">
          {logo ? (
            <img
              src={logo}
              alt={`شعار ${name}`}
              loading="lazy"
              className="w-full h-full object-contain p-1.5"
            />
          ) : (
            <BuildingIcon />
          )}
        </span>
        <span className="text-brand-red text-xs font-[800]">{service}</span>
      </div>

      <h3 className="m-0 text-lg font-[800] text-text-inverse">{name}</h3>
      <p className="m-0 text-[#aebbd0] text-[13px] leading-[1.9]">{description}</p>

      {result && (
        <div className="mt-auto pt-3.5 border-t border-dashed border-red-500/15 flex flex-col gap-1">
          <span className="text-[#aebbd0] text-xs">النتيجة الموثقة</span>
          <strong className="text-brand-red text-base font-[700]">{result}</strong>
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section
      className="bg-charcoal pt-[76px] pb-[84px] max-[600px]:pt-[52px] max-[600px]:pb-[56px] text-text-inverse"
      id="projects"
    >
      <div className="w-[min(1120px,100%-40px)] mx-auto">
        <header className="text-center mb-11">
          <span className="inline-flex items-center gap-2.5 text-brand-red text-xs font-[800] after:content-[''] after:w-[26px] after:h-[1.5px] after:bg-[#ecd28f]">
            مشاريعنا
          </span>
          <h2 className="my-3 mb-2 text-[clamp(26px,3.2vw,34px)] font-[800] text-text-inverse">
            أعمال نفخر بها
          </h2>
          <p className="m-0 text-[#aebbd0] text-sm">
            نماذج من حلول محاسبية صُممت بعناية لتصنع فرقًا واضحًا.
          </p>
        </header>

        <CaseStudy {...CASE_STUDY} />

        <div className="grid grid-cols-3 max-[900px]:grid-cols-1 gap-6">
          {CLIENTS.map((c) => (
            <ClientCard key={c.id} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Projects };
