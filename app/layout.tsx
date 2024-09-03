import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'rsuite/dist/rsuite.min.css';
import 'rsuite/dist/rsuite-no-reset.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio Tony',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-w-screen max-w-screen min-h-screen max-h-screen">{children}</body>
    </html>
  );
}
