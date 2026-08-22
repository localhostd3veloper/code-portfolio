import type { Metadata, Viewport } from 'next';
import { Inconsolata, Manrope } from 'next/font/google';

import './globals.css';

import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from '@/constants/seo';
import {
  DEFAULT_DARK_THEME,
  DEFAULT_LIGHT_THEME,
  THEME_STORAGE_KEY,
  themes,
} from '@/constants/themes';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import JsonLd from '@/components/json-ld';
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  colorScheme: 'dark light',
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
        <JsonLd />
        <MainLayout>
          {children}
          <Analytics />
          <SpeedInsights />
        </MainLayout>
      </body>
    </html>
  );
}
