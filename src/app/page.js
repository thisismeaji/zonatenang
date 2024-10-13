// page.js
import Hero from '@/components/Hero';
import Head from 'next/head';

export const metadata = {
  title: 'Zonatenang.com: Tempat Nyaman Buat Kamu yang Suka Sendiri',
  description: 'Zonatenang.com, tempat Nyaman Buat Kamu yang Suka Sendiri. Temukan informasi seputar Tips dan Trik dengan fokus pada pengembangan diri yang tenang dan santai.'
};

export default function Home() {
  return (
    <>
      <main>
        <Hero/>
      </main>
    </>
  );
}
