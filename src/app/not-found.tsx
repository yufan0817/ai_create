import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-ink flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-ink-black font-bold text-4xl">404</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">页面未找到</h1>
        <p className="text-gray-400 mb-8">您访问的页面不存在</p>
        <Link
          href="/"
          className="flex items-center justify-center text-gold hover:text-gold-light transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          返回首页
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
