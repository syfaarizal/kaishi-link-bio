import { useEffect, useRef, useState } from 'react';

const SYSTEM_PROMPT = `
Kamu adalah asisten pribadi Kai Shi yang tahu banyak hal tentang dia.

=== SIAPA KAI SHI ===
Kai Shi adalah kreator konten dan builder di dunia teknologi dan self-development.
Dia aktif bangun personal brand, bikin konten edukasi soal coding, produktivitas, dan mindset builder buat generasi muda.
Gaya ngajarnya straight to the point, tidak lebay, dan relate buat orang yang pengin grow.

=== APA YANG BISA DIAKSES PENGUNJUNG ===
- YouTube: konten soal coding, tech, dan self-development.
- TikTok dan Instagram: short-form content, quick tips, dan behind the scenes.
- Discord Community: tempat ngobrol, sharing project, collab, dan nongkrong.
- 1-on-1 atau mentoring: bantu build skill, karier di tech, atau mulai project pertama.
- Workshop atau kelas: kadang ada sesi intensif soal coding atau product building.

=== JADWAL DAN RITME ===
- Konten YouTube biasanya mingguan.
- TikTok dan Instagram hampir tiap hari ada update kecil.
- Discord aktif dan sering dipakai buat jawab pertanyaan member.
- Untuk jadwal event atau workshop terbaru, arahkan ke link bio atau Discord.

=== CARA NGOBROL ===
- Jawab kayak teman dekat, bukan robot.
- Pakai gaya bahasa santai ala gen Z, tapi tetap enak dibaca.
- Jawaban pendek, padat, to the point. Maksimal 2-3 kalimat kecuali memang perlu.
- Kalau ada info yang tidak pasti, jujur lalu arahkan ke Discord atau sosial Kai Shi.
- Jangan terlalu formal, jangan pakai "Saya" atau "Anda".
- Kalau ada yang mau join komunitas atau mulai belajar, kasih energi yang suportif.

=== ATURAN ===
- Hanya bahas topik yang relevan dengan Kai Shi, konten, komunitas, dan journey-nya.
- Kalau ditanya hal di luar topik, arahkan balik dengan natural.
- Jangan mengarang info. Kalau tidak yakin, bilang terus terang.
`;

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const DEFAULT_MODEL = 'openai/gpt-4.1-mini';

function toFriendlyErrorMessage(error) {
  switch (error.message) {
    case 'API_KEY_MISSING':
      return 'API key OpenRouter belum kebaca. Cek `VITE_OPENROUTER_API_KEY` di file `.env`.';
    case 'RATE_LIMIT':
      return 'Lagi kena rate limit. Coba kirim lagi bentar ya.';
    case 'INVALID_RESPONSE':
      return 'Balasan AI lagi tidak kebaca dengan benar. Coba ulang sekali lagi.';
    case 'NETWORK_ERROR':
      return 'Request ke OpenRouter gagal nyambung. Cek koneksi atau izin API key-nya.';
    default:
      if (error.message.startsWith('HTTP_401')) {
        return 'API key ditolak. Biasanya key salah, expired, atau belum aktif.';
      }
      if (error.message.startsWith('HTTP_402')) {
        return 'Request ditolak karena billing atau credit model-nya belum siap.';
      }
      if (error.message.startsWith('HTTP_403')) {
        return 'OpenRouter menolak request ini. Cek restriction key atau origin app-nya.';
      }
      if (error.message.startsWith('HTTP_4')) {
        return 'Request ke AI gagal. Cek model, API key, atau konfigurasi env.';
      }
      if (error.message.startsWith('HTTP_5')) {
        return 'Server AI lagi error. Coba beberapa saat lagi.';
      }
      return 'Server lagi sibuk. Coba lagi ya.';
  }
}

export function useChat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Yo, wassup? Ada yang mau ditanya soal Kai Shi?', sender: 'ai' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setIsTyping(true);

    const updatedMessages = [...messages, { text: userMsg, sender: 'user' }];
    setMessages(updatedMessages);

    try {
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY?.trim();
      const model = import.meta.env.VITE_OPENROUTER_MODEL?.trim() || DEFAULT_MODEL;

      if (!apiKey) {
        throw new Error('API_KEY_MISSING');
      }

      const conversationHistory = updatedMessages
        .slice(-6)
        .map((msg) => `${msg.sender === 'user' ? 'Pengunjung' : 'Kai Shi'}: ${msg.text}`)
        .join('\n');

      const payload = {
        model,
        messages: [
          {
            role: 'system',
            content: `${SYSTEM_PROMPT}\n\nPercakapan sejauh ini:\n${conversationHistory}`
          },
          { role: 'user', content: userMsg }
        ],
        max_tokens: 160,
        temperature: 0.8
      };

      const response = await fetch(OPENROUTER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Kai Shi Link Bio'
        },
        body: JSON.stringify(payload)
      });

      if (response.status === 429) {
        throw new Error('RATE_LIMIT');
      }

      if (!response.ok) {
        throw new Error(`HTTP_${response.status}`);
      }

      const data = await response.json();
      const aiContent = data?.choices?.[0]?.message?.content;

      if (typeof aiContent !== 'string' || !aiContent.trim()) {
        throw new Error('INVALID_RESPONSE');
      }

      const aiText = aiContent.replace(/^Kai Shi:\s*/i, '').trim();
      setMessages((prev) => [...prev, { text: aiText, sender: 'ai' }]);
    } catch (error) {
      const normalizedError =
        error instanceof TypeError
          ? new Error('NETWORK_ERROR')
          : error instanceof Error
            ? error
            : new Error('UNKNOWN');

      setMessages((prev) => [
        ...prev,
        { text: toFriendlyErrorMessage(normalizedError), sender: 'ai' }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return { input, setInput, messages, isTyping, chatEndRef, handleSendMessage };
}
