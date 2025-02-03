import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import '@/styles/global.scss';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';

const notoSans = Noto_Sans({
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Micro Interactions',
    default: 'Micro Interactions',
  },
  description: 'Micro Interactions Sample Site.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={notoSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
