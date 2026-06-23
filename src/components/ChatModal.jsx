import { Bot, X, Send, Sparkles } from 'lucide-react';
import { useChat } from '../hooks/useChat';

export default function ChatModal({ onClose }) {
  const { input, setInput, messages, isTyping, chatEndRef, handleSendMessage } = useChat();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ background: 'rgba(8,3,4,0.82)' }}
        onClick={onClose}
      />

      <div
        className="relative w-full rounded-3xl shadow-2xl z-10 overflow-hidden flex flex-col"
        style={{
          maxWidth: '380px',
          height: '560px',
          background: '#FAFAFA',
          border: '1px solid rgba(200,180,182,0.25)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 8px 24px rgba(90,15,20,0.22)',
          animation: 'slideIn 0.32s cubic-bezier(0.22,0.61,0.36,1)',
        }}
      >
        {/* Header */}
        <div
          className="px-5 py-4 flex justify-between items-center shrink-0"
          style={{
            background: 'linear-gradient(135deg, #5A0F14 0%, #8B1A22 100%)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'rgba(255,255,255,0.12)' }}
            >
              <Bot size={17} className="text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-[14px] leading-tight">Kai Shi AI</p>
              <p className="text-white/45 text-[11px] font-medium">Tanya apa saja tentang Kai Shi</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.16)';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'rotate(90deg)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
              e.currentTarget.style.transform = 'rotate(0deg)';
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Messages */}
        <div
          className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide"
          style={{ background: '#F7F4F4' }}
        >
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className="max-w-[84%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-relaxed whitespace-pre-wrap"
                style={
                  msg.sender === 'user'
                    ? {
                        background: 'linear-gradient(135deg, #5A0F14 0%, #8B1A22 100%)',
                        color: 'white',
                        borderBottomRightRadius: '4px',
                        boxShadow: '0 8px 20px rgba(90,15,20,0.30)',
                      }
                    : {
                        background: 'white',
                        color: '#1A0810',
                        borderBottomLeftRadius: '4px',
                        border: '1px solid rgba(200,180,182,0.35)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                      }
                }
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div
                className="rounded-2xl rounded-bl-2 px-4 py-3 flex items-center gap-1.5"
                style={{
                  background: 'white',
                  border: '1px solid rgba(200,180,182,0.35)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}
              >
                {[0, 1, 2].map(i => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: '#8B1A22',
                      opacity: 0.6,
                      animation: `fadeUp 0.9s ease-in-out ${i * 0.2}s infinite alternate`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div
          className="px-4 py-3 flex gap-2.5 shrink-0"
          style={{
            background: 'white',
            borderTop: '1px solid rgba(200,180,182,0.28)',
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Tanya sesuatu..."
            className="flex-1 rounded-xl px-4 py-2.5 text-[13.5px] outline-none transition-all duration-200"
            style={{
              background: '#F7F4F4',
              border: '1.5px solid transparent',
              color: '#1A0810',
            }}
            onFocus={e => {
              e.currentTarget.style.border = '1.5px solid rgba(90,15,20,0.4)';
              e.currentTarget.style.background = 'white';
            }}
            onBlur={e => {
              e.currentTarget.style.border = '1.5px solid transparent';
              e.currentTarget.style.background = '#F7F4F4';
            }}
          />
          <button
            onClick={handleSendMessage}
            disabled={!input.trim() || isTyping}
            className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 shrink-0"
            style={{
              background: 'linear-gradient(135deg, #5A0F14 0%, #8B1A22 100%)',
              color: 'white',
              boxShadow: '0 4px 12px rgba(90,15,20,0.35)',
              opacity: (!input.trim() || isTyping) ? 0.45 : 1,
              cursor: (!input.trim() || isTyping) ? 'not-allowed' : 'pointer',
            }}
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}