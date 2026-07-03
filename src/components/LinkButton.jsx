import { ChevronRight } from 'lucide-react';

export default function LinkButton({ icon, text, delay, href = "#", variant = "default", badge, onClick, disabled }) {
  const isFeatured = variant === 'featured';

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      if (onClick) {
        onClick(e);
      }
    }
  };

  return (
    <a
      href={disabled ? undefined : href}
      target={disabled ? undefined : "_blank"}
      rel={disabled ? undefined : "noreferrer"}
      onClick={handleClick}
      className={`link-card ${isFeatured ? 'link-card-featured' : ''} ${disabled ? 'link-card-disabled' : ''} group w-full rounded-2xl flex items-center justify-between p-4 animate-[slideIn_0.5s_ease-out_forwards] opacity-0`}
      style={{
        animationDelay: delay,
        animationFillMode: 'forwards',
        border: isFeatured
          ? '1px solid rgba(160,28,40,0.30)'
          : '1px solid rgba(200,180,182,0.22)',
        cursor: 'pointer',
      }}
    >
      {/* Content wrapper — needed for z-index layering on featured hover */}
      <div className="card-content flex items-center gap-3.5 relative z-10">
        <span
          className="card-icon flex items-center justify-center w-9 h-9 rounded-xl"
          style={{
            background: isFeatured ? 'rgba(90,15,20,0.08)' : 'rgba(0,0,0,0.04)',
            color: isFeatured ? '#7A1520' : '#5A3A3D',
          }}
        >
          {icon}
        </span>
        <div className="flex flex-col gap-0.5">
          <span
            className="card-text font-semibold text-[14.5px] leading-tight"
            style={{ color: '#0F0809' }}
          >
            {text}
          </span>
          {badge && (
            <span className="text-[11px] font-medium" style={{ color: '#8B4048' }}>
              {badge}
            </span>
          )}
        </div>
      </div>

      <ChevronRight
        size={16}
        className="card-chevron relative z-10"
        style={{ color: 'rgba(0,0,0,0.2)' }}
      />
    </a>
  );
}