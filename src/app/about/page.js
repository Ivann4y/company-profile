// app/about/page.js
'use client'; // ⚠️ Wajib untuk komponen interaktif di App Router

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Animasi saat scroll (opsional: bisa dihapus jika tidak ingin pakai framer-motion)
  const controls = useAnimation();
  const missionItems = [
    "Mengembangkan teknologi pertanian ramah lingkungan",
    "Memberdayakan petani lokal melalui pendampingan dan edukasi",
    "Menghasilkan produk pangan organik berkualitas tinggi",
    "Membangun ekosistem pertanian yang berkelanjutan"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('section');
      if (hero && window.scrollY > 100) {
        controls.start({ opacity: 1, y: 0 });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Tentang Perusahaan Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Kami percaya bahwa pertanian berkelanjutan adalah kunci masa depan pangan yang sehat dan lingkungan yang lestari.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Visi</h2>
              <p className="text-gray-700 leading-relaxed">
                Menjadi pelopor pertanian organik berkelanjutan yang menginspirasi generasi muda untuk kembali mencintai alam dan menjaga ketahanan pangan nasional.
              </p>
            </motion.div>

            {/* Mission - Accordion */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Misi</h2>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-left w-full mb-3 text-blue-600 font-medium flex items-center"
              >
                {isExpanded ? 'Sembunyikan' : 'Lihat poin misi kami'} 
                <span className="ml-2 transition-transform duration-200" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  ▼
                </span>
              </button>

              {isExpanded && (
                <ul className="text-gray-700 list-disc pl-5 space-y-2 leading-relaxed">
                  {missionItems.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* History / Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Sejarah Kami</h2>
          <div className="relative pl-8 border-l-2 border-green-300 ml-4">
            {[
              { year: "2018", title: "Berdiri di Desa Sukamaju", desc: "Awal mula Ladang Lima dimulai dari lahan seluas 1 hektar." },
              { year: "2020", title: "Ekspansi ke 5 Provinsi", desc: "Kolaborasi dengan komunitas petani organik di Jawa dan Bali." },
              { year: "2022", title: "Peluncuran Brand Nasional", desc: "Produk kami mulai tersedia di pasar modern dan e-commerce." },
              { year: "2024", title: "Pusat Edukasi Pertanian", desc: "Membangun pusat pelatihan untuk generasi muda petani." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="mb-8 relative"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute -left-10 w-6 h-6 rounded-full bg-white border-4 border-green-500"></div>
                <div className="ml-2">
                  <span className="inline-block px-3 py-1 text-sm font-semibold bg-green-100 text-green-800 rounded-full">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ingin Bergabung dalam Perubahan?</h2>
          <p className="text-gray-600 mb-6">
            Kami selalu terbuka untuk kolaborasi, magang, atau sekadar ngobrol tentang pertanian berkelanjutan.
          </p>
          <button
            onClick={() => {
              setIsClicked(true);
              setTimeout(() => setIsClicked(false), 300);
            }}
            className={`px-6 py-3 font-medium rounded-lg transition-all duration-200 ${
              isClicked
                ? 'bg-green-700 scale-95'
                : 'bg-green-600 hover:bg-green-700 hover:scale-105'
            } text-white`}
          >
            Hubungi Kami
          </button>
        </div>
      </section>
    </div>
  );
}