import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Label Make AI',
  description: 'AI supplement label and claim checker prototype',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
