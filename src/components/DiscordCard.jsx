import { ChevronRight } from 'lucide-react';
import { BrandDiscordIcon } from './icons';

export default function DiscordCard() {
  return (
    <>
      {/* Section divider */}
      <div
        className="flex items-center gap-3 mt-1"
        style={{ opacity: 0, animation: 'slideIn 0.5s ease-out 2s forwards' }}
      >
        <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />
        <span className="section-label">Komunitas</span>
        <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />
      </div>

      <a
        href="https://discord.gg/pa9uyMTp7w"
        target="_blank"
        rel="noreferrer"
        className="discord-card group w-full rounded-2xl flex flex-col overflow-hidden"
        style={{ opacity: 0, animation: 'slideIn 0.5s ease-out 2.1s forwards' }}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3.5">
            {/* Discord icon container */}
            <span
              className="flex items-center justify-center w-9 h-9 rounded-xl transition-colors duration-300"
              style={{ background: 'rgba(108,142,236,0.12)', color: '#6c8eec' }}
            >
              <BrandDiscordIcon size={18} />
            </span>
            <div className="flex flex-col gap-0.5">
              <span
                className="font-semibold text-[14.5px] leading-tight transition-colors duration-300"
                style={{ color: '#0F0809' }}
              >
                Join Discord Server
              </span>
              <span
                className="text-[11px] font-medium transition-colors duration-300"
                style={{ color: '#8B4048' }}
              >
                Sharing knowledge and support
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide"
              style={{ background: 'rgba(90,15,20,0.08)', color: '#7A1520' }}
            >
              FREE
            </span>
            <ChevronRight
              size={16}
              className="transition-all duration-300 group-hover:translate-x-0.5"
              style={{ color: 'rgba(0,0,0,0.2)' }}
            />
          </div>
        </div>

        {/* Online indicator strip */}
        <div
          className="flex items-center gap-2 px-4 py-2.5 border-t transition-colors duration-300"
          style={{ background: 'rgba(0,0,0,0.025)', borderColor: 'rgba(200,180,182,0.25)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
          <span className="text-[11px] font-medium" style={{ color: '#5A3A3D' }}>
            Online now
          </span>
        </div>
      </a>
    </>
  );
}