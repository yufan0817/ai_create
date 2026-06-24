'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Scroll, BookOpen, User, MessageCircle, Zap, Sparkles, Target, Music } from 'lucide-react';
import { operaSongs, searchSongs, songCategories, OperaSong } from '../data/operaSongs';

interface AnalysisResult {
  playOrigin: string;
  characterIntro: string;
  translation: string;
  emotionAnalysis: string;
  knowledgePoints: string;
  performanceTips: string;
}

export default function LearnPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedSong, setSelectedSong] = useState<OperaSong | null>(null);
  const [customLyrics, setCustomLyrics] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [showCustomInput, setShowCustomInput] = useState(false);

  const filteredSongs = searchSongs(searchQuery, selectedCategory);

  const handleSelectSong = (song: OperaSong) => {
    setSelectedSong(song);
    setShowCustomInput(false);
    setAnalysisResult(null);
  };

  const handleAnalyze = async (lyrics: string) => {
    setIsAnalyzing(true);
    setAnalysisResult(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: `你是一位京剧专家，请分析以下京剧唱词：\n\n${lyrics}\n\n请从以下几个方面进行分析：\n1. 剧目出处：这首唱词来自哪部京剧作品\n2. 人物介绍：唱词中的角色是谁，背景如何\n3. 白话翻译：将唱词翻译成现代口语\n4. 情感分析：这段唱词表达了什么情感\n5. 京剧知识点：涉及哪些京剧知识\n6. 表演建议：演唱这段唱词需要注意什么`
            },
            {
              role: 'user',
              content: lyrics
            }
          ]
        })
      });

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content || '';
      
      const result: AnalysisResult = {
        playOrigin: '',
        characterIntro: '',
        translation: '',
        emotionAnalysis: '',
        knowledgePoints: '',
        performanceTips: ''
      };

      const sections: string[] = content.split('\n\n');
      sections.forEach((section: string) => {
        if (section.includes('剧目出处') || section.includes('出处')) {
          result.playOrigin = section.replace(/[#*]/g, '').replace(/剧目出处[\s：:]/, '').trim();
        } else if (section.includes('人物介绍') || section.includes('人物')) {
          result.characterIntro = section.replace(/[#*]/g, '').replace(/人物介绍[\s：:]/, '').trim();
        } else if (section.includes('白话翻译') || section.includes('翻译')) {
          result.translation = section.replace(/[#*]/g, '').replace(/白话翻译[\s：:]/, '').trim();
        } else if (section.includes('情感分析') || section.includes('情感')) {
          result.emotionAnalysis = section.replace(/[#*]/g, '').replace(/情感分析[\s：:]/, '').trim();
        } else if (section.includes('京剧知识点') || section.includes('知识点')) {
          result.knowledgePoints = section.replace(/[#*]/g, '').replace(/京剧知识点[\s：:]/, '').trim();
        } else if (section.includes('表演建议') || section.includes('建议')) {
          result.performanceTips = section.replace(/[#*]/g, '').replace(/表演建议[\s：:]/, '').trim();
        }
      });

      setAnalysisResult(result);
    } catch (error) {
      console.error('分析失败:', error);
      setAnalysisResult({
        playOrigin: '无法识别剧目',
        characterIntro: '无法识别角色',
        translation: '分析失败，请重试',
        emotionAnalysis: '',
        knowledgePoints: '',
        performanceTips: ''
      });
    }

    setIsAnalyzing(false);
  };

  const handleAnalyzeSong = () => {
    if (selectedSong) {
      handleAnalyze(selectedSong.lyrics);
    }
  };

  const handleAnalyzeCustom = () => {
    if (customLyrics.trim()) {
      handleAnalyze(customLyrics);
    }
  };

  useEffect(() => {
    if (selectedSong) {
      handleAnalyze(selectedSong.lyrics);
    }
  }, [selectedSong]);

  return (
    <div className="min-h-screen relative pt-24 pb-20 px-6 bg-gradient-palace">
      <div className="bg-cloud-texture" />
      <div className="bg-gold-glow" />
      <div className="paper-texture fixed inset-0 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 section-gradient py-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Scroll className="w-8 h-8 text-gold" />
            <h1 className="text-4xl md:text-5xl font-serif-title text-gradient-gold">
              唱段解析
            </h1>
            <Scroll className="w-8 h-8 text-gold" />
          </div>
          <p className="text-rice-white/70 font-sans-text text-lg leading-relaxed">
            AI智能分析京剧唱腔，逐句拆解咬字与韵味
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="card-traditional rounded-lg overflow-hidden">
              <div className="scroll-header">
                <span className="flex items-center justify-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  京剧唱段库
                </span>
              </div>
              <div className="paper-content">
                <div className="flex gap-4 mb-6">
                  <button
                    onClick={() => setShowCustomInput(false)}
                    className={`flex-1 py-3 rounded-lg font-serif-title transition-all ${
                      !showCustomInput 
                        ? 'bg-palace-red/20 text-palace-red border border-palace-red/50' 
                        : 'bg-white/[0.05] text-gray-600 border border-transparent'
                    }`}
                  >
                    <Scroll className="w-5 h-5 inline mr-2" />
                    唱段库
                  </button>
                  <button
                    onClick={() => setShowCustomInput(true)}
                    className={`flex-1 py-3 rounded-lg font-serif-title transition-all ${
                      showCustomInput 
                        ? 'bg-palace-red/20 text-palace-red border border-palace-red/50' 
                        : 'bg-white/[0.05] text-gray-600 border border-transparent'
                    }`}
                  >
                    <User className="w-5 h-5 inline mr-2" />
                    自定义输入
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {showCustomInput ? (
                    <motion.div
                      key="custom"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <textarea
                        value={customLyrics}
                        onChange={(e) => setCustomLyrics(e.target.value)}
                        placeholder="请输入京剧唱词，例如：我本是卧龙岗散淡的人..."
                        className="w-full h-40 bg-white/[0.1] rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none font-song resize-none border border-gold/30"
                      />
                      <motion.button
                        onClick={handleAnalyzeSong}
                        disabled={!selectedSong || isAnalyzing}
                        className="w-full mt-6 btn-gold font-serif-title py-3 rounded-lg disabled:opacity-50"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isAnalyzing ? '分析中...' : '开始解析'}
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="library"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className="flex gap-2 mb-4">
                        <div className="flex-1 relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="搜索唱段..."
                            className="w-full bg-white/[0.1] rounded-lg pl-10 pr-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none font-song border border-gold/30"
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {songCategories.map((category) => (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-lg text-sm font-sans-text transition-all ${
                              selectedCategory === category
                                ? 'bg-gold/30 text-palace-red border border-gold/50'
                                : 'bg-white/[0.1] text-gray-600 border border-transparent hover:border-gold/30'
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>

                      <div className="space-y-3 max-h-72 overflow-y-auto">
                        {filteredSongs.map((song) => (
                          <motion.button
                            key={song.id}
                            onClick={() => handleSelectSong(song)}
                            className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                              selectedSong?.id === song.id
                                ? 'bg-palace-red/15 border-2 border-palace-red/50'
                                : 'bg-white/[0.05] border border-transparent hover:border-gold/30'
                            }`}
                          >
                            <p className={`font-serif-title ${
                              selectedSong?.id === song.id ? 'text-palace-red' : 'text-gray-800'
                            }`}>
                              {song.title}
                            </p>
                            <p className="text-sm text-gray-500 mt-1 font-sans-text">
                              《{song.play}》- {song.character}
                            </p>
                          </motion.button>
                        ))}
                      </div>

                      {selectedSong && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 p-4 bg-gold/10 rounded-lg border border-gold/30"
                        >
                          <p className="text-sm text-gray-500 font-song mb-2">唱词预览：</p>
                          <p className="text-gray-700 font-kai text-sm leading-relaxed line-clamp-3">
                            {selectedSong.lyrics}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="card-traditional rounded-lg overflow-hidden">
              <div className="scroll-header">
                <span className="flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  分析结果
                </span>
              </div>
              <div className="paper-content">
                {isAnalyzing ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-96"
                  >
                    <motion.div
                      className="w-12 h-12 rounded-full border-4 border-palace-red border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    <p className="mt-4 text-gray-500 font-song">AI正在分析...</p>
                  </motion.div>
                ) : analysisResult ? (
                  <div className="space-y-4 max-h-[500px] overflow-y-auto">
                    <AnalysisCard
                      icon={<BookOpen className="w-5 h-5" />}
                      title="剧目出处"
                      content={analysisResult.playOrigin || '未识别'}
                    />
                    <AnalysisCard
                      icon={<User className="w-5 h-5" />}
                      title="人物介绍"
                      content={analysisResult.characterIntro || '未识别'}
                    />
                    <AnalysisCard
                      icon={<MessageCircle className="w-5 h-5" />}
                      title="白话翻译"
                      content={analysisResult.translation || '未识别'}
                    />
                    <AnalysisCard
                      icon={<Sparkles className="w-5 h-5" />}
                      title="情感分析"
                      content={analysisResult.emotionAnalysis || '未识别'}
                    />
                    <AnalysisCard
                      icon={<Target className="w-5 h-5" />}
                      title="京剧知识点"
                      content={analysisResult.knowledgePoints || '未识别'}
                    />
                    <AnalysisCard
                      icon={<Music className="w-5 h-5" />}
                      title="表演建议"
                      content={analysisResult.performanceTips || '未识别'}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-96 text-gray-400">
                    <Zap className="w-16 h-16 mb-4 opacity-30" />
                    <p className="font-song">请选择唱段或输入唱词</p>
                    <p className="font-song text-sm mt-2">AI将为您解析京剧之美</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function AnalysisCard({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/[0.05] rounded-lg p-4 border border-gold/20"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-lg bg-palace-red/10 flex items-center justify-center text-palace-red">
          {icon}
        </div>
        <span className="text-palace-red font-kai font-bold text-sm">{title}</span>
      </div>
      <p className="text-gray-700 font-song text-sm leading-relaxed">
        {content}
      </p>
    </motion.div>
  );
}
