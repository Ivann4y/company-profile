"use client";

import Link from "next/link"; // ⬅️ Tambahkan ini di atas!

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kolom 1: Deskripsi */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Company Profile</h2>
          <p className="text-gray-400 leading-relaxed">
            Kami berkomitmen untuk menghadirkan inovasi yang berkelanjutan dan ramah lingkungan
            demi masa depan yang lebih hijau 🌿.
          </p>
        </div>

        {/* Kolom 2: Navigasi */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Navigasi</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-teal-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-teal-400 transition">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-teal-400 transition">
                Produk
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal-400 transition">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Kontak Kami</h3>
          <ul className="space-y-2 text-gray-400">
            <li>📍 Bekasi, Indonesia</li>
            <li>📧 info@company.com</li>
            <li>📞 +62 812 3456 7890</li>
          </ul>
        </div>
      </div>

      {/* Garis bawah */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Company Profile. All rights reserved.
      </div>
    </footer>
  );
}
