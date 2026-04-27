import { SOCIAL_LINKS } from '../constants/links';

export default function SocialIcons() {
  return (
    <div
      className="flex gap-4 mb-8 animate-[fadeUp_0.8s_ease-out_1.2s_forwards] opacity-0 translate-y-4"
      style={{ animationFillMode: 'forwards', animationDelay: '1.2s' }}
    >
      {SOCIAL_LINKS.map((social, idx) => (
        <a
          key={idx}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-red-600 border border-red-200/70 hover:bg-red-600 hover:text-white hover:-translate-y-1 hover:shadow-[0_16px_30px_var(--kaishi-red-glow)] transition-all duration-300"
        >
          <social.Icon size={20} />
        </a>
      ))}
    </div>
  );
}
