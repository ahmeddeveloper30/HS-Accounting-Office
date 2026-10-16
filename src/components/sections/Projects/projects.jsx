import "./Projects.css";
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
  before: 7000000, // المطالبة الأصلية
  after: 80000, // المبلغ النهائي المعتمد
  currency: "جنيه",
  // ضع true فقط عند توافر المستندات التي تثبت الرقمين
  documented: true,
};

const CLIENTS = [
  {
    id: "taqwa",
    name: "شركة التقوى للستانلس ستيل",
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
        setValue(target * (1 - Math.pow(1 - p, 3))); // بتبطّأ في الآخر
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
    <article className="pj-case" ref={ref}>
      <div className="pj-case__copy">
        <span className="pj-tag">{title}</span>
        <h3>من {fmt(before)} إلى {fmt(after)} {currency}</h3>
        <p>{description}</p>
        {!documented && (
          <small className="pj-case__note">* بانتظار توثيق المستندات</small>
        )}
      </div>

      <div className="pj-case__chart" aria-label="مقارنة المبلغ قبل التسوية وبعدها">
        <div className="pj-bar">
          <div className="pj-bar__row">
            <span>قبل التسوية</span>
            <strong>{fmt(Math.round(beforeNum))} {currency}</strong>
          </div>
          <div className="pj-bar__track">
            <div
              className="pj-bar__fill pj-bar__fill--before"
              style={{ width: seen ? "100%" : "0%" }}
            />
          </div>
        </div>

        <div className="pj-bar">
          <div className="pj-bar__row">
            <span>بعد التسوية</span>
            <strong>{fmt(Math.round(afterNum))} {currency}</strong>
          </div>
          <div className="pj-bar__track">
            <div
              className="pj-bar__fill pj-bar__fill--after"
              style={{ width: seen ? `${afterWidth}%` : "0%" }}
            />
          </div>
        </div>

        <div className="pj-case__pct">
          <b>{pctNum.toFixed(2)}%</b>
          <span>نسبة الخفض</span>
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
    <article className="pj-card">
      <div className="pj-card__top">
        <span className="pj-logo">
          {logo ? (
            <img src={logo} alt={`شعار ${name}`} loading="lazy" />
          ) : (
            <BuildingIcon />
          )}
        </span>
        <span className="pj-service">{service}</span>
      </div>

      <h3>{name}</h3>
      <p>{description}</p>

      {result && (
        <div className="pj-result">
          <span>النتيجة الموثقة</span>
          <strong>{result}</strong>
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section className="pj-section" id="projects">
      <div className="pj-container">
        <header className="pj-head">
          <span className="pj-eyebrow">مشاريعنا</span>
          <h2>أعمال نفخر بها</h2>
          <p>نماذج من حلول محاسبية صُممت بعناية لتصنع فرقًا واضحًا.</p>
        </header>

        <CaseStudy {...CASE_STUDY} />

        <div className="pj-grid">
          {CLIENTS.map((c) => (
            <ClientCard key={c.id} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Projects };
