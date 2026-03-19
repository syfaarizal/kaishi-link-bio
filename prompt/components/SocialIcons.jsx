import { SOCIAL_LINKS } from '../constants/links';

export default function SocialIcons() {
  return (
    <div
      className="flex gap-4 mb-8 animate-[fadeUp_0.8s_ease-out_1.2s_forwards] opacity-0 translate-y-4"
      style={{ animationFillMode: 'forwards', animationDelay: '1.2s' }}
    >
      {SOCIAL_LINKS.map(({ icon, href, label }, idx) => (
        <a
          key={idx}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#ff8fa3] shadow-sm hover:bg-[#ff8fa3] hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
        >
          <icon size={20} />
        </a>
      ))}
    </div>
  );
}