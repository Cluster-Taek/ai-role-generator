import './globals.css';
import CoreProvider from '@/contexts/core-provider';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import type { Metadata } from 'next';

dayjs.locale('ko');

export const metadata: Metadata = {
  title: 'AI Role Generator',
  description: 'Generate AI role descriptions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans`}>
        <CoreProvider>{children}</CoreProvider>
      </body>
    </html>
  );
}
