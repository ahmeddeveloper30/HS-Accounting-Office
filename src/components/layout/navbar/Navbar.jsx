import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/elshayb-logo.png';
import { Button } from '../../ui/Button/Button';
import { LuMenu, LuX } from 'react-icons/lu';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'من نحن', href: '/#about' },
    { label: 'خدماتنا', href: '/#services' },
    { label: 'مشاريعنا', href: '/#projects' },
    { label: 'قناتنا', href: '/#channel' },
    { label: 'تواصل معنا', href: '/#contact' },
  ];

  const handleLogoClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-[1000] bg-charcoal h-[78px] max-md:h-[70px] flex items-center border-b border-charcoal-soft/40">
      <div className="w-full max-w-[1120px] mx-auto px-6 max-md:px-[18px] flex items-center justify-between gap-6">
        {/* ─── Logo (Links to Home / Main Page + Scrolls to Top) ─── */}
        <Link
          to="/"
          className="flex items-center gap-[10px] shrink-0 group transition-opacity hover:opacity-95 cursor-pointer"
          onClick={handleLogoClick}
        >
          <img
            src={logo}
            alt="شعار مكتب الشايب"
            className="w-11 h-11 rounded-logo object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div>
            <h1 className="text-sm font-semibold text-text-inverse-nav m-0 leading-[1.4] whitespace-nowrap transition-colors duration-300 group-hover:text-text-inverse">
           مكتب د/حمدى الشايب
          </h1>
          <div>
            <p className="text-[11px] font-semibold text-text-inverse-detail">
              للمحاسبة والاستشارات الضريبية
            </p>
          </div>
          </div>
        </Link>

        {/* ─── Desktop Nav ─── */}
        <nav
          className={`flex items-center max-md:fixed max-md:top-[70px] max-md:inset-x-0 max-md:bottom-0 max-md:bg-charcoal max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-8 max-md:transition-all max-md:duration-300 ${
            menuOpen
              ? 'max-md:opacity-100 max-md:visible'
              : 'max-md:opacity-0 max-md:invisible'
          }`}
        >
          <ul className="flex items-center gap-9 max-md:flex-col max-md:gap-7 p-0 m-0">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="relative text-sm font-semibold text-text-inverse-nav pb-1 transition-colors duration-300 hover:text-text-inverse after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px] after:bg-brand-red after:rounded-sm after:transition-all after:duration-300 hover:after:w-full max-md:text-lg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* CTA inside mobile menu */}
          <div className="hidden max-md:block">
            <Button variant="primary" href="/#contact" onClick={() => setMenuOpen(false)}>
              احجز استشارة
            </Button>
          </div>
        </nav>

        {/* ─── CTA Button (Desktop) ─── */}
        <div className="shrink-0 max-md:hidden">
          <Button variant="primary" href="/#contact">
            احجز استشارة
          </Button>
        </div>

        {/* ─── Mobile Toggle ─── */}
        <button
          className="hidden max-md:flex items-center justify-center w-10 h-10 text-text-inverse text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
        >
          {menuOpen ? <LuX /> : <LuMenu />}
        </button>
      </div>
    </header>
  );
};
