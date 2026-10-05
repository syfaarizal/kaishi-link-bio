import { useEffect } from 'react';
import { X } from 'lucide-react';

const SERVICES = [
  { icon: '🌐', label: 'Web Development' },
  { icon: '🎙️', label: 'Voice Over' },
];

export default function WorkWithModal({ onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-5 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="work-modal-title"
        className="w-full max-w-sm rounded-3xl border border-white/10 bg-[#14090b] p-6 text-white shadow-2xl animate-[fadeUp_0.25s_ease-out_forwards]"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 id="work-modal-title" className="text-lg font-bold">Work With Kai Shi</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-full p-2 text-white/55 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <X size={18} />
          </button>
        </div>

        <ul className="mb-6 space-y-4">
          {SERVICES.map(({ icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-sm font-medium text-white/85">
              {icon && <span aria-hidden="true" className="text-lg">{icon}</span>}
              {label}
            </li>
          ))}
        </ul>

        <a
          href="mailto:kaishiscd@gmail.com"
          className="block rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white transition hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          ✉️ kaishiscd@gmail.com
        </a>
      </section>
    </div>
  );
}
