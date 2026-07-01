'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Target, TrendingUp, TrendingDown, BookOpen, RotateCcw, Star, Medal, Scroll } from 'lucide-react';
import { questionBank, getRandomQuestions, analyzeScore, getTitle, Question } from '../data/questionBank';

interface QuizState {
  currentQuestion: number;
  answers: number[];
  selectedAnswer: number | null;
  isFinished: boolean;
}

export default function QuizPage() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    selectedAnswer: null,
    isFinished: false
  });
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [animatedScore, setAnimatedScore] = useState(0);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const randomQuestions = getRandomQuestions(10);
    setQuestions(randomQuestions);
  }, []);

  const currentQuestion = questions[quizState.currentQuestion];
  const progress = ((quizState.currentQuestion + 1) / questions.length) * 100;
  const score = quizState.answers.reduce((acc, answer, index) => {
    return acc + (answer === questions[index]?.correctAnswer ? 10 : 0);
  }, 0);

  useEffect(() => {
    if (showResult) {
      const finalScore = score;
      const timer = setInterval(() => {
        setAnimatedScore(prev => {
          if (prev >= finalScore) {
            clearInterval(timer);
            return finalScore;
          }
          return prev + 2;
        });
      }, 30);
      return () => clearInterval(timer);
    }
  }, [showResult, score]);

  useEffect(() => {
    if (showResult) {
      setTitle(getTitle(score));
    }
  }, [showResult, score]);

  const handleSelectAnswer = (answerIndex: number) => {
    setQuizState(prev => ({
      ...prev,
      selectedAnswer: answerIndex
    }));
  };

  const handleNext = () => {
    if (quizState.selectedAnswer === null) return;

    const newAnswers = [...quizState.answers, quizState.selectedAnswer];

    if (quizState.currentQuestion < questions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        answers: newAnswers,
        selectedAnswer: null
      }));
    } else {
      setQuizState(prev => ({
        ...prev,
        answers: newAnswers,
        isFinished: true
      }));
      setTimeout(() => setShowResult(true), 500);
    }
  };

  const handleRestart = () => {
    const randomQuestions = getRandomQuestions(10);
    setQuestions(randomQuestions);
    setQuizState({
      currentQuestion: 0,
      answers: [],
      selectedAnswer: null,
      isFinished: false
    });
    setShowResult(false);
    setAnimatedScore(0);
    setTitle('');
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-palace">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-rice-white font-song"
        >
          加载题目中...
        </motion.div>
      </div>
    );
  }

  if (quizState.isFinished && showResult) {
    const analysis = analyzeScore(quizState.answers, questions);
    const categoryStats = analysis.categoryStats;
    
    const sortedCategories = Object.entries(categoryStats).sort((a, b) => b[1].correct - a[1].correct);
    const bestCategory = sortedCategories[0];
    const worstCategory = sortedCategories[sortedCategories.length - 1];

    const getRecommendation = () => {
      if (score >= 90) return '您已达到梨园宗师级别，建议深入研究京剧流派和表演艺术。';
      if (score >= 80) return '您是梨园名角，建议多欣赏经典剧目，提升表演技巧。';
      if (score >= 70) return '您是梨园雅士，建议系统学习京剧基础知识。';
      if (score >= 60) return '您是梨园新秀，建议从基础脸谱知识开始学习。';
      return '您是梨园学徒，建议多观看京剧表演，培养兴趣。';
    };

    const getRank = () => {
      if (score >= 90) return '状元';
      if (score >= 80) return '榜眼';
      if (score >= 70) return '探花';
      if (score >= 60) return '进士';
      return '秀才';
    };

    return (
      <div className="min-h-screen relative pt-24 pb-20 px-6 bg-gradient-palace">
        <div className="bg-cloud-texture" />
        <div className="bg-gold-glow" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-12 section-gradient py-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif-title text-gradient-gold mb-4">
              知识闯关
            </h1>
            <p className="text-rice-white/70 font-song text-lg leading-relaxed">科举考试完成</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="scroll-card overflow-hidden"
          >
            <div className="p-8 text-center">
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-palace-red to-transparent flex items-center justify-center">
                <div className="w-20 h-3 bg-gold/50 rounded-full" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-palace-red to-transparent flex items-center justify-center">
                <div className="w-20 h-3 bg-gold/50 rounded-full" />
              </div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="mb-8 mt-8"
              >
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gold/20 to-palace-red/20 flex items-center justify-center border-4 border-gold shadow-2xl gold-glow">
                  <Award className="w-16 h-16 text-gold" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-4"
              >
                <div className="text-center">
                  <div className="text-xs text-gold/60 font-serif-title tracking-widest mb-2">梨园功名录</div>
                  <h2 className="text-4xl font-serif-title text-palace-red">
                    {title}
                  </h2>
                  <div className="mt-2 inline-flex items-center gap-2 px-4 py-1 bg-gold/20 rounded-full">
                    <Medal className="w-4 h-4 text-gold" />
                    <span className="text-sm font-serif-title text-palace-red">{getRank()}</span>
                  </div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-gray-600 font-song mb-8"
              >
                恭喜您获得此称号！
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mb-8"
              >
                <div className="text-6xl font-serif-title text-palace-red mb-2">
                  {animatedScore}
                </div>
                <div className="text-gray-500 font-sans-text">总得分</div>
              </motion.div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/[0.1] rounded-xl p-4 border border-gold/20">
                  <div className="text-2xl font-serif-title text-palace-red mb-1">
                    {analysis.correctCount}/{questions.length}
                  </div>
                  <div className="text-sm text-gray-500 font-sans-text">答对题数</div>
                </div>
                <div className="bg-white/[0.1] rounded-xl p-4 border border-gold/20">
                  <div className="text-2xl font-serif-title text-gold mb-1">
                    {Math.round((analysis.correctCount / questions.length) * 100)}%
                  </div>
                  <div className="text-sm text-gray-500 font-sans-text">正确率</div>
                </div>
                <div className="bg-white/[0.1] rounded-xl p-4 border border-gold/20">
                  <div className="text-2xl font-serif-title text-green-600 mb-1">
                    {questions.length * 10}
                  </div>
                  <div className="text-sm text-gray-500 font-sans-text">满分</div>
                </div>
              </div>

              {bestCategory && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex items-center justify-center gap-3 mb-4 p-4 bg-green-500/10 rounded-xl border border-green-500/30"
                >
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <div className="text-left">
                    <div className="text-green-600 font-serif-title text-sm">擅长领域</div>
                    <div className="text-gray-700 font-song text-sm">{bestCategory[0]}</div>
                  </div>
                </motion.div>
              )}

              {worstCategory && worstCategory[1].correct < worstCategory[1].total && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="flex items-center justify-center gap-3 mb-6 p-4 bg-red-500/10 rounded-xl border border-red-500/30"
                >
                  <TrendingDown className="w-5 h-5 text-red-600" />
                  <div className="text-left">
                    <div className="text-red-600 font-serif-title text-sm">薄弱领域</div>
                    <div className="text-gray-700 font-song text-sm">{worstCategory[0]}</div>
                  </div>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="p-4 bg-palace-red/5 rounded-xl border border-palace-red/20 mb-8"
              >
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-palace-red mt-0.5" />
                  <div>
                    <div className="text-palace-red font-serif-title text-sm mb-1">名师评语</div>
                    <div className="text-gray-600 font-song text-sm">{getRecommendation()}</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-8 text-center"
              >
                <motion.button
                  onClick={handleRestart}
                  className="btn-gradient-red-gold text-rice-white font-kai font-bold px-10 py-5 rounded-full inline-flex items-center text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  再赴考场
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative pt-20 pb-12 px-6 bg-gradient-palace">
      <div className="bg-cloud-texture" />
      <div className="bg-gold-glow" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 section-gradient py-8"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Scroll className="w-8 h-8 text-gold" />
            <h1 className="text-4xl md:text-5xl font-serif-title text-gradient-gold">
              知识闯关
            </h1>
            <Scroll className="w-8 h-8 text-gold" />
          </div>
          <p className="text-rice-white/70 font-sans-text text-lg leading-relaxed">科举考试，测试您的戏曲天赋</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-traditional rounded-xl overflow-hidden"
        >
          <div className="scroll-header">
            <div className="flex items-center justify-between">
              <span className="text-rice-white font-serif-title">第 {quizState.currentQuestion + 1} / {questions.length} 题</span>
              <span className="text-rice-white/70 font-sans-text text-sm">得分: {score}</span>
            </div>
          </div>
          <div className="paper-content">
            <div className="h-2 bg-paper-dark rounded-full overflow-hidden mt-4">
              <motion.div
                className="h-full bg-gradient-to-r from-palace-red to-gold"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="scroll-card mt-4"
        >
          <div className="p-5 md:p-6">
            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-gold/30 to-transparent flex items-center justify-center">
              <div className="w-12 h-1.5 bg-gold/50 rounded-full" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gold/30 to-transparent flex items-center justify-center">
              <div className="w-12 h-1.5 bg-gold/50 rounded-full" />
            </div>

            <h3 className="text-lg md:text-xl font-serif-title text-palace-red mb-5 text-center pt-3">
              {currentQuestion.question}
            </h3>
            
            <div className="space-y-2.5">
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleSelectAnswer(index)}
                  className={`w-full p-3.5 rounded-xl text-left transition-all duration-300 ${
                    quizState.selectedAnswer === index
                      ? 'bg-palace-red/20 border-2 border-palace-red/50'
                      : 'bg-white/[0.1] border border-transparent hover:border-gold/30'
                  }`}
                >
                  <div className="flex items-center">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center mr-3 font-serif-title text-sm ${
                      quizState.selectedAnswer === index
                        ? 'bg-palace-red text-white'
                        : 'bg-gold/20 text-palace-red'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className={`font-sans-text ${
                      quizState.selectedAnswer === index ? 'text-palace-red' : 'text-gray-700'
                    }`}>
                      {option}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onClick={handleNext}
          disabled={quizState.selectedAnswer === null}
          className="w-full mt-4 btn-gradient-red-gold text-rice-white font-kai font-bold py-3.5 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {quizState.currentQuestion < questions.length - 1 ? '下一题' : '查看功名'}
        </motion.button>
      </div>
    </div>
  );
}
