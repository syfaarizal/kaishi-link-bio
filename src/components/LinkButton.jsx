import { ChevronRight } from 'lucide-react';

export default function LinkButton({ icon, text, delay, href = "#" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group w-full bg-white text-rose-900 p-4 rounded-2xl flex items-center justify-between border-2 border-transparent transition-all duration-300 cursor-pointer animate-[slideIn_0.6s_ease-out_forwards] opacity-0 translate-y-4 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_6px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_20px_rgba(255,143,163,0.3)] hover:bg-[#ff8fa3] hover:text-white"
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
      <div className="flex items-center gap-4">
        <div className="text-[#ff8fa3] transition-colors group-hover:text-white">
          {icon}
        </div>
        <span className="font-semibold">{text}</span>
      </div>
      <ChevronRight size={18} className="text-rose-200 transition-colors group-hover:text-white" />
    </a>
  );
}