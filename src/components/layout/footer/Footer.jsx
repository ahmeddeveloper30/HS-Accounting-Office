import { Link } from 'react-router-dom';
import logo from '../../../assets/elshayb-logo.png';
import { FaYoutube, FaFacebook } from 'react-icons/fa';

export const Footer = ({ youtubeUrl = 'https://www.youtube.com/@-HamdyElshayb' }) => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal border-t border-charcoal-soft/60 py-6 transition-colors">
      <div className="w-full max-w-[1120px] mx-auto px-6 max-md:px-[18px] flex items-center justify-between gap-6 max-md:flex-col max-md:text-center max-md:gap-5">
        {/* ─── Right (in RTL): Brand & Logo ─── */}
        <Link
          to="/"
          onClick={handleScrollTop}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <img
            src={logo}
            alt="شعار مكتب الشايب"
            className="w-11 h-11 rounded-logo object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col text-right max-md:text-center">
            <span className="text-[15px] font-[800] text-text-inverse leading-tight transition-colors group-hover:text-brand-red">
              مكتب الشايب
            </span>
            <span className="text-[12px] font-semibold text-text-inverse-detail">
             للمحاسبة والاستشارات
            </span>
          </div>
        </Link>

        {/* ─── Left (in RTL): Copyright & YouTube Channel ─── */}
        <div className="flex items-center gap-4 max-md:flex-col-reverse max-md:gap-3">
          {/* Copyright */}
          <p className="text-[13px] text-text-inverse-detail font-medium">
            © 2026 مكتب الشايب. جميع الحقوق محفوظة.
          </p>

          {/* YouTube Button */}
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="قناة مكتب الشايب على يوتيوب"
            className="w-10 h-10 rounded-[12px] border border-white/15 bg-white/[0.03] flex items-center justify-center text-icon-red-light transition-all duration-300 hover:border-brand-red hover:bg-brand-red/10 hover:text-brand-red hover:scale-105 shadow-sm"
          >
            <FaYoutube className="w-5 h-5" />
          </a>

          {/* Facebook Button */}
          <a
            href="https://www.facebook.com/hamdy.elshayb.9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="صفحة مكتب الشايب على فيسبوك"
            className="w-10 h-10 rounded-[12px] border border-white/15 bg-white/[0.03] flex items-center justify-center text-icon-red-light transition-all duration-300 hover:border-brand-red hover:bg-brand-red/10 hover:text-brand-red hover:scale-105 shadow-sm"
          >
            <FaFacebook className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
