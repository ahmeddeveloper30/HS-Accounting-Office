import { useState } from "react";

const CHANNEL_URL = "https://www.youtube.com/@-HamdyElshayb";

/* الفيديو المختار — videoId هو الجزء اللي بعد v= في رابط يوتيوب */
const FEATURED = {
  videoId: "bivlSmABjz0",
  title: "التعريف بخدمات مكتب د/ حمدى الشايب للمحاسبه والمراجعة",
};

function YoutubeIcon({ size = 20, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 12s0-4-1-6c-.6-1.1-1.5-1.3-2.5-1.4C16.5 4.3 12 4.3 12 4.3s-4.5 0-6.5.3C4.5 4.7 3.6 4.9 3 6c-1 2-1 6-1 6s0 4 1 6c.6 1.1 1.5 1.3 2.5 1.4 2 .3 6.5.3 6.5.3s4.5 0 6.5-.3c1-.1 1.9-.3 2.5-1.4 1-2 1-6 1-6Z" />
      <path d="m10 9 5 3-5 3V9Z" />
    </svg>
  );
}

/* مشغّل خفيف: بيعرض الصورة المصغرة، والفيديو بيتحمّل لما المستخدم يدوس */
function LiteVideo({ videoId, title }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video bg-black">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 w-full h-full border-0"
        />
      ) : (
        <button
          type="button"
          className="absolute inset-0 w-full h-full p-0 bg-transparent cursor-pointer group focus-visible:outline-3 focus-visible:outline-brand-red focus-visible:outline-offset-3"
          onClick={() => setPlaying(true)}
          aria-label={`تشغيل الفيديو: ${title}`}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover block"
          />
          <span
            className="absolute inset-0 m-auto w-16 h-[46px] rounded-[14px] bg-[#e62117] text-white grid place-items-center shadow-[0_6px_18px_rgba(0,0,0,0.35)] transition-transform duration-200 group-hover:scale-110"
            aria-hidden="true"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

export default function OurChannel() {
  return (
    <section className="bg-bg-secondary py-[72px] max-[860px]:py-[52px] scroll-mt-20" id="channel">
      <span id="OurChannel" className="sr-only" />
      <div className="w-[min(1120px,100%-40px)] mx-auto grid grid-cols-[1fr_1.12fr] max-[860px]:grid-cols-1 gap-14 max-[860px]:gap-8 items-center">
        {/* النص (على اليمين في RTL) */}
        <div className="flex flex-col items-start gap-[18px]">
          <span className="w-12 h-12 rounded-[12px] bg-brand-red-pale text-btn-primary grid place-items-center">
            <YoutubeIcon size={26} />
          </span>

          <header className="flex flex-col gap-2.5">
            <span className="inline-flex items-center gap-2.5 text-brand-red-dark text-xs font-[800] after:content-[''] after:w-[26px] after:h-[1.5px] after:bg-brand-red-dark">
              قناتنا على يوتيوب
            </span>
            <h2 className="m-0 text-[clamp(26px,3.2vw,34px)] font-[800] text-text-heading">
              معلومة محاسبية أوضح
            </h2>
            <p className="m-0 text-text-muted text-sm leading-[1.9]">
              تابع محتوى د/ حمدى الشايب حول المحاسبة والضرائب، بشرح عملي ومباشر.
            </p>
          </header>

          <p className="m-0 text-text-muted text-sm leading-[1.9] max-w-[440px]">
            شاهد الفيديو المختار، واشترك في القناة ليصلك كل جديد يساعدك على فهم
            أعمالك والتزاماتك المالية بصورة أفضل.
          </p>

          <a
            className="inline-flex items-center gap-2 bg-btn-primary hover:bg-btn-primary-hover text-white font-[700] text-sm px-6 py-3 rounded-btn transition-colors duration-200 focus-visible:outline-3 focus-visible:outline-brand-red focus-visible:outline-offset-3 cursor-pointer"
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeIcon size={18} />
            زيارة القناة
          </a>
        </div>

        {/* الفيديو (على الشمال) */}
        <div className="bg-bg-primary border border-border-default rounded-card overflow-hidden max-[860px]:order-2 shadow-sm">
          <LiteVideo videoId={FEATURED.videoId} title={FEATURED.title} />
          <div className="p-[16px_22px_20px] flex flex-col gap-1.5">
            <span className="text-brand-red-dark text-[11px] font-[800]">
              فيديو مختار
            </span>
            <h3 className="m-0 text-base font-[800] text-text-heading">
              {FEATURED.title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export { OurChannel };