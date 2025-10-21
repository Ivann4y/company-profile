import './globals.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export const metadata = {
  title: 'Company Profile',
  description: 'Website Company Profile dibuat dengan Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
