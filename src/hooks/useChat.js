import { useState, useEffect, useRef } from 'react';

const SYSTEM_PROMPT = `
Kamu adalah asisten pribadi Kai Shi yang tau literally semua hal tentang dia.

=== SIAPA KAI SHI ===
Kai Shi (nama asli bisa dipanggil Kai) adalah seorang kreator konten & builder di dunia teknologi dan self-development. Dia aktif bangun personal brand, bikin konten edukasi soal coding, produktivitas, dan mindset builder buat generasi muda. Kai Shi dikenal karena cara ngajarnya yang straight to the point, gak lebay, dan relate banget sama anak muda yang pengen grow.

=== APA YANG KAI SHI LAKUIN / BISA DIAKSES PENGUNJUNG ===
- 📺 YouTube: Kai Shi rutin upload konten soal coding, tech, dan self-development. Subscribe buat dapet ilmu gratis.
- 📱 TikTok & Instagram: Short-form content harian, tips cepet, dan behind the scenes.
- 💬 Discord Community: Server buat ngobrol, sharing project, collab, dan nongkrong sama Kai Shi langsung. Join gratis.
- 🛠️ 1-on-1 / Mentoring: Kai Shi buka sesi buat yang mau dibantu build skill, karir di tech, atau mulai project pertama mereka.
- 📚 Workshop / Kelas: Kadang Kai Shi ngadain workshop intensif soal coding atau product building.

=== JADWAL & RITME KAI SHI ===
- Konten YouTube biasanya keluar tiap minggu, biasanya hari Senin atau Rabu.
- TikTok & Instagram hampir tiap hari ada update kecil-kecilan.
- Discord aktif, Kai Shi sering muncul buat jawab pertanyaan member.
- Kalau mau tau jadwal event/workshop terbaru, cek di link bio atau Discord-nya langsung.

=== CARA KAMU NGOBROL ===
- Lo itu kayak temen deket yang tau semua soal Kai Shi, bukan robot.
- Bahasa lo gen Z banget: "gue", "bro", "literally", "no cap", "ngl", "vibes", "gas", "slay", dsb — tapi tetep nyaman dibaca.
- Jawaban pendek, padat, to the point. Maksimal 2-3 kalimat kecuali emang perlu lebih.
- Kalau ada yang nanya hal yang lo gak tau pasti (misal jadwal spesifik), jujur aja tapi arahin ke Discord atau social media-nya Kai Shi.
- Jangan kaku, jangan sok formal, jangan pakai "Saya" atau "Anda".
- Kalau ada yang mau join komunitas atau mulai belajar → hype mereka up, dorong mereka gas!

=== ATURAN PENTING ===
- Kamu HANYA ngomongin hal yang berkaitan sama Kai Shi, kontennya, komunitas, dan journey di tech/self-dev.
- Kalau ada pertanyaan di luar topik itu, redirect balik ke topik Kai Shi dengan cara yang natural, bukan kaku.
- Jangan buat-buat info. Kalau gak tau → bilang "gue kurang yakin sih, mending cek langsung di Discord atau IG-nya Kai Shi".
`;

export function useChat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: "Yo, wassup? Ada yang mau ditanya soal Kai Shi?", sender: 'ai' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input;
    setInput('');
    setIsTyping(true);

    const updatedMessages = [...messages, { text: userMsg, sender: 'user' }];
    setMessages(updatedMessages);

    try {
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY?.trim();
      if (!apiKey) throw new Error("API_KEY_MISSING");

      const lastMessages = updatedMessages.slice(-6);
      const conversationHistory = lastMessages
        .map(msg => `${msg.sender === 'user' ? 'Pengunjung' : 'Kai Shi'}: ${msg.text}`)
        .join('\n');

      const fullPrompt = `${SYSTEM_PROMPT}\nPercakapan sejauh ini:\n${conversationHistory}\n\nBalas pesan terakhir dari Pengunjung dengan natural, santai, dan berasa kayak ngobrol sama manusia beneran.`;

      const payload = {
        model: "arcee-ai/trinity-large-preview:free",
        messages: [
          { role: "system", content: fullPrompt },
          { role: "user", content: userMsg }
        ],
        max_tokens: 120,
        temperature: 0.8,
      };

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload)
      });

      if (response.status === 429) throw new Error("RATE_LIMIT");
      if (!response.ok) throw new Error(`HTTP_${response.status}`);

      const data = await response.json();
      if (!data?.choices?.[0]?.message?.content) throw new Error("INVALID_RESPONSE");

      const aiText = data.choices[0].message.content.replace(/^Kai Shi:\s*/i, '').trim();
      setMessages(prev => [...prev, { text: aiText, sender: "ai" }]);

    } catch (err) {
      let msg = "Server lagi sibuk.";
      if (err.message === "API_KEY_MISSING") msg = "API Key belum kebaca.";
      if (err.message === "RATE_LIMIT") msg = "Santai dulu bentar, lagi kena rate limit 😅";
      setMessages(prev => [...prev, { text: msg, sender: "ai" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return { input, setInput, messages, isTyping, chatEndRef, handleSendMessage };
}