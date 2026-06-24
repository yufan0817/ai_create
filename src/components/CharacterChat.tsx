'use client';
import { useState } from 'react';
import { Send, ArrowLeft } from 'lucide-react';
import { characters } from '@/data/mockData';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
}

const characterResponses: Record<string, string[]> = {
  'zhuge-liang': [
    '哈哈，这位道友有礼了。某乃诸葛孔明，字孔明，号卧龙。有何见教？',
    '善哉善哉，汝之心意，亮已明了。兵法云：知己知彼，百战不殆。',
    '久闻阁下高名，今日得见，果然气度不凡。',
    '夫君子之行，静以修身，俭以养德。非淡泊无以明志，非宁静无以致远。',
    '运筹帷幄之中，决胜千里之外。此乃为将之道也。',
  ],
  'guan-yu': [
    '某乃汉寿亭侯关羽！某一生忠义，誓与兄长共扶汉室！',
    '某观尔相貌堂堂，必非等闲之辈。有话但讲无妨！',
    '青龙偃月刀，重八十二斤，斩颜良、诛文丑，某视之如探囊取物！',
    '忠义二字，某一生奉行。背信弃义之事，某不为也！',
    '酒且斟下，某去去便来！',
  ],
  'mu-guiying': [
    '妾身穆桂英，杨门女将是也！保家卫国，巾帼不让须眉！',
    '这位公子（小姐）有礼了，不知有何事见教？',
    '谁说女子不如男？妾身也曾挂帅出征，大破天门阵！',
    '家国之事，匹夫有责。虽为女子，亦当奋勇向前！',
    '梨花枪在手，定叫那番邦贼寇有来无回！',
  ],
  'bao-zheng': [
    '本府包拯，在此！有冤情尽管说来，本府定当秉公断案！',
    '公生明，廉生威。为官者当清正廉洁，方能服众。',
    '状告何人？所告何事？一一讲来！',
    '王子犯法，与庶民同罪！本府铁面无私，定不徇私舞弊！',
    '朗朗乾坤，岂容奸佞当道！本府定要还世间一个公道！',
  ],
};

const CharacterChat = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSelectCharacter = (characterId: string) => {
    setSelectedCharacter(characterId);
    const character = characters.find(c => c.id === characterId);
    if (character) {
      const greeting = characterResponses[characterId][0];
      setMessages([{ id: '1', content: greeting, isUser: false }]);
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim() || !selectedCharacter) return;

    setMessages(prev => [...prev, { id: Date.now().toString(), content: inputValue, isUser: true }]);
    setInputValue('');
    setIsTyping(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const responses = characterResponses[selectedCharacter];
    const randomResponse = responses[Math.floor(Math.random() * (responses.length - 1)) + 1];
    
    setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), content: randomResponse, isUser: false }]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const currentCharacter = characters.find(c => c.id === selectedCharacter);

  return (
    <div className="max-w-6xl mx-auto px-4">
      {!selectedCharacter ? (
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4">角色体验馆</h2>
          <p className="text-gray-400">选择一位戏曲角色，开启沉浸式对话体验</p>
        </div>
      ) : (
        <div className="flex items-center mb-8">
          <button
            onClick={() => {
              setSelectedCharacter(null);
              setMessages([]);
            }}
            className="flex items-center text-gray-400 hover:text-gold transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>返回选择</span>
          </button>
          <h2 className="text-2xl font-bold text-white">{currentCharacter?.name} - {currentCharacter?.title}</h2>
        </div>
      )}

      {!selectedCharacter ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {characters.map((character) => (
            <button
              key={character.id}
              onClick={() => handleSelectCharacter(character.id)}
              className="group relative rounded-2xl overflow-hidden glass-card hover:gold-glow transition-all duration-300"
            >
              <div className="aspect-[3/4] flex items-center justify-center">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold"
                  style={{ backgroundColor: `${character.color}30`, color: character.color }}
                >
                  {character.name[0]}
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">
                  {character.name}
                </h3>
                <p className="text-sm text-gray-400">{character.title}</p>
                <p className="text-xs text-gray-500 mt-1">{character.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black/80 to-transparent" />
            </button>
          ))}
        </div>
      ) : (
        <div className="glass-card rounded-2xl overflow-hidden h-[500px] flex flex-col">
          <div className="p-4 border-b border-gold/20 flex items-center">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-3"
              style={{ backgroundColor: `${currentCharacter?.color}30`, color: currentCharacter?.color }}
            >
              {currentCharacter?.name[0]}
            </div>
            <div>
              <h3 className="text-white font-bold">{currentCharacter?.name}</h3>
              <p className="text-sm text-gray-400">{currentCharacter?.title}</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] p-4 rounded-xl ${
                    message.isUser
                      ? 'bg-gradient-gold text-ink-black rounded-br-none'
                      : 'bg-ink-light text-white rounded-bl-none'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-ink-light rounded-xl p-4 rounded-bl-none">
                  <div className="flex space-x-1">
                    <span className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gold/20">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="输入您想说的话..."
                className="flex-1 bg-ink-light rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 border border-transparent"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center text-ink-black hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterChat;
