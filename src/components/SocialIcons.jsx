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
          className="w-11 h-11 rounded-full flex items-center justify-center social-icon-btn"
        >
          <social.Icon size={18} />
        </a>
      ))}
    </div>
  );
}