'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Home, BookOpen, MessageCircle, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NextLink from 'next/link';
const Link = motion(NextLink);
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '首页', href: '/', icon: Home },
    { name: '唱段学习', href: '/learn', icon: BookOpen },
    { name: '角色体验', href: '/chat', icon: MessageCircle },
    { name: '知识闯关', href: '/quiz', icon: Trophy },
  ];

  const opacity = Math.min(scrollY / 100, 1);
  const glowIntensity = Math.min(scrollY / 150, 0.6);

  return (
    <motion.header
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrollY > 30 
          ? 'backdrop-blur-2xl shadow-2xl shadow-black/30' 
          : 'backdrop-blur-sm'
      }`}
      style={{
        background: `linear-gradient(180deg, rgba(74, 14, 14, ${0.9 + opacity * 0.1}) 0%, rgba(107, 20, 20, ${0.8 + opacity * 0.2}) 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              animate={{ 
                scale: scrollY > 30 ? [1, 1.04, 1] : [1, 1.02, 1],
                rotate: scrollY > 30 ? [0, 0.3, 0] : [0, 0.2, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden border transition-all duration-700"
              style={{
                borderColor: `rgba(212, 175, 55, ${0.2 + glowIntensity * 0.8})`,
                boxShadow: scrollY > 30 
                  ? `0 0 30px rgba(212, 175, 55, ${glowIntensity}), 0 0 60px rgba(212, 175, 55, ${glowIntensity * 0.5})` 
                  : 'none',
              }}
            >
              <Image 
                src="/logo.png" 
                alt="梨园智境" 
                width={48} 
                height={48}
                className="object-cover"
              />
              <motion.div
                animate={{ opacity: [glowIntensity * 0.3, glowIntensity * 0.6, glowIntensity * 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent"
              />
            </motion.div>
            <motion.span
              className="text-lg md:text-xl font-serif-title transition-all duration-500"
              style={{
                color: scrollY > 30 ? '#F5D76E' : '#D4AF37',
                textShadow: scrollY > 30 ? `0 0 20px rgba(212, 175, 55, ${glowIntensity})` : 'none',
              }}
            >
              梨园智境
            </motion.span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 md:space-x-10">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
              >
                <span className={`text-rice-white/70 hover:text-gold transition-all duration-400 font-sans-text text-sm md:text-base tracking-[0.15em] ${
                  scrollY > 30 ? 'text-rice-white/85' : ''
                }`}>
                  {item.name}
                </span>
                <motion.div
                  className="absolute -bottom-1.5 left-0 w-0 h-0.5"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.8), transparent)',
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.div
                  className="absolute -bottom-1.5 left-0 w-0 h-0.5"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(245, 215, 110, 0.4), transparent)',
                    filter: 'blur(2px)',
                  }}
                  whileHover={{ width: '120%', x: '-10%' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-rice-white/70 hover:text-gold transition-colors duration-300"
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
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-palace-red-dark/98 backdrop-blur-2xl border-t border-gold/15"
          >
            <nav className="flex flex-col px-6 py-5 space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-4 text-rice-white/70 hover:text-gold transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gold/5 font-sans-text border-b border-gold/5"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                  whileHover={{ x: 8 }}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="tracking-wider">{item.name}</span>
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