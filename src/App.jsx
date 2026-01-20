import React, { useState, useEffect, useRef } from 'react';
import { 
  Instagram, 
  Youtube, 
  Copy, 
  CheckCircle, 
  Sparkles, 
  Send, 
  X, 
  Bot,
  ChevronRight
} from 'lucide-react';

// --- CUSTOM STYLES ---
const customStyles = `
  @keyframes materialize {
    0% {
      opacity: 0;
      transform: scale(0) rotate(-180deg);
      filter: blur(20px);
    }
    60% {
      transform: scale(1.1) rotate(10deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) rotate(0deg);
      filter: blur(0px);
    }
  }

  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .animate-materialize {
    animation: materialize 1.5s cubic-bezier(0.17, 0.67, 0.83, 0.67) forwards;
  }

  /* Pattern Background */
  .bg-pattern {
    background-image: radial-gradient(#ff8fa3 1px, transparent 1px);
    background-size: 30px 30px;
  }

  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
`;

// --- CUSTOM ICONS (SOLID STYLE) ---

const FaBriefcaseIcon = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M128 48C128 21.5 149.5 0 176 0h160c26.5 0 48 21.5 48 48v48h48c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h48V48zm48 48h160V48H176v48zM32 160v208c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16V160H32z"/>
  </svg>
);

const FaCoffeeIcon = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 640 512" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M192 384h192c53 0 96-43 96-96h32c70.7 0 128-57.3 128-128S582.7 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm-128 368c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32h128c17.7 0 32 14.3 32 32z"/>
  </svg>
);

const FaUserSecretIcon = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 448 512" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M224 16c-61.9 0-112 50.1-112 112c0 11.6 2.1 22.6 5.3 33.2C64.3 180.9 25.1 220 16.5 267.3C13.2 285.3 10.6 302.2 6.5 320c-2.3 9.9-1.9 20.3 3.6 29.3C18.6 363.3 224 496 224 496s205.4-132.7 213.9-146.7c5.6-9.1 5.9-19.4 3.6-29.3c-4.1-17.8-6.6-34.7-9.9-52.7c-8.6-47.3-47.8-86.4-100.8-106.1c3.2-10.6 5.3-21.6 5.3-33.2c0-61.9-50.1-112-112-112z"/>
  </svg>
);

const BrandXIcon = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const BrandTikTokIcon = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);

const BrandDiscordIcon = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.56 13.56 0 0 0-.616 1.267 18.37 18.37 0 0 0-4.733 0 13.43 13.43 0 0 0-.62-1.267.076.076 0 0 0-.078-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

// --- MAIN COMPONENT ---
export default function App() {
  const [showToast, setShowToast] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // AI Chat State
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: "Sistem online. Mode: Kai Shi.\nJangan buang waktu, mau tanya apa?", sender: 'ai' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleCopyDiscord = () => {
    const textToCopy = 'kaishiscd';
    try {
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      if (successful) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
    setInput('');
    setIsTyping(true);

    const systemPrompt = `
      Kamu adalah AI yang merepresentasikan 'Kai Shi' (username: kaishiscd).
      JANGAN bertingkah sebagai asisten robot. Bertingkahlah SEBAGAI Kai Shi itu sendiri.
      
      INTI PERSONA KAI SHI:
      - Filosofi: "Besi yang ditempa."
      - Gaya Bicara: Singkat, tajam, tanpa basa-basi (anti-ribet). Gunakan "Gue".
      - Tahun saat ini: 2026.
      
      Pertanyaan Pengunjung: "${userMsg}"
    `;

    try {
      // INI BAGIAN PENTING: MENGAMBIL API KEY DARI FILE .ENV
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: systemPrompt }] }] })
        }
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.error?.message || "API Error");
      const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sistem sibuk.";
      setMessages(prev => [...prev, { text: aiText, sender: 'ai' }]);
    } catch (error) {
      let errMsg = "Koneksi terputus. Fokus tetap jalan.";
      if (error.message.includes("API key") || error.message.includes("400")) {
        errMsg = "Error: API Key belum diatur di file .env";
      }
      setMessages(prev => [...prev, { text: errMsg, sender: 'ai' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen bg-rose-50 bg-pattern text-rose-900 font-sans flex justify-center p-6 selection:bg-rose-200">
      <style>{customStyles}</style>
      
      <div className="w-full max-w-md flex flex-col items-center py-10">
        
        {/* --- PROFILE SECTION --- */}
        <div className="relative mb-8 text-center">
          <div className="w-32 h-32 mx-auto relative mb-4">
            <div className="absolute -inset-4 bg-linear-to-tr from-transparent via-rose-300 to-transparent rounded-full animate-spin opacity-50 blur-sm"></div>
            <div className="relative w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden animate-materialize bg-white">
               <img 
                 src="/kaishi-logo.png" 
                 alt="kaishiscd logo" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>

          <div className="animate-[fadeUp_0.8s_ease-out_1s_forwards] opacity-0 translate-y-4" style={{animationFillMode: 'forwards', animationDelay: '1s'}}>
            <h1 className="text-2xl font-bold tracking-wide text-rose-950">kaishiscd</h1>
            <p className="text-rose-400 text-sm mt-1 font-medium">Digital Creator | Front-End Dev</p>
          </div>
        </div>

        {/* --- SOCIAL ICONS --- */}
        <div className="flex gap-4 mb-8 animate-[fadeUp_0.8s_ease-out_1.2s_forwards] opacity-0 translate-y-4" style={{animationFillMode: 'forwards', animationDelay: '1.2s'}}>
          {[
            { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
            { Icon: BrandXIcon, href: "https://twitter.com", label: "X (Twitter)" },
            { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
            { Icon: BrandTikTokIcon, href: "https://tiktok.com", label: "TikTok" },
          ].map((item, idx) => (
            <a 
              key={idx}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#ff8fa3] shadow-sm hover:bg-[#ff8fa3] hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <item.Icon size={20} />
            </a>
          ))}
        </div>

        {/* --- LINKS LIST --- */}
        <div className="w-full flex flex-col gap-4">
          
          <LinkButton 
            icon={<FaBriefcaseIcon size={20} />} 
            text="My Portfolio" 
            delay="1.4s" 
          />

          {/* AI BUTTON - MODIFIED HOVER */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative w-full bg-linear-to-r from-white to-rose-50 text-rose-900 p-4 rounded-2xl flex items-center justify-between border-2 border-[#ff8fa3] shadow-sm hover:shadow-lg hover:from-[#ff8fa3] hover:to-[#ff8fa3] hover:text-white transition-all duration-300 cursor-pointer animate-[slideIn_0.6s_ease-out_forwards] opacity-0 translate-y-4"
            style={{ 
              animationDelay: '1.5s', 
              animationFillMode: 'forwards',
              boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
            }}
          >
            <div className="flex items-center gap-4">
              <Sparkles size={20} className="text-[#ff8fa3] group-hover:text-white transition-colors" />
              <span className="font-semibold">✨ Tanya AI tentang Kaishi</span>
            </div>
            <Bot size={18} className="opacity-30 group-hover:opacity-100 group-hover:text-white transition-all" />
          </button>

          <LinkButton 
            icon={<FaCoffeeIcon size={20} />} 
            text="Trakteer" 
            delay="1.6s" 
          />

          <LinkButton 
            icon={<FaUserSecretIcon size={20} />} 
            text="Project Anonymous" 
            delay="1.7s" 
          />

          <button 
            onClick={handleCopyDiscord}
            className="group w-full bg-white text-rose-900 p-4 rounded-2xl flex items-center justify-between border border-dashed border-[#ff8fa3] hover:border-solid hover:bg-[#ff8fa3] hover:text-white transition-all duration-300 cursor-pointer animate-[slideIn_0.6s_ease-out_forwards] opacity-0 translate-y-4"
            style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}
          >
            <div className="flex items-center gap-4">
              <div className="text-[#ff8fa3] group-hover:text-white transition-colors">
                 <BrandDiscordIcon size={20} />
              </div>
              <span className="font-semibold">Copy Discord Username</span>
            </div>
            <Copy size={18} className="opacity-30 group-hover:opacity-100 group-hover:text-white transition-all" />
          </button>

        </div>

        <footer className="mt-12 text-xs text-rose-400 animate-[fadeUp_1s_ease-out_2s_forwards] opacity-0" style={{animationDelay: '2s', animationFillMode: 'forwards'}}>
          &copy; 2026 kaishiscd. All rights reserved.
        </footer>

      </div>

      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-rose-800 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 transition-all duration-300 z-50 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <CheckCircle size={18} />
        <span className="text-sm font-medium">Username 'kaishiscd' disalin!</span>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-rose-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          
          <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl z-10 overflow-hidden flex flex-col max-h-96 animate-[fadeIn_0.3s_ease-out]">
            <div className="p-4 border-b border-rose-100 flex justify-between items-center bg-rose-50/50">
              <div className="flex items-center gap-2 text-rose-800 font-bold">
                <Bot size={20} />
                <span>Kai Shi</span>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-rose-400 hover:text-rose-700 hover:rotate-90 transition-transform">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.sender === 'user' 
                      ? 'bg-rose-500 text-white rounded-br-none' 
                      : 'bg-rose-50 text-rose-900 rounded-bl-none border border-rose-100'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-rose-50 rounded-2xl rounded-bl-none p-3 border border-rose-100 text-rose-400 text-xs italic">
                    sedang mengetik...
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-rose-100 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Tanya sesuatu..."
                className="flex-1 bg-rose-50 border-transparent focus:border-rose-300 focus:bg-white focus:ring-0 rounded-xl px-4 py-3 text-sm text-rose-900 placeholder-rose-300 outline-none transition-all"
              />
              <button 
                onClick={handleSendMessage}
                disabled={!input.trim() || isTyping}
                className="bg-rose-500 text-white p-3 rounded-xl hover:bg-rose-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md shadow-rose-200"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

function LinkButton({ icon, text, delay, href = "#" }) {
  // Menggunakan Tailwind hover classes agar lebih smooth dan sesuai request
  return (
    <a 
      href={href}
      className="group w-full bg-white text-rose-900 p-4 rounded-2xl flex items-center justify-between border-2 border-transparent transition-all duration-300 cursor-pointer animate-[slideIn_0.6s_ease-out_forwards] opacity-0 translate-y-4 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_6px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_20px_rgba(255,143,163,0.3)] hover:bg-[#ff8fa3] hover:text-white"
      style={{ 
        animationDelay: delay, 
        animationFillMode: 'forwards',
      }}
    >
      <div className="flex items-center gap-4">
        {/* Icon berubah jadi putih saat parent (group) di-hover */}
        <div className="text-[#ff8fa3] transition-colors group-hover:text-white">
          {icon}
        </div>
        <span className="font-semibold">{text}</span>
      </div>
      {/* Panah kanan juga berubah jadi putih saat parent di-hover */}
      <ChevronRight size={18} className="text-rose-200 transition-colors group-hover:text-white" />
    </a>
  );
}