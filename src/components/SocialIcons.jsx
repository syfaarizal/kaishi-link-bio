import { SOCIAL_LINKS } from '../constants/links';

export default function SocialIcons() {
  return (
    <div
      className="flex gap-3 mb-10 animate-[fadeUp_0.7s_ease-out_1.2s_forwards] opacity-0"
      style={{ animationFillMode: 'forwards' }}
    >
      {SOCIAL_LINKS.map((social, idx) => (
        <a
          key={idx}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          title={social.label}
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ease-out"
          style={{
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.55)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(160,28,40,0.85)';
            e.currentTarget.style.border = '1px solid rgba(160,28,40,0.6)';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(90,15,20,0.45)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
            e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)';
            e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <social.Icon size={18} />
        </a>
      ))}
    </div>
  );
}