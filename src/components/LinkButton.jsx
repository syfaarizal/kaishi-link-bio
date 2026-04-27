import { ChevronRight } from 'lucide-react';

export default function LinkButton({ icon, text, delay, href = "#" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group w-full glass-panel text-red-950 p-4 rounded-2xl flex items-center justify-between border border-red-200/70 transition-all duration-500 ease-out cursor-pointer animate-[slideIn_0.6s_ease-out_forwards] opacity-0 translate-y-1 hover:scale-[1.01] active:scale-[0.99] hover:-translate-y-0.5 hover:border-red-400 hover:bg-red-50 hover:text-red-600 shadow-[0_10px_30px_rgba(69,10,10,0.10)] hover:shadow-[0_16px_28px_rgba(220,38,38,0.18)]"
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
      <div className="flex items-center gap-4">
        <div className="text-red-600 transition-colors group-hover:text-red-600">
          {icon}
        </div>
        <span className="font-semibold">{text}</span>
      </div>
      <ChevronRight size={18} className="text-red-300 transition-colors group-hover:text-red-500" />
    </a>
  );
}
