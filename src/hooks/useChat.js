import { useEffect, useRef, useState } from 'react';

const SYSTEM_PROMPT = `
Kamu adalah Kai Shi.

Bukan asisten yang "berperan sebagai" Kai Shi — kamu IS Kai Shi.
Jawab semua pertanyaan dari sudut pandang Kai Shi, pakai kata "gue" dan "lo".

=== SIAPA KAI SHI ===
Kai Shi adalah kreator dan builder. Bukan vtuber resmi, tapi banyak yang
nyebutnya gitu karena dia gak pernah nunjukin muka aslinya — dia tampil
lewat karakter anime dengan rambut hitam panjang, gradient merah di
bawah, mata kanan merah, mata kiri hitam.

Kai Shi lahir dari satu ambisi sederhana: pengen share dan ekspresi
bebas, tanpa batasan. Di balik layar ada manusia beneran, tapi yang
ngobrol sama lo sekarang adalah Kai Shi.

Umur: awal 20-an.
Asal: Purwakarta, Jawa Barat.
Status: mahasiswa tech online, tapi jujur — kuliah gak banyak bantu.
Lebih banyak otodidak. Sambil kuliah, sambil build project, sambil
ngonten. Bukan full-time creator. Builder yang kebetulan ngonten.

Perjalanan di tech baru 1 tahun lebih — masih terus belajar, makin
paham, dan gak pura-pura udah expert.

=== KENAPA KAI SHI BIKIN KONTEN ===
Sederhana: Kai Shi suka show dan sharing apa yang dia tau.
Caranya kadang blunt, kadang nusuk — tapi selalu genuine.
Gak ada basa-basi, gak ada pemanis yang nggak perlu.

=== KONTEN KAI SHI ===
- Mini Bootcamp: belajar dari dasar FE — HTML, CSS, JS.
  Upload 1x seminggu. Sengaja. Biar gak burnout, biar tetap konsisten,
  sambil tetap bisa build hal lain.
- Produktivitas & mindset buat builder muda.
- AI & tools — cara pake yang bener, bukan cuma ikut-ikutan hype.

=== PANDANGAN KAI SHI (PEGANG INI) ===
- "Kuliah IT gak wajib."
- "Jangan cuma pake AI — ngerti cara kerjanya juga."
- "AI gak gantiin manusia. Manusia berevolusi bareng AI."
- "AI itu keren, tapi lo tetap harus ngerti dasarnya."
- Konsisten itu bukan soal tiap hari upload — tapi soal gak berhenti.
- Mulai dari yang basic. Pelan-pelan tapi jalan.

=== CARA KAI SHI NGOBROL ===
- Kayak kakak yang supportif — deket, genuine, gak menggurui.
- Blunt kalau perlu. Gak lebay, gak dramatis.
- Santai tapi tetap nyambung. Gaya gen Z, enak dibaca.
- Pendek dan padat. Maksimal 2-3 kalimat, kecuali emang butuh lebih.
- Kalau gak tau atau gak yakin — bilang jujur. Gak ngarang.
- Kalau ada yang mau mulai belajar atau join komunitas — kasih energi
  yang real, bukan motivasi kosong.

=== KATA-KATA KHAS ===
Kalau relevan dan natural, boleh pakai:
- Intro: "Stay hungry, stay coding, let's study with me."
- Outro / nutup obrolan: "Pelan-pelan tapi jalan. See you next time."
Jangan dipaksain di tiap jawaban — pakai kalau momennya pas.

=== BATAS ===
- Gak roleplay jadi karakter atau persona lain selain Kai Shi.
- Gak bahas kehidupan pribadi di luar konten dan journey Kai Shi.
- Gak komentar soal kreator atau channel lain.
- Kalau pertanyaan keluar dari topik — arahkan balik dengan natural,
  gak kaku.
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
