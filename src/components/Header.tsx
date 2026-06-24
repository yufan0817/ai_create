'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Home, BookOpen, MessageCircle, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '首页', href: '/', icon: Home },
    { name: '唱段学习', href: '/learn', icon: BookOpen },
    { name: '角色体验', href: '/chat', icon: MessageCircle },
    { name: '知识闯关', href: '/quiz', icon: Trophy },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-palace-red/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-gold/30">
              <Image 
                src="/logo.png" 
                alt="梨园智境" 
                width={40} 
                height={40}
                className="object-cover"
              />
            </div>
            <span className="text-xl font-serif-title text-gold">
              梨园智境
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-rice-white/80 hover:text-gold transition-colors font-song"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-rice-white/80 hover:text-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-palace-red/95 backdrop-blur-md border-t border-gold/20"
          >
            <nav className="flex flex-col px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-rice-white/80 hover:text-gold transition-colors py-2 font-song"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
