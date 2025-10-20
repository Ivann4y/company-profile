// Lokasi: src/app/contact/page.js

"use client"; // <--- PENTING! Animasi butuh 'use client'

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGraduationCap,
} from 'react-icons/fa';
import { motion } from 'framer-motion'; // <--- IMPORT FRAMER MOTION

export default function HalamanKontak() {
  
  // Definisikan varian animasi untuk "fade in + slide up"
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Varian untuk container 3 card (untuk stagger)
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // <-- Jeda animasi antar card 0.2 detik
      },
    },
  };

  // Varian untuk 1 card
  const cardItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="bg-white min-h-screen">
      {/* --- BAGIAN ATAS: HEADER --- */}
      <div className="relative bg-gray-200 h-96 flex items-center justify-center overflow-hidden">
        {/* Placeholder untuk gambar */}
        
        <motion.div
          className="relative z-10 text-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
          initial="hidden" // Mulai dari state 'hidden'
          whileInView="visible" // Animasikan ke state 'visible' saat muncul di layar
          viewport={{ once: true }} // Hanya animasikan sekali
          variants={fadeInVariants} // Gunakan varian yang kita definisikan
        >
          <FaGraduationCap className="text-sidang-blue text-5xl mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Sistem Pendaftaran Sidang
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Kami siap membantu Anda dalam proses pendaftaran dan informasi sidang.
          </p>
        </motion.div>
      </div>

      {/* --- BAGIAN TENGAH: TIGA KOLOM INFO KONTAK --- */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger saat 20% card terlihat
          variants={cardContainerVariants} // Gunakan varian container
        >
          {/* Kartu Email */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer" // <-- EFEK HOVER TAILWIND
            variants={cardItemVariants} // Varian untuk tiap item
          >
            <FaEnvelope className="text-sidang-blue text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Administrasi</h3>
            <p className="text-gray-600 mb-4">
              akademik@poltekastra.ac.id
            </p>
            <a
              href="mailto:akademik@poltekastra.ac.id"
              className="text-sidang-blue hover:text-blue-700 font-medium flex items-center group" // <-- Tambah 'group'
            >
              Kirim Email
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" // <-- EFEK HOVER TAILWIND
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </motion.div>

          {/* Kartu Alamat */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer" // <-- EFEK HOVER TAILWIND
            variants={cardItemVariants} // Varian untuk tiap item
          >
            <FaMapMarkerAlt className="text-sidang-blue text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Lokasi Sekretariat</h3>
            <p className="text-gray-600 mb-4">
              Gedung Rektorat Lt. 2, Ruang 204, Kampus Politeknik Astra, Jakarta
            </p>
            <a
              href="https://maps.app.goo.gl/YourCampusLocation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sidang-blue hover:text-blue-700 font-medium flex items-center group" // <-- Tambah 'group'
            >
              Lihat di Peta
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" // <-- EFEK HOVER TAILWIND
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </motion.div>

          {/* Kartu Telepon */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer" // <-- EFEK HOVER TAILWIND
            variants={cardItemVariants} // Varian untuk tiap item
          >
            <FaPhoneAlt className="text-sidang-blue text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Telepon (Jam Kerja)</h3>
            <p className="text-gray-600 mb-4">
              (021) 1234 5678 ext. 112
              <br />
              Senin - Jumat: 08.00 - 16.00 WIB
            </p>
            <a
              href="tel:+622112345678"
              className="text-sidang-blue hover:text-blue-700 font-medium flex items-center group" // <-- Tambah 'group'
            >
              Hubungi Sekarang
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" // <-- EFEK HOVER TAILWD
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* --- BAGIAN BAWAH: FORMULIR PESAN --- */}
      <motion.div
        className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Formulir Bantuan & Pertanyaan</h2>
          <p className="mt-2 text-lg text-gray-600">
            Isi formulir di bawah ini, dan kami akan segera menghubungi Anda.
          </p>
        </div>

        <form action="#" method="POST" className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
          {/* ... (Isi formulir tetap sama) ... */}
          {/* Nama Lengkap Mahasiswa */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nama Lengkap Mahasiswa
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Contoh: Budi Santoso"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sidang-blue focus:ring-sidang-blue sm:text-sm"
            />
          </div>

          {/* NIM */}
          <div>
            <label
              htmlFor="nim"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              NIM
            </label>
            <input
              type="text"
              name="nim"
              id="nim"
              placeholder="Contoh: 202100123"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sidang-blue focus:ring-sidang-blue sm:text-sm"
            />
          </div>

          {/* Email Mahasiswa */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Mahasiswa
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Contoh: budi.s@student.poltekastra.ac.id"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sidang-blue focus:ring-sidang-blue sm:text-sm"
            />
          </div>

          {/* Subjek Pesan */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subjek Pesan
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Contoh: Pertanyaan Jadwal Sidang, Kendala Login"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sidang-blue focus:ring-sidang-blue sm:text-sm"
            />
          </div>

          {/* Pesan Anda */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Pesan Anda
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Tuliskan detail pertanyaan atau kendala Anda di sini..."
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sidang-blue focus:ring-sidang-blue sm:text-sm"
            />
          </div>

          {/* Tombol Submit */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sidang-blue 
                         hover:bg-opacity-90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sidang-blue
                         transition-all duration-300 transform " // <-- EFEK HOVER TAILWIND
            >
              Kirim Pertanyaan
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}