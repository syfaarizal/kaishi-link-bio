export default function ProfileSection() {
  return (
    <div className="relative mb-8 text-center">
      <div className="w-32 h-32 mx-auto relative mb-4">
        <div className="absolute -inset-5 rounded-full bg-linear-to-tr from-red-900 via-red-500 to-orange-400 opacity-80 blur-xl" />
        <div className="absolute -inset-4 bg-linear-to-tr from-transparent via-red-300 to-transparent rounded-full animate-spin opacity-60 blur-sm" />
        <div className="relative w-full h-full rounded-full border-4 border-white/90 shadow-xl overflow-hidden animate-materialize bg-white">
          <div className="w-full h-full bg-linear-to-br from-red-200 via-red-100 to-orange-50 flex items-center justify-center">
            <img
              src="/kaishi-logo.png"
              alt="Kai Shi Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <div
        className="animate-[fadeUp_0.8s_ease-out_1s_forwards] opacity-0 translate-y-4"
        style={{ animationFillMode: 'forwards', animationDelay: '1s' }}
      >
        <h1 className="text-3xl font-bold tracking-wide text-white">Kai Shi</h1>
        <p className="text-red-100/80 text-sm mt-1 font-medium">Digital Creator | Front-End Dev</p>
      </div>
    </div>
  );
}
