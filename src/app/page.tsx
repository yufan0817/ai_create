'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BookOpen, Users, Award, ArrowRight, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import HeroBackground from '../components/HeroBackground';
import { getRandomKnowledge, KnowledgeItem } from '../data/knowledgeBase';

const HomePage = () => {
  const [todayKnowledge, setTodayKnowledge] = useState<KnowledgeItem | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setTodayKnowledge(getRandomKnowledge());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'AI唱段解析',
      description: '智能分析京剧唱腔，逐句拆解咬字与韵味',
      href: '/learn',
      color: 'text-palace-red',
      bgColor: 'bg-palace-red/10',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '角色体验馆',
      description: '与历史戏曲人物对话，感受经典魅力',
      href: '/chat',
      color: 'text-cyan-jade',
      bgColor: 'bg-cyan-jade/10',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: '知识闯关',
      description: '趣味答题测试，获取专属戏曲天赋证书',
      href: '/quiz',
      color: 'text-gold',
      bgColor: 'bg-gold/10',
    },
  ];

  return (
    <div className="min-h-screen relative bg-gradient-palace">
      <div className="bg-cloud-texture" />
      <div className="paper-texture fixed inset-0 pointer-events-none" />
      <div className="meander-pattern fixed inset-0 pointer-events-none" />
      
      <HeroBackground />

      <section className="max-w-5xl mx-auto px-6 pt-24 pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card-gold p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center text-gold border border-gold/30">
              <Lightbulb className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-gold font-serif-title text-sm">今日京剧小知识</span>
                <span className="text-xs text-rice-white/60 font-sans-text bg-gold/10 px-3 py-1 rounded-full">
                  {todayKnowledge?.category}
                </span>
              </div>
              <h4 className="text-rice-white font-serif-title mb-2">{todayKnowledge?.title}</h4>
              <p className="text-rice-white/70 font-sans-text text-sm leading-relaxed">
                {todayKnowledge?.content}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24 relative z-10 section-gradient">
        <div className="grid md:grid-cols-3 gap-8 py-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                href={feature.href}
                className="block p-8 glass-card-gold"
              >
                <div className={`w-16 h-16 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 ${feature.color} border border-gold/20`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-serif-title text-gold mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-rice-white/70 font-sans-text text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center py-12"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/learn"
              className="inline-flex items-center gap-3 px-14 py-5 btn-gradient-red-gold text-rice-white font-serif-title rounded-full text-lg"
            >
              立即体验
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          
          <p className="mt-8 text-rice-white/60 font-sans-text text-sm tracking-wide">
            让科技点亮国粹之美
          </p>
        </motion.div>
      </section>

      <footer className="border-t border-gold/15 py-12 relative z-10 bg-palace-red-dark/20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-rice-white/60 font-sans-text text-sm tracking-wide">
            梨园智境 - AI赋能国粹传承
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;