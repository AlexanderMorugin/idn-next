import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';
import { Header } from '@/components';
// import { use } from 'react';
// import { Api } from '../../services/api-client';
// import { use } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// export const fetchNavs = async () => {
//   const res = await fetch('https://idn-next-jswp.vercel.app/api/cards/');
//   const data = await res.json();

//   return data;
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const slides = use(fetchNavs());
  
  return (
    <html lang='en'>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className='bg-background'>{children}</main>
      </body>
    </html>
  );
}
