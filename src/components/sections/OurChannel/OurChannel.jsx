import { useState } from "react";
import "./OurChannel.css";

const CHANNEL_URL = "https://www.youtube.com/@-HamdyElshayb";

/* الفيديو المختار — videoId هو الجزء اللي بعد v= في رابط يوتيوب */
const FEATURED = {
  videoId: "bivlSmABjz0",
  title: "التعريف بخدمات مكتب د/ حمدى الشايب للمحاسبه والمراجعة",
};

function YoutubeIcon({ size = 20 }) {
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
    <div className="yt-frame">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          className="yt-poster"
          onClick={() => setPlaying(true)}
          aria-label={`تشغيل الفيديو: ${title}`}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            loading="lazy"
          />
          <span className="yt-play" aria-hidden="true">
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
    <section className="yt-section" id="youtube">
      <div className="yt-container">
        {/* النص (على اليمين في RTL) */}
        <div className="yt-copy">
          <span className="yt-icon">
            <YoutubeIcon size={26} />
          </span>

          <header className="yt-head">
            <span className="yt-eyebrow">قناتنا على يوتيوب</span>
            <h2>معلومة محاسبية أوضح</h2>
            <p>
              تابع محتوى د/ حمدى الشايب حول المحاسبة والضرائب، بشرح عملي ومباشر.
            </p>
          </header>

          <p className="yt-text">
            شاهد الفيديو المختار، واشترك في القناة ليصلك كل جديد يساعدك على فهم
            أعمالك والتزاماتك المالية بصورة أفضل.
          </p>

          <a
            className="yt-button"
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeIcon size={18} />
            زيارة القناة
          </a>
        </div>

        {/* الفيديو (على الشمال) */}
        <div className="yt-card">
          <LiteVideo videoId={FEATURED.videoId} title={FEATURED.title} />
          <div className="yt-meta">
            <span>فيديو مختار</span>
            <h3>{FEATURED.title}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
export { OurChannel };