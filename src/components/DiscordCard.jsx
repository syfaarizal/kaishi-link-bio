import { ChevronRight } from 'lucide-react';
import { BrandDiscordIcon } from './icons';

export default function DiscordCard() {
  return (
    <>
      <div
        className="flex items-center gap-3 mt-2"
        style={{ opacity: 0, animation: 'slideIn 0.6s ease-out 1.75s forwards' }}
      >
        <div className="flex-1 h-px bg-rose-200/60" />
        <span className="text-[11px] font-medium text-rose-300 tracking-widest uppercase">Komunitas</span>
        <div className="flex-1 h-px bg-rose-200/60" />
      </div>

      <a
        href="https://discord.gg/pa9uyMTp7w"
        target="_blank"
        rel="noreferrer"
        className="group w-full bg-white text-rose-900 rounded-2xl flex flex-col border-2 border-dashed border-rose-200 hover:border-solid hover:border-[#ff8fa3] hover:bg-[#ff8fa3] hover:text-white transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_6px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_20px_rgba(255,143,163,0.3)] overflow-hidden"
        style={{ opacity: 0, transform: 'translateY(20px)', animation: 'slideIn 0.6s ease-out 1.8s forwards' }}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <div className="text-[#ff8fa3] transition-colors group-hover:text-white">
              <BrandDiscordIcon size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold leading-tight">Join Server Discord</span>
              <span className="text-[11px] text-rose-400 group-hover:text-rose-100 transition-colors mt-0.5">
                Ngobrol, sharing &amp; nongkrong bareng
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-500 group-hover:bg-white/20 group-hover:text-white transition-all">
              FREE
            </span>
            <ChevronRight size={18} className="text-rose-200 transition-colors group-hover:text-white" />
          </div>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-rose-50 group-hover:bg-white/10 border-t border-rose-100 group-hover:border-white/20 transition-all">
          <span className="flex items-center gap-1 text-[11px] text-rose-400 group-hover:text-rose-100 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            Online sekarang
          </span>
        </div>
      </a>
    </>
  );
}