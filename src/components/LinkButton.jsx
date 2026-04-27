import { ChevronRight } from 'lucide-react';

export default function LinkButton({ icon, text, delay, href = "#" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group w-full glass-panel text-red-950 p-4 rounded-2xl flex items-center justify-between border border-red-200/70 transition-all duration-300 cursor-pointer animate-[slideIn_0.6s_ease-out_forwards] opacity-0 translate-y-4 hover:scale-[1.02] active:scale-[0.98] hover:-translate-y-1 hover:border-red-500 hover:bg-red-600 hover:text-white shadow-[0_10px_30px_rgba(69,10,10,0.10)] hover:shadow-[0_20px_40px_var(--kaishi-red-glow)]"
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
      <div className="flex items-center gap-4">
        <div className="text-red-600 transition-colors group-hover:text-white">
          {icon}
        </div>
        <span className="font-semibold">{text}</span>
      </div>
      <ChevronRight size={18} className="text-red-300 transition-colors group-hover:text-white" />
    </a>
  );
}
