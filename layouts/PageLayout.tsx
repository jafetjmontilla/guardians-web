'use client';

import Head from 'next/head';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-inherit">
      <Head>
        <title>{title} - Portal de Pagos</title>
        <meta name="description" content={description || 'Portal de Pagos'} />
      </Head>

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
} 