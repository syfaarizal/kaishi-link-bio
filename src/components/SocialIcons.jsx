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
          className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-red-600 border border-red-500/70 hover:bg-red-500 hover:text-red-600 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(220,38,38,0.16)] transition-all duration-500 ease-out"
        >
          <social.Icon size={20} />
        </a>
      ))}
    </div>
  );
}
