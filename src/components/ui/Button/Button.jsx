import { Link } from 'react-router-dom';
import { LuArrowLeft } from 'react-icons/lu';

export const Button = ({
  children,
  variant = 'primary',
  icon = false,
  href,
  to,
  onClick,
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center gap-[9px] min-h-[48px] px-6 py-[10px] rounded-btn font-cairo text-sm font-[800] leading-none cursor-pointer transition-all duration-300 whitespace-nowrap';

  const variants = {
    primary: 'bg-btn-primary text-text-inverse border-2 border-transparent hover:bg-btn-primary-hover',
    secondary:
      'bg-transparent text-text-inverse border-[1.5px] border-btn-secondary-border hover:border-white/60 hover:bg-white/5',
    'secondary-dark':
      'bg-transparent text-text-heading border-[1.5px] border-border-default hover:border-brand-red hover:text-brand-red',
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <LuArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={`group ${classes}`} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} onClick={onClick} className={`group ${classes}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={`group ${classes}`} onClick={onClick} {...props}>
      {content}
    </button>
  );
};
