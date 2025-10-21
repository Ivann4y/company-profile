"use client";
import Image from "next/image";
import { motion } from "framer-motion";

<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="text-5xl font-bold text-teal-700"
>
  Selamat Datang di <span className="text-teal-500">Company Profile</span>
</motion.h1>

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-teal-700 drop-shadow-sm">
          Selamat Datang di <span className="text-teal-500">Company Profile</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
          Kami berkomitmen membangun masa depan berkelanjutan melalui inovasi dan dedikasi untuk lingkungan.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="/about"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
          >
            Tentang Kami
          </a>
          <a
            href="/contact"
            className="border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition"
          >
            Hubungi Kami
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Mengapa Memilih Kami?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-teal-100 p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition">
            <Image src="/icons/innovation.svg" alt="Inovasi" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-teal-700">Inovasi Berkelanjutan</h3>
            <p className="mt-2 text-gray-600">Kami terus berinovasi untuk menciptakan solusi yang ramah lingkungan.</p>
          </div>
          <div className="bg-teal-100 p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition">
            <Image src="/icons/teamwork.svg" alt="Kolaborasi" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-teal-700">Kolaborasi Tim</h3>
            <p className="mt-2 text-gray-600">Tim profesional kami siap membantu mencapai tujuan Anda.</p>
          </div>
          <div className="bg-teal-100 p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition">
            <Image src="/icons/eco.svg" alt="Ramah Lingkungan" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-teal-700">Ramah Lingkungan</h3>
            <p className="mt-2 text-gray-600">Kami peduli terhadap bumi dan terus berupaya menjaga keseimbangannya.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 bg-teal-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Bergabunglah Bersama Kami!</h2>
        <p className="text-lg mb-6">Mari bersama menciptakan perubahan positif untuk masa depan yang lebih hijau 🌿</p>
        <a
          href="/contact"
          className="bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Kontak Kami
        </a>
      </section>
    </main>
  );
}
