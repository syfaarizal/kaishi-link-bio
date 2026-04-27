import { useState } from 'react';
import { Sparkles, Bot } from 'lucide-react';

import customStyles from './styles/customStyles';
import { LINK_BUTTONS } from './constants/links';

import ProfileSection from './components/ProfileSection';
import SocialIcons from './components/SocialIcons';
import LinkButton from './components/LinkButton';
import DiscordCard from './components/DiscordCard';
import ChatModal from './components/ChatModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pattern text-red-50 font-sans flex justify-center p-6 selection:bg-red-500/40 selection:text-white">
      <style>{customStyles}</style>

      <div className="w-full max-w-md flex flex-col items-center py-10">

        <ProfileSection />
        <SocialIcons />

        <div className="w-full flex flex-col gap-4">

          <LinkButton {...LINK_BUTTONS[0]} />

          {/* AI Chat Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative w-full glass-panel text-red-950 p-4 rounded-2xl flex items-center justify-between border border-red-200/70 shadow-sm hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(220,38,38,0.22)] hover:text-white transition-all duration-500 ease-out cursor-pointer animate-[slideIn_0.6s_ease-out_forwards] opacity-0 translate-y-1 overflow-hidden"
            style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-red-700 via-red-600 to-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex items-center gap-4">
              <Sparkles size={20} className="relative z-10 text-red-600 group-hover:text-white transition-colors" />
              <span className="relative z-10 font-semibold">Tanya AI tentang Kai Shi</span>
            </div>
            <Bot size={18} className="relative z-10 opacity-40 group-hover:opacity-100 group-hover:text-white transition-all" />
          </button>

          <LinkButton {...LINK_BUTTONS[1]} />
          <LinkButton {...LINK_BUTTONS[2]} />

          <DiscordCard />

        </div>

        <footer
          className="mt-12 text-xs text-red-100/70 animate-[fadeUp_1s_ease-out_2s_forwards] opacity-0"
          style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
        >
          &copy; 2026 kaishiscd. All rights reserved.
        </footer>

      </div>

      {isModalOpen && <ChatModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
