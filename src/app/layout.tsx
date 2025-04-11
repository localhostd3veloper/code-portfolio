import React from 'react';
import type { Metadata } from 'next';
import { Inconsolata, Manrope } from 'next/font/google';

import './globals.css';

import { SpeedInsights } from '@vercel/speed-insights/next';

import MainLayout from '@/components/main-layout';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

const inconsolata = Inconsolata({
  variable: '--font-inconsolata',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio: Gautam Anand',
  description: 'ENGINEER | SOFTWARE DEVELOPER',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${inconsolata.variable} bg-background text-foreground antialiased`}
      >
        <MainLayout>
          {children}
          <SpeedInsights />
        </MainLayout>
      </body>
    </html>
  );
}
