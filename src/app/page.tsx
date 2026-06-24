'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BookOpen, Users, Award, ArrowRight, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getRandomKnowledge, KnowledgeItem } from '../data/knowledgeBase';

const HomePage = () => {
  const [todayKnowledge, setTodayKnowledge] = useState<KnowledgeItem | null>(null);

  useEffect(() => {
    setTodayKnowledge(getRandomKnowledge());
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
      <div className="bg-gold-glow" />
      <div className="cloud-pattern fixed inset-0 pointer-events-none opacity-30" />
      
      <div className="absolute top-0 left-1/4 w-96 h-64 opacity-20">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <path 
            d="M20 50 Q40 20 70 30 Q100 40 110 50 Q120 60 140 50 Q160 40 180 50" 
            fill="none" 
            stroke="#D4AF37" 
            strokeWidth="2"
            className="animate-pulse"
          />
          <path 
            d="M40 60 Q60 30 90 45 Q120 60 130 50 Q140 40 160 55" 
            fill="none" 
            stroke="#D4AF37" 
            strokeWidth="1.5"
            className="animate-pulse"
            style={{animationDelay: '0.5s'}}
          />
        </svg>
      </div>

      <div className="absolute top-0 right-1/4 w-80 h-48 opacity-15">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <path 
            d="M0 40 Q30 10 60 25 Q90 40 100 30 Q110 20 130 35 Q150 50 170 40" 
            fill="none" 
            stroke="#D4AF37" 
            strokeWidth="2"
            className="animate-pulse"
            style={{animationDelay: '1s'}}
          />
        </svg>
      </div>

      <div className="mask-outline top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30" />
      
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-block relative">
              <motion.div
                animate={{ y: [-10, -20, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-32 h-32 md:w-44 md:h-44 rounded-xl overflow-hidden border-4 border-gold shadow-2xl gold-glow"
              >
                <Image 
                  src="/logo.png" 
                  alt="梨园智境" 
                  width={176} 
                  height={176}
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute -inset-4 bg-gold/10 rounded-2xl blur-xl -z-10" />
            </div>
          </motion.div>
          
          <h1 className="text-7xl md:text-9xl font-serif-title text-gradient-gold mb-6">
            梨园智境
          </h1>
          
          <p className="text-2xl md:text-3xl text-rice-white font-song max-w-2xl mx-auto mb-4 font-light tracking-wide">
            AI赋能国粹传承
          </p>
          
          <p className="text-lg md:text-xl text-rice-white/70 font-song max-w-xl mx-auto text-lg leading-relaxed">
            让京剧学习走进新时代
          </p>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-traditional rounded-lg p-6 mb-12"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-gold font-kai font-bold text-sm">今日京剧小知识</span>
                <span className="text-xs text-rice-white/60 font-song bg-gold/10 px-2 py-1 rounded">
                  {todayKnowledge?.category}
                </span>
              </div>
              <h4 className="text-rice-white font-kai font-bold mb-2">{todayKnowledge?.title}</h4>
              <p className="text-rice-white/70 font-song text-sm leading-relaxed">
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
                className="block p-8 card-traditional"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 ${feature.color} backdrop-blur-sm border border-gold/20`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-kai font-bold text-gold mb-3 tracking-wide">
                  {feature.title}
                </h3>
                
                <p className="text-rice-white/70 font-song text-sm leading-relaxed">
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
              className="inline-flex items-center gap-3 px-12 py-5 btn-gradient-red-gold text-rice-white font-kai font-bold rounded-full text-lg"
            >
              立即体验
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          
          <p className="mt-8 text-rice-white/60 font-song text-sm tracking-wide">
            让科技点亮国粹之美
          </p>
        </motion.div>
      </section>

      <footer className="border-t border-gold/20 py-12 relative z-10 bg-palace-red-dark/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-rice-white/60 font-song text-sm tracking-wide">
            梨园智境 - AI赋能国粹传承
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
