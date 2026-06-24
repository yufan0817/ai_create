'use client';
import { useState } from 'react';
import { Play, Info } from 'lucide-react';
import { operaLines, lineAnalysisMap } from '@/data/mockData';
import type { LineAnalysis } from '@/data/mockData';

const LineCard = () => {
  const [selectedLine, setSelectedLine] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<LineAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectLine = async (lineId: string) => {
    setSelectedLine(lineId);
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const data = lineAnalysisMap[lineId];
    setAnalysis(data);
    setIsLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">经典唱段学习</h2>
        <p className="text-gray-400">点击下方唱词，让AI为您解析其中的奥秘</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {operaLines.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelectLine(item.id)}
              className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                selectedLine === item.id
                  ? 'bg-gradient-gold text-ink-black gold-glow'
                  : 'glass-card hover:gold-glow hover:border-gold/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-lg font-bold ${
                    selectedLine === item.id ? 'text-ink-black' : 'text-white'
                  }`}>
                    {item.line}
                  </p>
                  <p className={`text-sm mt-1 ${
                    selectedLine === item.id ? 'text-ink-black/70' : 'text-gray-400'
                  }`}>
                    《{item.title}》- {item.character}
                  </p>
                </div>
                <Play className={`w-6 h-6 ${
                  selectedLine === item.id ? 'text-ink-black' : 'text-gold'
                }`} />
              </div>
            </button>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-6 min-h-[400px]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-12 h-12 border-4 border-gold/30 border-t-gold rounded-full animate-spin mb-4" />
              <p className="text-gold">AI正在分析中...</p>
            </div>
          ) : analysis ? (
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <Info className="w-6 h-6 text-gold mr-2" />
                <h3 className="text-xl font-bold text-white">唱段解析</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-ink-light rounded-xl p-4">
                  <span className="text-gold text-sm">出处</span>
                  <p className="text-white mt-1">{analysis.origin}</p>
                </div>
                
                <div className="bg-ink-light rounded-xl p-4">
                  <span className="text-gold text-sm">人物</span>
                  <p className="text-white mt-1">{analysis.character}</p>
                </div>
                
                <div className="bg-ink-light rounded-xl p-4">
                  <span className="text-gold text-sm">现代译文</span>
                  <p className="text-white mt-1">{analysis.translation}</p>
                </div>
                
                <div className="bg-ink-light rounded-xl p-4">
                  <span className="text-gold text-sm">情感分析</span>
                  <p className="text-white mt-1">{analysis.emotion}</p>
                </div>
                
                <div className="bg-ink-light rounded-xl p-4">
                  <span className="text-gold text-sm">表演建议</span>
                  <p className="text-white mt-1">{analysis.performance}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <Play className="w-16 h-16 mb-4 opacity-30" />
              <p>请选择一段唱词开始学习</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LineCard;
