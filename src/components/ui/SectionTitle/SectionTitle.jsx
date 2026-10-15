export const SectionTitle = ({
  label,
  title,
  description,
  light = false,
  className = '',
}) => {
  return (
    <div className={className}>
      {label && (
        <div className="flex items-center gap-[10px] mb-4">
          <span className="inline-block w-8 h-[2.5px] bg-brand-red rounded-sm" />
          <span
            className={`text-[13px] font-semibold tracking-wide ${
              light ? 'text-icon-red-light' : 'text-brand-red'
            }`}
          >
            {label}
          </span>
        </div>
      )}

      {title && (
        <h2
          className={`text-[34px] max-md:text-[27px] font-[800] leading-[1.45] mb-3 ${
            light ? 'text-text-inverse' : 'text-text-heading'
          }`}
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          className={`text-[15px] leading-[1.9] max-w-[540px] ${
            light ? 'text-text-inverse-secondary' : 'text-text-body'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
