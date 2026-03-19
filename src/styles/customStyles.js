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
  .animate-materialize { animation: materialize 1.5s cubic-bezier(0.17, 0.67, 0.83, 0.67) forwards; }
  .bg-pattern { background-image: radial-gradient(#ff8fa3 1px, transparent 1px); background-size: 30px 30px; }
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
`;

export default customStyles;