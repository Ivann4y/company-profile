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
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* --- BAGIAN ATAS: HEADER --- */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 h-96 flex items-center justify-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-30"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white bg-opacity-15 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-25 rounded-full blur-lg"></div>
        
        <motion.div
          className="relative z-10 text-center bg-white p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto border border-blue-200"
          initial="hidden" // Mulai dari state 'hidden'
          whileInView="visible" // Animasikan ke state 'visible' saat muncul di layar
          viewport={{ once: true }} // Hanya animasikan sekali
          variants={fadeInVariants} // Gunakan varian yang kita definisikan
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6">
            <FaGraduationCap className="text-white text-3xl" />
          </div>
          <h1 className="text-4xl font-extrabold text-blue-900 sm:text-5xl">
            Sistem Pendaftaran Sidang
          </h1>
          <p className="mt-4 text-xl text-blue-700">
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
            className="bg-white p-8 rounded-2xl shadow-lg border border-blue-200 flex flex-col items-center text-center
                       hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer group" // <-- EFEK HOVER TAILWIND
            variants={cardItemVariants} // Varian untuk tiap item
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaEnvelope className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Email Administrasi</h3>
            <p className="text-blue-700 mb-6 font-medium">
              akademik@poltekastra.ac.id
            </p>
            <a
              href="mailto:akademik@poltekastra.ac.id"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl" // <-- Tambah 'group'
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
            className="bg-blue-50 p-8 rounded-2xl shadow-lg border border-blue-200 flex flex-col items-center text-center
                       hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer group" // <-- EFEK HOVER TAILWIND
            variants={cardItemVariants} // Varian untuk tiap item
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaMapMarkerAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Lokasi Sekretariat</h3>
            <p className="text-blue-700 mb-6 font-medium">
              Gedung Rektorat Lt. 2, Ruang 204, Kampus Politeknik Astra, Jakarta
            </p>
            <a
              href="https://maps.app.goo.gl/YourCampusLocation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl" // <-- Tambah 'group'
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
            className="bg-white p-8 rounded-2xl shadow-lg border border-blue-200 flex flex-col items-center text-center
                       hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer group" // <-- EFEK HOVER TAILWIND
            variants={cardItemVariants} // Varian untuk tiap item
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaPhoneAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Telepon (Jam Kerja)</h3>
            <p className="text-blue-700 mb-6 font-medium">
              (021) 1234 5678 ext. 112
              <br />
              Senin - Jumat: 08.00 - 16.00 WIB
            </p>
            <a
              href="tel:+622112345678"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-semibold rounded-full hover:from-blue-800 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl" // <-- Tambah 'group'
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-blue-900">Formulir Bantuan & Pertanyaan</h2>
          <p className="mt-4 text-lg text-blue-700">
            Isi formulir di bawah ini, dan kami akan segera menghubungi Anda.
          </p>
        </div>

        <form action="#" method="POST" className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-200">
          {/* ... (Isi formulir tetap sama) ... */}
          {/* Nama Lengkap Mahasiswa */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-blue-900 mb-2"
            >
              Nama Lengkap Mahasiswa
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Contoh: Budi Santoso"
              className="block w-full px-4 py-3 rounded-xl border-2 border-blue-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white hover:border-blue-300"
            />
          </div>

          {/* NIM */}
          <div>
            <label
              htmlFor="nim"
              className="block text-sm font-semibold text-blue-900 mb-2"
            >
              NIM
            </label>
            <input
              type="text"
              name="nim"
              id="nim"
              placeholder="Contoh: 202100123"
              className="block w-full px-4 py-3 rounded-xl border-2 border-blue-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white hover:border-blue-300"
            />
          </div>

          {/* Email Mahasiswa */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-blue-900 mb-2"
            >
              Email Mahasiswa
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Contoh: budi.s@student.poltekastra.ac.id"
              className="block w-full px-4 py-3 rounded-xl border-2 border-blue-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white hover:border-blue-300"
            />
          </div>

          {/* Subjek Pesan */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-blue-900 mb-2"
            >
              Subjek Pesan
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Contoh: Pertanyaan Jadwal Sidang, Kendala Login"
              className="block w-full px-4 py-3 rounded-xl border-2 border-blue-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white hover:border-blue-300"
            />
          </div>

          {/* Pesan Anda */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-blue-900 mb-2"
            >
              Pesan Anda
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Tuliskan detail pertanyaan atau kendala Anda di sini..."
              className="block w-full px-4 py-3 rounded-xl border-2 border-blue-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white hover:border-blue-300 resize-none"
            />
          </div>

          {/* Tombol Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 
                         hover:from-blue-600 hover:to-blue-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200
                         transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group" // <-- EFEK HOVER TAILWIND
            >
              <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
              Kirim Pertanyaan
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}