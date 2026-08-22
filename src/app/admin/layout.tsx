import { ReactNode } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { isDev } from '@/utils/dev-guard';

import AdminNav from './components/admin-nav';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  if (!isDev()) notFound();

  return (
    <div className="mx-auto w-full max-w-4xl p-6">
      <h1 className="text-2xl font-semibold">Manage Portfolio Data</h1>
      <p className="text-muted mt-1 text-sm">
        Local-only. Saves write directly to src/data/ and public/projects/.
      </p>
      <AdminNav />
      {children}
    </div>
  );
}
