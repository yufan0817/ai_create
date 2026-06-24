'use client';
import { useState, useEffect } from 'react';
import { Trophy, RotateCcw, Star, Target, BookOpen } from 'lucide-react';
import { quizQuestions, talentRoles, roleSuggestions } from '@/data/mockData';

interface QuizState {
  currentQuestion: number;
  selectedAnswer: number | null;
  answers: number[];
  isFinished: boolean;
}

const QuizGame = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    selectedAnswer: null,
    answers: [],
    isFinished: false,
  });

  const [showResult, setShowResult] = useState(false);

  const currentQuestion = quizQuestions[quizState.currentQuestion];
  const score = quizState.answers.reduce((acc, answer, index) => {
    return answer === quizQuestions[index].correctAnswer ? acc + 10 : acc;
  }, 0);

  const talentValue = score;
  const currentRole = talentRoles.find(
    r => talentValue >= r.minScore && talentValue <= r.maxScore
  ) || talentRoles[0];

  useEffect(() => {
    if (quizState.isFinished) {
      setTimeout(() => setShowResult(true), 500);
    }
  }, [quizState.isFinished]);

  const handleSelectAnswer = (answerIndex: number) => {
    setQuizState(prev => ({ ...prev, selectedAnswer: answerIndex }));
  };

  const handleNext = () => {
    if (quizState.selectedAnswer === null) return;

    const newAnswers = [...quizState.answers, quizState.selectedAnswer];
    
    if (quizState.currentQuestion < quizQuestions.length - 1) {
      setQuizState({
        currentQuestion: quizState.currentQuestion + 1,
        selectedAnswer: null,
        answers: newAnswers,
        isFinished: false,
      });
    } else {
      setQuizState({
        currentQuestion: quizState.currentQuestion,
        selectedAnswer: null,
        answers: newAnswers,
        isFinished: true,
      });
    }
  };

  const handleRestart = () => {
    setQuizState({
      currentQuestion: 0,
      selectedAnswer: null,
      answers: [],
      isFinished: false,
    });
    setShowResult(false);
  };

  const progress = ((quizState.currentQuestion + 1) / quizQuestions.length) * 100;

  if (quizState.isFinished && showResult) {
    return (
      <div className="max-w-2xl mx-auto px-4">
        <div className="glass-card rounded-2xl p-8 text-center gold-glow">
          <div className="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-12 h-12 text-ink-black" />
          </div>
          
          <h2 className="text-3xl font-bold text-gradient-gold mb-2">挑战完成！</h2>
          <p className="text-gray-400 mb-8">您的戏曲天赋测试已完成</p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-ink-light rounded-xl p-4">
              <div className="text-3xl font-bold text-gold">{score}</div>
              <div className="text-sm text-gray-400">总分</div>
            </div>
            <div className="bg-ink-light rounded-xl p-4">
              <div className="text-3xl font-bold text-gold">{talentValue}</div>
              <div className="text-sm text-gray-400">天赋值</div>
            </div>
            <div className="bg-ink-light rounded-xl p-4">
              <div className="text-3xl font-bold text-gold">{quizState.answers.filter((a, i) => a === quizQuestions[i].correctAnswer).length}/{quizQuestions.length}</div>
              <div className="text-sm text-gray-400">正确率</div>
            </div>
          </div>

          <div className="bg-gradient-gold rounded-xl p-6 mb-8 text-ink-black">
            <h3 className="text-xl font-bold mb-2 flex items-center justify-center">
              <Star className="w-6 h-6 mr-2" />
              {currentRole.role}
            </h3>
            <p className="text-ink-black/80">{currentRole.description}</p>
          </div>

          <div className="text-left mb-8">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-gold" />
              学习建议
            </h4>
            <ul className="space-y-2">
              {roleSuggestions[currentRole.role as keyof typeof roleSuggestions]?.map((suggestion, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <Target className="w-4 h-4 mr-2 mt-1 text-gold flex-shrink-0" />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleRestart}
            className="bg-gradient-gold text-ink-black font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center mx-auto"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            再来一次
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">戏曲挑战赛</h2>
        <p className="text-gray-400">测试您的京剧知识水平</p>
      </div>

      <div className="glass-card rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gold font-bold">第 {quizState.currentQuestion + 1} / {quizQuestions.length} 题</span>
          <span className="text-gray-400">得分: {score}</span>
        </div>
        
        <div className="h-2 bg-ink-light rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-gold transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6 mb-6">
        <h3 className="text-xl font-bold text-white mb-6">{currentQuestion.question}</h3>
        
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelectAnswer(index)}
              className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                quizState.selectedAnswer === index
                  ? 'bg-gradient-gold text-ink-black'
                  : 'bg-ink-light text-gray-300 hover:bg-ink-light/80'
              }`}
            >
              <span className="font-bold mr-3">{String.fromCharCode(65 + index)}</span>
              {option}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        disabled={quizState.selectedAnswer === null}
        className="w-full bg-gradient-gold text-ink-black font-bold py-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {quizState.currentQuestion < quizQuestions.length - 1 ? '下一题' : '查看结果'}
      </button>
    </div>
  );
};

export default QuizGame;
