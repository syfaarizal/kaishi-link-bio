const customStyles = `
  @keyframes materialize {
    0% { opacity: 0; transform: scale(0) rotate(-180deg); filter: blur(20px); }
    60% { transform: scale(1.1) rotate(10deg); }
    100% { opacity: 1; transform: scale(1) rotate(0deg); filter: blur(0px); }
  }
  @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
  }
  :root {
    --kaishi-red-strong: #dc2626;
    --kaishi-red-deep: #991b1b;
    --kaishi-red-dark: #450a0a;
    --kaishi-red-ink: #fee2e2;
    --kaishi-red-glow: rgba(220, 38, 38, 0.35);
  }
  .animate-materialize { animation: materialize 1.5s cubic-bezier(0.17, 0.67, 0.83, 0.67) forwards; }
  .bg-pattern {
    background-image:
      radial-gradient(rgba(248, 113, 113, 0.28) 1px, transparent 1px),
      linear-gradient(160deg, #1f0202 0%, #450a0a 38%, #7f1d1d 72%, #b91c1c 100%);
    background-size: 30px 30px, cover;
    background-position: center;
  }
  .glass-panel {
    background: linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(254,226,226,0.88) 100%);
    box-shadow: 0 24px 80px rgba(69, 10, 10, 0.22);
    backdrop-filter: blur(18px);
  }
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
`;

export default customStyles;
