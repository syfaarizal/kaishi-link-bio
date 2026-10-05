import { useState } from 'react';
import { Sparkles, Bot, ChevronRight } from 'lucide-react';

import customStyles from './styles/customStyles';
import { LINK_BUTTONS } from './constants/links';

import ProfileSection from './components/ProfileSection';
import SocialIcons from './components/SocialIcons';
import LinkButton from './components/LinkButton';
import DiscordCard from './components/DiscordCard';
import ChatModal from './components/ChatModal';
import WorkWithModal from './components/WorkWithModal';
import { FaBriefcaseIcon } from './components/icons';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWorkModalOpen, setIsWorkModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pattern text-white font-sans flex justify-center px-5 py-8 selection:bg-[#5A0F14]/50 selection:text-white">
      <style>{customStyles}</style>

      <div className="w-full max-w-97.5 flex flex-col items-center pt-8 pb-12">

        <ProfileSection />
        <SocialIcons />

        <div className="w-full flex flex-col gap-3">

          {/* Featured links: Portfolio + Kichi */}
          <LinkButton {...LINK_BUTTONS[0]} />

          <button
            type="button"
            onClick={() => setIsWorkModalOpen(true)}
            className="link-card link-card-featured group w-full rounded-2xl flex items-center justify-between p-4 animate-[slideIn_0.5s_ease-out_forwards] opacity-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1520]"
            style={{
              animationDelay: '1.5s',
              animationFillMode: 'forwards',
              border: '1px solid rgba(160,28,40,0.30)',
              cursor: 'pointer',
            }}
          >
            <span className="card-content flex items-center gap-3.5 relative z-10">
              <span
                className="card-icon flex items-center justify-center w-9 h-9 rounded-xl"
                style={{ background: 'rgba(90,15,20,0.08)', color: '#7A1520' }}
              >
                <FaBriefcaseIcon size={18} />
              </span>
              <span className="card-text font-semibold text-[14.5px] leading-tight" style={{ color: '#0F0809' }}>
                Work With Kai Shi
              </span>
            </span>
            <ChevronRight size={16} className="card-chevron relative z-10" style={{ color: 'rgba(0,0,0,0.2)' }} />
          </button>

          <LinkButton {...LINK_BUTTONS[1]} />

          {/* AI Chat — primary CTA, maroon filled */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="ai-btn group w-full rounded-2xl flex items-center justify-between px-4 py-4 cursor-pointer animate-[slideIn_0.5s_ease-out_forwards] opacity-0"
            style={{ animationDelay: '1.65s', animationFillMode: 'forwards' }}
          >
            <div className="flex items-center gap-3.5">
              <span
                className="flex items-center justify-center w-9 h-9 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.12)' }}
              >
                <Sparkles size={17} className="text-white/90" />
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold text-[14.5px] text-white leading-tight">
                  Ask AI about Kai Shi
                </span>
                <span className="text-[11px] font-medium text-white/55 text-left">
                  Ask AI anything about Kai Shi
                </span>
              </div>
            </div>
            <Bot size={16} className="text-white/40 group-hover:text-white/70 transition-colors" />
          </button>

          {/* Bisik-bisik */}
          <LinkButton {...LINK_BUTTONS[2]} />

          <DiscordCard />

        </div>

        <footer
          className="mt-10 text-[11px] font-medium animate-[fadeUp_0.8s_ease-out_forwards] opacity-0"
          style={{
            animationDelay: '2.2s',
            animationFillMode: 'forwards',
            color: 'rgba(255,255,255,0.2)',
            letterSpacing: '0.04em',
          }}
        >
          &copy; 2026 kaishiscd
        </footer>

      </div>

      {isModalOpen && <ChatModal onClose={() => setIsModalOpen(false)} />}
      {isWorkModalOpen && <WorkWithModal onClose={() => setIsWorkModalOpen(false)} />}
    </div>
  );
}
