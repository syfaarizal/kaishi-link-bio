import { useState } from 'react';
import { Sparkles, Bot } from 'lucide-react';

import customStyles from './styles/customStyles';
import { LINK_BUTTONS } from './constants/links';

import ProfileSection from './components/ProfileSection';
import SocialIcons from './components/SocialIcons';
import LinkButton from './components/LinkButton';
import DiscordCard from './components/DiscordCard';
import ChatModal from './components/ChatModal';
import MaintenanceModal from './components/MaintenanceModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMaintenanceOpen, setIsMaintenanceOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pattern text-white font-sans flex justify-center px-5 py-8 selection:bg-[#5A0F14]/50 selection:text-white">
      <style>{customStyles}</style>

      <div className="w-full max-w-97.5 flex flex-col items-center pt-8 pb-12">

        <ProfileSection />
        <SocialIcons />

        <div className="w-full flex flex-col gap-3">

          {/* Featured links: Portfolio + Kichi */}
          <LinkButton
            {...LINK_BUTTONS[0]}
            onClick={() => setIsMaintenanceOpen(true)}
          />
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
      {isMaintenanceOpen && <MaintenanceModal onClose={() => setIsMaintenanceOpen(false)} />}
    </div>
  );
}