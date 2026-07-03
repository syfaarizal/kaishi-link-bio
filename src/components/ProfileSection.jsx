export default function ProfileSection() {
  return (
    <div className="relative mb-10 text-center flex flex-col items-center">
      {/* Avatar stack */}
      <div className="w-28 h-28 mx-auto relative mb-6">
        {/* Outer glow blob */}
        <div
          className="avatar-glow-outer absolute -inset-6 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(120,20,30,0.55) 0%, transparent 70%)',
            filter: 'blur(16px)',
          }}
        />
        {/* Spinning conic ring */}
        <div
          className="avatar-glow-ring absolute -inset-3 rounded-full opacity-50"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0%, rgba(160,28,40,0.7) 30%, transparent 60%)',
            filter: 'blur(3px)',
          }}
        />
        {/* Avatar */}
        <div className="relative w-full h-full rounded-full border-2 border-white/10 shadow-2xl overflow-hidden animate-materialize bg-black">
          <div className="w-full h-full bg-gradient from-[#1a0608] via-black to-[#2a0a10] flex items-center justify-center">
            <img
              src="/libr-logo-black.png"
              alt="Kai Shi Logo"
              className="w-full h-full object-contain logo-spin-entrance"
            />
          </div>
        </div>
      </div>

      {/* Name & subtitle */}
      <div
        className="animate-[fadeUp_0.7s_ease-out_1s_forwards] opacity-0"
        style={{ animationFillMode: 'forwards' }}
      >
        <h1
          className="text-[28px] font-bold tracking-[-0.01em] text-white leading-none mb-2"
          style={{ letterSpacing: '-0.01em' }}
        >
          Kai Shi
        </h1>
        <p className="text-[13px] font-medium text-white/45 tracking-[0.08em] uppercase">
          Digital Creator&nbsp;&nbsp;·&nbsp;&nbsp;Front-End Developer
        </p>
      </div>
    </div>
  );
}