import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import '@/styles/globals.scss';
import { PT_Serif, React } from 'next/font/google';

const PTSerifFont = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={PTSerifFont.className}>
        <div className="wrapper">
          <Header />
          <main>
            <div className="container">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
