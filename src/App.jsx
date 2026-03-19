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
    <div className="min-h-screen bg-rose-50 bg-pattern text-rose-900 font-sans flex justify-center p-6 selection:bg-rose-200">
      <style>{customStyles}</style>

      <div className="w-full max-w-md flex flex-col items-center py-10">

        <ProfileSection />
        <SocialIcons />

        <div className="w-full flex flex-col gap-4">

          <LinkButton {...LINK_BUTTONS[0]} />

          {/* AI Chat Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative w-full bg-linear-to-r from-white to-rose-50 text-rose-900 p-4 rounded-2xl flex items-center justify-between border-2 border-[#ff8fa3] shadow-sm hover:shadow-lg hover:from-[#ff8fa3] hover:to-[#ff8fa3] hover:text-white transition-all duration-300 cursor-pointer animate-[slideIn_0.6s_ease-out_forwards] opacity-0 translate-y-4"
            style={{ animationDelay: '1.5s', animationFillMode: 'forwards', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}
          >
            <div className="flex items-center gap-4">
              <Sparkles size={20} className="text-[#ff8fa3] group-hover:text-white transition-colors" />
              <span className="font-semibold">Tanya AI tentang Kai Shi</span>
            </div>
            <Bot size={18} className="opacity-30 group-hover:opacity-100 group-hover:text-white transition-all" />
          </button>

          <LinkButton {...LINK_BUTTONS[1]} />
          <LinkButton {...LINK_BUTTONS[2]} />

          <DiscordCard />

        </div>

        <footer
          className="mt-12 text-xs text-rose-400 animate-[fadeUp_1s_ease-out_2s_forwards] opacity-0"
          style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
        >
          &copy; 2026 kaishiscd. All rights reserved.
        </footer>

      </div>

      {isModalOpen && <ChatModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}