const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  @keyframes materialize {
    0% { opacity: 0; transform: scale(0.4) rotate(-20deg); filter: blur(24px); }
    60% { transform: scale(1.04) rotate(2deg); filter: blur(2px); }
    100% { opacity: 1; transform: scale(1) rotate(0deg); filter: blur(0px); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes pulseGlow {
    0%, 100% { opacity: 0.55; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.04); }
  }
  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes avatarReveal {
    0% { opacity: 0; transform: scale(0.5) rotate(-12deg); filter: blur(20px) saturate(0); }
    70% { transform: scale(1.03) rotate(1deg); filter: blur(1px) saturate(1.2); }
    100% { opacity: 1; transform: scale(1) rotate(0deg); filter: blur(0) saturate(1); }
  }

  :root {
    --maroon: #5A0F14;
    --maroon-mid: #7A1520;
    --maroon-bright: #A01C28;
    --maroon-glow: rgba(90,15,20,0.55);
    --maroon-border: rgba(138,30,42,0.22);
    --black: #080808;
    --surface: #111010;
    --card-bg: rgba(255,255,255,0.975);
    --card-border: rgba(200,180,182,0.28);
    --card-hover-border: rgba(160,28,40,0.45);
    --text-primary: #0F0809;
    --text-secondary: #5A3A3D;
    --text-muted: rgba(255,255,255,0.42);
  }

  * { font-family: 'Inter', system-ui, -apple-system, sans-serif; }

  .animate-materialize {
    animation: avatarReveal 1.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  }

  /* Rich dark background: near-black with a faint maroon warmth and subtle dot grid */
  .bg-pattern {
    background-color: #0D0608;
    background-image:
      radial-gradient(circle at 50% 0%, rgba(90,15,20,0.38) 0%, transparent 55%),
      radial-gradient(circle at 85% 80%, rgba(90,15,20,0.18) 0%, transparent 45%),
      radial-gradient(rgba(255,255,255,0.028) 1px, transparent 1px);
    background-size: auto, auto, 28px 28px;
    background-position: center top, bottom right, center;
  }

  /* Clean white glass card — maximum contrast against dark bg */
  .glass-panel {
    background: rgba(255, 255, 255, 0.97);
    box-shadow:
      0 1px 0 0 rgba(255,255,255,0.06) inset,
      0 20px 60px rgba(0,0,0,0.45),
      0 4px 16px rgba(0,0,0,0.25);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  /* Card with left accent bar — the signature micro-detail */
  .link-card {
    position: relative;
    overflow: hidden;
    transition: transform 0.28s cubic-bezier(0.22,0.61,0.36,1), box-shadow 0.28s ease, border-color 0.28s ease;
  }
  .link-card::before {
    content: '';
    position: absolute;
    left: 0; top: 10%; bottom: 10%;
    width: 3px;
    border-radius: 0 2px 2px 0;
    background: linear-gradient(to bottom, var(--maroon-bright), var(--maroon));
    opacity: 0;
    transform: scaleY(0.4);
    transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.22,0.61,0.36,1);
  }
  .link-card:hover::before {
    opacity: 1;
    transform: scaleY(1);
  }
  .link-card:hover {
    transform: translateY(-2px);
    box-shadow:
      0 1px 0 0 rgba(255,255,255,0.06) inset,
      0 28px 64px rgba(0,0,0,0.5),
      0 8px 24px rgba(90,15,20,0.22);
    border-color: var(--card-hover-border) !important;
  }
  .link-card:active {
    transform: translateY(0px) scale(0.99);
  }

  /* Featured card (Portfolio + Kichi) — elevated prominence */
  .link-card-featured {
    background: linear-gradient(135deg, rgba(255,255,255,0.99) 0%, rgba(254,242,243,0.98) 100%);
    border-color: rgba(160,28,40,0.3) !important;
  }
  .link-card-featured::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--maroon) 0%, var(--maroon-bright) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: inherit;
  }
  .link-card-featured:hover::after {
    opacity: 1;
  }
  .link-card-featured:hover .card-content {
    position: relative;
    z-index: 1;
    color: white !important;
  }
  .link-card-featured:hover .card-icon,
  .link-card-featured:hover .card-text,
  .link-card-featured:hover .card-chevron {
    color: white !important;
  }

  /* AI Chat button */
  .ai-btn {
    background: linear-gradient(135deg, var(--maroon) 0%, var(--maroon-bright) 100%);
    border: 1px solid rgba(160,28,40,0.6);
    box-shadow:
      0 20px 48px rgba(90,15,20,0.38),
      0 4px 12px rgba(90,15,20,0.25),
      0 1px 0 rgba(255,255,255,0.08) inset;
    transition: transform 0.25s cubic-bezier(0.22,0.61,0.36,1), box-shadow 0.25s ease, filter 0.25s ease;
  }
  .ai-btn:hover {
    transform: translateY(-2px);
    box-shadow:
      0 28px 60px rgba(90,15,20,0.48),
      0 8px 20px rgba(90,15,20,0.3),
      0 1px 0 rgba(255,255,255,0.1) inset;
    filter: brightness(1.08);
  }
  .ai-btn:active {
    transform: translateY(0) scale(0.99);
  }

  /* Glow rings behind avatar */
  .avatar-glow-outer {
    animation: pulseGlow 4s ease-in-out infinite;
  }
  .avatar-glow-ring {
    animation: spinSlow 12s linear infinite;
  }

  /* Section divider label */
  .section-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.32);
  }

  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

  /* Discord card specific overrides */
  .discord-card {
    background: rgba(255,255,255,0.97);
    border: 1.5px dashed rgba(160,28,40,0.25);
    transition: border-style 0.2s, border-color 0.25s, transform 0.28s cubic-bezier(0.22,0.61,0.36,1), box-shadow 0.28s ease;
  }
  .discord-card:hover {
    border-style: solid;
    border-color: rgba(160,28,40,0.5);
    transform: translateY(-2px);
    box-shadow:
      0 28px 64px rgba(0,0,0,0.5),
      0 8px 24px rgba(90,15,20,0.22);
  }
  .discord-card:active { transform: scale(0.99); }
`;

export default customStyles;