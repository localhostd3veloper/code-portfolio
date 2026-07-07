import type { Metadata } from 'next';
import { Inconsolata, Manrope } from 'next/font/google';

import './globals.css';

import {
  DEFAULT_DARK_THEME,
  DEFAULT_LIGHT_THEME,
  THEME_STORAGE_KEY,
  themes,
} from '@/constants/themes';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import MainLayout from '@/components/main-layout';

const themeInitScript = `(function(){try{var themes=${JSON.stringify(
  themes.map((theme) => theme.id),
)};var theme=localStorage.getItem('${THEME_STORAGE_KEY}');if(themes.indexOf(theme)===-1){theme=window.matchMedia('(prefers-color-scheme: dark)').matches?'${DEFAULT_DARK_THEME}':'${DEFAULT_LIGHT_THEME}'}document.documentElement.dataset.theme=theme}catch(e){}})()`;

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
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <MainLayout>
          {children}
          <Analytics />
          <SpeedInsights />
        </MainLayout>
      </body>
    </html>
  );
}
