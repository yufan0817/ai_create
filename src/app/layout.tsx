import type { Metadata } from 'next';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: '梨园智境 - AI赋能国粹传承',
  description: '融合AI、传统文化、游戏化学习与社交互动的下一代京剧学习平台',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="zh-CN">
      <body className="bg-gradient-palace">
        <Header />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
