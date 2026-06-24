'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Send, MessageCircle, User, Lightbulb } from 'lucide-react';
import { characters, getCharacterPrompt, Character } from '../data/characters';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
}

export default function ChatPage() {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const currentCharacter = characters.find(c => c.id === selectedCharacter);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSelectCharacter = (characterId: string) => {
    setSelectedCharacter(characterId);
    setMessages([]);
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const systemPrompt = currentCharacter ? getCharacterPrompt(currentCharacter) : '';
      
      const history = messages.map(m => ({
        role: m.isUser ? 'user' : 'assistant',
        content: m.content
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemPrompt },
            ...history,
            { role: 'user', content: inputValue }
          ]
        })
      });

      const data = await response.json();
      const aiContent = data.choices?.[0]?.message?.content || '暂无回答';

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiContent,
        isUser: false
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('对话失败:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: '网络异常，请稍后重试',
        isUser: false
      };
      setMessages(prev => [...prev, errorMessage]);
    }

    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen relative pt-24 pb-20 px-6 bg-gradient-palace">
      <div className="bg-cloud-texture" />
      <div className="bg-gold-glow" />
      
      <div className="absolute top-20 left-0 right-0 h-32 stage-curtain opacity-50" />
      
      <div className="absolute top-24 left-8 opacity-30">
        <div className="relative">
          <div className="w-4 h-8 bg-palace-red-dark rounded-full mx-auto" />
          <div className="w-12 h-16 bg-gradient-to-b from-red-500 to-red-700 rounded-lg mt-2 lantern-glow" />
          <div className="w-14 h-2 bg-palace-red-dark rounded-full mx-auto -mt-1" />
        </div>
      </div>
      
      <div className="absolute top-24 right-8 opacity-30">
        <div className="relative">
          <div className="w-4 h-8 bg-palace-red-dark rounded-full mx-auto" />
          <div className="w-12 h-16 bg-gradient-to-b from-red-500 to-red-700 rounded-lg mt-2 lantern-glow" />
          <div className="w-14 h-2 bg-palace-red-dark rounded-full mx-auto -mt-1" />
        </div>
      </div>

      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 opacity-10">
        <svg viewBox="0 0 400 100" className="w-96 h-24">
          <path d="M0 100 L50 60 L80 70 L120 50 L150 65 L200 40 L250 65 L280 50 L320 70 L350 60 L400 100 Z" fill="#8B1E1E" />
          <rect x="180" y="20" width="40" height="60" fill="#A52A2A" />
          <rect x="185" y="25" width="30" height="50" fill="#D4AF37" />
          <path d="M195 25 L195 75 M205 25 L205 75" stroke="#8B1E1E" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          {!selectedCharacter ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12 section-gradient py-12"
              >
                <div className="inline-flex items-center gap-3 mb-6">
                  <MessageCircle className="w-8 h-8 text-gold" />
                  <h1 className="text-4xl md:text-5xl font-kai font-bold text-gradient-gold tracking-wide">
                    角色体验
                  </h1>
                  <MessageCircle className="w-8 h-8 text-gold" />
                </div>
                <p className="text-rice-white/70 font-song text-lg leading-relaxed">
                  与经典戏曲人物对话，感受历史魅力
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {characters.map((character) => (
                  <motion.button
                    key={character.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={() => handleSelectCharacter(character.id)}
                    className="group card-traditional rounded-lg overflow-hidden"
                    whileHover={{ y: -4 }}
                  >
                    <div className="aspect-square relative flex items-center justify-center bg-gradient-to-br from-palace-red/30 to-palace-red-dark/30">
                      <div className="absolute inset-0 border-b-2 border-gold/30" />
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-kai font-bold transition-transform group-hover:scale-110 backdrop-blur-sm border-2 border-gold/30"
                        style={{ backgroundColor: `${character.color}20`, color: character.color }}
                      >
                        {character.name[0]}
                      </div>
                      <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-gold/50" />
                    </div>
                    <div className="p-4 text-center bg-white/[0.05]">
                      <h3 className="font-kai font-bold text-gold tracking-wide text-sm">{character.name}</h3>
                      <p className="text-xs text-rice-white/60 font-song mt-1">{character.title}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => {
                  setSelectedCharacter(null);
                  setMessages([]);
                }}
                className="flex items-center text-rice-white/70 hover:text-gold transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="font-song">返回选择</span>
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-traditional rounded-lg overflow-hidden"
              >
                <div className="scroll-header">
                  <div className="flex items-center justify-center gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-kai font-bold border border-gold/50"
                      style={{ backgroundColor: `${currentCharacter?.color}20`, color: currentCharacter?.color }}
                    >
                      {currentCharacter?.name[0]}
                    </div>
                    <div className="text-center">
                      <h3 className="font-kai font-bold text-lg">{currentCharacter?.name}</h3>
                      <p className="text-xs text-rice-white/60 font-song">{currentCharacter?.title}</p>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  </div>
                </div>

                <div className="paper-content">
                  <div className="flex flex-col h-[450px]">
                    <div className="flex-1 overflow-y-auto p-6 space-y-4">
                      {messages.length === 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex flex-col items-center justify-center h-full text-gray-400"
                        >
                          <MessageCircle className="w-16 h-16 mb-4 opacity-30" />
                          <p className="font-song">开始与{currentCharacter?.name}对话</p>
                          <p className="font-song text-sm mt-2">问问他关于京剧的故事</p>
                        </motion.div>
                      )}

                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[70%] rounded-lg p-4 ${
                              message.isUser
                                ? 'bg-palace-red/30 border border-palace-red/50'
                                : 'bg-rice-yellow/80 border border-gold/30'
                            }`}
                          >
                            <p className={`font-song ${message.isUser ? 'text-rice-white' : 'text-gray-800'}`}>
                              {message.content}
                            </p>
                          </div>
                        </motion.div>
                      ))}

                      {isTyping && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex justify-start"
                        >
                          <div className="bg-rice-yellow/80 rounded-lg p-4 border border-gold/30">
                            <div className="flex space-x-1">
                              <motion.span
                                className="w-2 h-2 rounded-full bg-palace-red"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1, repeat: Infinity }}
                              />
                              <motion.span
                                className="w-2 h-2 rounded-full bg-palace-red"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                              />
                              <motion.span
                                className="w-2 h-2 rounded-full bg-palace-red"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      <div ref={chatEndRef} />
                    </div>

                    <div className="p-4 border-t border-gold/20 bg-white/[0.05]">
                      <div className="flex space-x-3">
                        <div className="flex-1">
                          <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="输入您想说的话..."
                            className="w-full bg-white/[0.1] rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none font-song border border-gold/30"
                          />
                        </div>
                        <motion.button
                          onClick={handleSend}
                          disabled={!inputValue.trim()}
                          className="w-12 h-12 rounded-lg flex items-center justify-center btn-gold disabled:opacity-50"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Send className="w-5 h-5 text-palace-red" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {currentCharacter && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="card-traditional rounded-lg p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center text-gold">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gold font-kai font-bold text-sm mb-1">{currentCharacter.name}</p>
                      <p className="text-rice-white/70 font-song text-xs leading-relaxed">
                        {currentCharacter.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
