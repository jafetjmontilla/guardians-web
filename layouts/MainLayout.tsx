'use client';

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-blue-900 text-gray-900 dark:text-gray-100 *transition-colors">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
} 