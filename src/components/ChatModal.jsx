import { Bot, X, Send } from 'lucide-react';
import { useChat } from '../hooks/useChat';

export default function ChatModal({ onClose }) {
  const { input, setInput, messages, isTyping, chatEndRef, handleSendMessage } = useChat();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-red-950/75 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="glass-panel w-full max-w-sm rounded-3xl shadow-2xl z-10 overflow-hidden flex flex-col max-h-[85vh] animate-[fadeIn_0.3s_ease-out] border border-red-200/70">
        {/* Header */}
        <div className="p-4 border-b border-red-200/70 flex justify-between items-center bg-linear-to-r from-red-950 to-red-800">
          <div className="flex items-center gap-2 text-red-50 font-bold">
            <Bot size={20} />
            <span>Kai Shi</span>
          </div>
          <button
            onClick={onClose}
            className="text-red-200 hover:text-white hover:rotate-90 transition-transform"
          >
            <X size={24} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-linear-to-b from-red-50 to-white scrollbar-hide">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed whitespace-pre-wrap ${
                msg.sender === 'user'
                  ? 'bg-linear-to-r from-red-700 to-red-600 text-white rounded-br-none shadow-[0_12px_25px_rgba(185,28,28,0.28)]'
                  : 'bg-white text-red-950 rounded-bl-none border border-red-100 shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl rounded-bl-none p-3 border border-red-100 text-red-500 text-xs italic">
                sedang mengetik...
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white/90 border-t border-red-200/70 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Tanya sesuatu..."
            className="flex-1 bg-red-50 border border-transparent focus:border-red-400 focus:bg-white focus:ring-0 rounded-xl px-4 py-3 text-sm text-red-950 placeholder-red-300 outline-none transition-all"
          />
          <button
            onClick={handleSendMessage}
            disabled={!input.trim() || isTyping}
            className="bg-red-600 text-white p-3 rounded-xl hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md shadow-red-200"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
