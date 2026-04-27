import { ChevronRight } from 'lucide-react';
import { BrandDiscordIcon } from './icons';

export default function DiscordCard() {
  return (
    <>
      <div
        className="flex items-center gap-3 mt-2"
        style={{ opacity: 0, animation: 'slideIn 0.6s ease-out 1.75s forwards' }}
      >
        <div className="flex-1 h-px bg-red-300/35" />
        <span className="text-[11px] font-medium text-red-100/70 tracking-[0.3em] uppercase">Komunitas</span>
        <div className="flex-1 h-px bg-red-300/35" />
      </div>

      <a
        href="https://discord.gg/pa9uyMTp7w"
        target="_blank"
        rel="noreferrer"
        className="group w-full glass-panel text-red-950 rounded-2xl flex flex-col border-2 border-dashed border-red-200/80 hover:border-solid hover:border-red-400 hover:bg-red-50 hover:text-red-600 transition-all duration-500 ease-out cursor-pointer hover:scale-[1.03] hover:-translate-y-0.7 active:scale-[0.99] shadow-[0_10px_30px_rgba(69,10,10,0.10)] hover:shadow-[0_16px_28px_rgba(220,38,38,0.18)] overflow-hidden"
        style={{ opacity: 0, transform: 'translateY(20px)', animation: 'slideIn 0.6s ease-out 1.8s forwards' }}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <div className="text-[#6c8eec] transition-colors group-hover:text-red-600">
              <BrandDiscordIcon size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold leading-tight">Join Server Discord</span>
              <span className="text-[11px] text-red-700 group-hover:text-red-600 transition-colors mt-0.5">
                Ngobrol, sharing &amp; nongkrong bareng
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-600 group-hover:bg-red-100 group-hover:text-red-600 transition-all duration-500 ease-out">
              FREE
            </span>
            <ChevronRight size={18} className="text-red-300 transition-colors group-hover:text-red-500" />
          </div>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-red-100/60 group-hover:bg-red-100 border-t border-red-200/80 group-hover:border-red-200 transition-all duration-500 ease-out">
          <span className="flex items-center gap-1 text-[11px] text-red-700 group-hover:text-red-600 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            Online sekarang
          </span>
        </div>
      </a>
    </>
  );
}
