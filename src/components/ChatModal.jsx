import { Bot, X, Send } from 'lucide-react';
import { useChat } from '../hooks/useChat';

export default function ChatModal({ onClose }) {
  const { input, setInput, messages, isTyping, chatEndRef, handleSendMessage } = useChat();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-rose-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl z-10 overflow-hidden flex flex-col max-h-[85vh] animate-[fadeIn_0.3s_ease-out]">
        {/* Header */}
        <div className="p-4 border-b border-rose-100 flex justify-between items-center bg-rose-50/50">
          <div className="flex items-center gap-2 text-rose-800 font-bold">
            <Bot size={20} />
            <span>Kai Shi</span>
          </div>
          <button
            onClick={onClose}
            className="text-rose-400 hover:text-rose-700 hover:rotate-90 transition-transform"
          >
            <X size={24} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white scrollbar-hide">
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

        {/* Input */}
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
  );
}