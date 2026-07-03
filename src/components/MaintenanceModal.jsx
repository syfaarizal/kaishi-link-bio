import { Wrench, X } from 'lucide-react';

export default function MaintenanceModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-sm transition-opacity"
        style={{ background: 'rgba(8,3,4,0.85)' }}
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className="relative w-full max-w-sm rounded-3xl shadow-2xl z-10 overflow-hidden flex flex-col items-center p-6 text-center"
        style={{
          background: '#FAFAFA',
          border: '1px solid rgba(200,180,182,0.3)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.65), 0 8px 24px rgba(90,15,20,0.25)',
          animation: 'slideIn 0.35s cubic-bezier(0.25, 1, 0.5, 1)',
        }}
      >
        {/* Close button in corner */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
          style={{ background: 'rgba(90,15,20,0.05)', color: 'rgba(90,15,20,0.6)' }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(160,28,40,0.1)';
            e.currentTarget.style.color = '#A01C28';
            e.currentTarget.style.transform = 'rotate(90deg)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(90,15,20,0.05)';
            e.currentTarget.style.color = 'rgba(90,15,20,0.6)';
            e.currentTarget.style.transform = 'rotate(0deg)';
          }}
        >
          <X size={16} />
        </button>

        {/* Icon with glowing ring */}
        <div className="relative mb-5 mt-3">
          <div
            className="absolute -inset-2 rounded-full opacity-35"
            style={{
              background: 'radial-gradient(circle, rgba(160,28,40,0.4) 0%, transparent 70%)',
              filter: 'blur(6px)',
            }}
          />
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10"
            style={{
              background: 'linear-gradient(135deg, rgba(90,15,20,0.08) 0%, rgba(160,28,40,0.12) 100%)',
              border: '1.5px solid rgba(160,28,40,0.2)',
              color: '#A01C28',
            }}
          >
            <Wrench size={28} className="animate-[pulse_2s_infinite]" />
          </div>
        </div>

        {/* Text Details */}
        <h3
          className="text-xl font-bold tracking-tight mb-2.5"
          style={{ color: '#0F0809' }}
        >
          Under Maintenance
        </h3>

        <p
          className="text-[13.5px] leading-relaxed mb-6 px-1"
          style={{ color: '#5A3A3D' }}
        >
          Oops! Just fixing up my portfolio page. Catch you in a bit!
        </p>

        {/* Acknowledge Button */}
        <button
          onClick={onClose}
          className="w-full py-3 px-5 rounded-xl font-semibold text-[14px] cursor-pointer transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #5A0F14 0%, #8B1A22 100%)',
            color: 'white',
            boxShadow: '0 8px 24px rgba(90,15,20,0.3)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-1.5px)';
            e.currentTarget.style.filter = 'brightness(1.08)';
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(90,15,20,0.4)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.filter = 'none';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(90,15,20,0.3)';
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
