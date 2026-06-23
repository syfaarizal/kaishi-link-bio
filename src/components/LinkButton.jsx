import { ChevronRight } from 'lucide-react';

export default function LinkButton({ icon, text, delay, href = "#", variant = "default", badge }) {
  const isFeatured = variant === 'featured';

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`link-card ${isFeatured ? 'link-card-featured' : ''} group w-full rounded-2xl flex items-center justify-between p-4 animate-[slideIn_0.5s_ease-out_forwards] opacity-0`}
      style={{
        animationDelay: delay,
        animationFillMode: 'forwards',
        border: isFeatured
          ? '1px solid rgba(160,28,40,0.30)'
          : '1px solid rgba(200,180,182,0.22)',
      }}
    >
      {/* Content wrapper — needed for z-index layering on featured hover */}
      <div className="card-content flex items-center gap-3.5 relative z-10">
        <span
          className="card-icon flex items-center justify-center w-9 h-9 rounded-xl transition-colors duration-300"
          style={{
            background: isFeatured ? 'rgba(90,15,20,0.08)' : 'rgba(0,0,0,0.04)',
            color: isFeatured ? '#7A1520' : '#5A3A3D',
          }}
        >
          {icon}
        </span>
        <div className="flex flex-col gap-0.5">
          <span
            className="card-text font-semibold text-[14.5px] leading-tight transition-colors duration-300"
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
        className="card-chevron relative z-10 transition-all duration-300 group-hover:translate-x-0.5"
        style={{ color: 'rgba(0,0,0,0.2)' }}
      />
    </a>
  );
}