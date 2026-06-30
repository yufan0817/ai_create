'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import MouseEffects from '@/components/MouseEffects';
import './globals.css';

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <html lang="zh-CN">
      <body className="bg-gradient-palace">
        <Header />
        <MouseEffects />
        <main className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, filter: 'blur(12px)', scale: 0.98 }}
              animate={{ opacity: 1, filter: 'blur(0)', scale: 1 }}
              exit={{ opacity: 0, filter: 'blur(8px)', scale: 0.99 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;