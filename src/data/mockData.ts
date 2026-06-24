export interface OperaLine {
  id: string;
  line: string;
  title: string;
  character: string;
}

export interface LineAnalysis {
  origin: string;
  character: string;
  translation: string;
  emotion: string;
  performance: string;
}

export interface Character {
  id: string;
  name: string;
  title: string;
  description: string;
  color: string;
  image: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizResult {
  score: number;
  total: number;
  talentValue: number;
  recommendedRole: string;
  suggestions: string[];
}

export const operaLines: OperaLine[] = [
  { id: '1', line: '我本是卧龙岗散淡的人', title: '空城计', character: '诸葛亮' },
  { id: '2', line: '怒发冲冠，凭栏处、潇潇雨歇', title: '满江红', character: '岳飞' },
  { id: '3', line: '苏三离了洪洞县', title: '玉堂春', character: '苏三' },
  { id: '4', line: '猛听得金鼓响画角声震', title: '霸王别姬', character: '虞姬' },
  { id: '5', line: '包龙图打坐在开封府', title: '铡美案', character: '包拯' },
];

export const lineAnalysisMap: Record<string, LineAnalysis> = {
  '1': {
    origin: '京剧《空城计》',
    character: '诸葛亮',
    translation: '我原本只是卧龙岗上一位悠闲自在的隐士。',
    emotion: '从容自信，带有一丝自嘲与智慧的豁达',
    performance: '演唱时要表现出诸葛亮的儒雅风度，眼神要沉稳坚定，手势要舒缓大方，体现出胸有成竹的气质。'
  },
  '2': {
    origin: '京剧《满江红》',
    character: '岳飞',
    translation: '愤怒得头发竖起，把帽子都顶起来了，我独自登高凭栏远眺，风雨刚刚停歇。',
    emotion: '悲愤激昂，壮志未酬的爱国情怀',
    performance: '演唱时要充满激情，声音要高亢有力，眼神中要有坚定的信念和对敌人的痛恨，动作要刚劲有力。'
  },
  '3': {
    origin: '京剧《玉堂春》',
    character: '苏三',
    translation: '我苏三离开了洪洞县这个地方。',
    emotion: '凄凉哀怨，对命运的无奈与控诉',
    performance: '演唱时要表现出苏三的柔弱与哀怨，声音要婉转凄凉，眼神中要有泪水和委屈，身段要轻盈柔弱。'
  },
  '4': {
    origin: '京剧《霸王别姬》',
    character: '虞姬',
    translation: '突然听到金鼓齐鸣，号角声震天动地。',
    emotion: '悲壮决绝，视死如归的勇气',
    performance: '演唱时要表现出虞姬的柔美与刚强，声音要凄婉动人，眼神中要有坚定的信念和对霸王的深情。'
  },
  '5': {
    origin: '京剧《铡美案》',
    character: '包拯',
    translation: '包拯我坐在开封府的大堂上。',
    emotion: '威严公正，铁面无私的正气',
    performance: '演唱时要表现出包拯的威严与正气，声音要洪亮有力，眼神要锐利坚定，手势要沉稳有力。'
  }
};

export const characters: Character[] = [
  {
    id: 'zhuge-liang',
    name: '诸葛亮',
    title: '卧龙先生',
    description: '蜀汉丞相，足智多谋，神机妙算',
    color: '#d4af37',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=ancient%20chinese%20strategist%20zhuge%20liang%20portrait%20with%20feather%20fan%20traditional%20chinese%20painting%20style&image_size=portrait_4_3'
  },
  {
    id: 'guan-yu',
    name: '关羽',
    title: '武圣',
    description: '忠义无双，武艺超群的武财神',
    color: '#c0392b',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=ancient%20chinese%20warrior%20guan%20yu%20with%20green%20robe%20and%20long%20beard%20traditional%20chinese%20painting%20style&image_size=portrait_4_3'
  },
  {
    id: 'mu-guiying',
    name: '穆桂英',
    title: '巾帼英雄',
    description: '杨门女将，英勇善战的女中豪杰',
    color: '#8e44ad',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=ancient%20chinese%20female%20warrior%20mu%20guiying%20with%20armor%20traditional%20chinese%20painting%20style&image_size=portrait_4_3'
  },
  {
    id: 'bao-zheng',
    name: '包拯',
    title: '包青天',
    description: '铁面无私，公正廉明的开封府尹',
    color: '#2c3e50',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=ancient%20chinese%20judge%20bao%20zheng%20with%20black%20face%20traditional%20chinese%20opera%20style&image_size=portrait_4_3'
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: '京剧中的"生、旦、净、丑"指的是什么？',
    options: ['四种表演道具', '四种角色行当', '四种唱腔类型', '四种化妆方法'],
    correctAnswer: 1,
    explanation: '生、旦、净、丑是京剧的四大行当，分别代表不同类型的角色。'
  },
  {
    id: 2,
    question: '京剧脸谱中，红色通常代表什么性格？',
    options: ['奸诈阴险', '正直忠诚', '勇猛暴躁', '神仙妖怪'],
    correctAnswer: 1,
    explanation: '红色脸谱象征忠义、勇敢，如关羽。'
  },
  {
    id: 3,
    question: '下列哪部不是京剧经典剧目？',
    options: ['《霸王别姬》', '《红楼梦》', '《牡丹亭》', '《空城计》'],
    correctAnswer: 2,
    explanation: '《牡丹亭》是昆曲经典剧目，不是京剧。'
  },
  {
    id: 4,
    question: '京剧的发源地是哪里？',
    options: ['北京', '上海', '安徽', '湖北'],
    correctAnswer: 2,
    explanation: '京剧形成于北京，但起源于安徽的徽剧和湖北的汉剧。'
  },
  {
    id: 5,
    question: '京剧中的"唱、念、做、打"指的是什么？',
    options: ['四种基本功', '四种乐器', '四种服装', '四种舞台'],
    correctAnswer: 0,
    explanation: '唱念做打是京剧表演的四种艺术手段和基本功。'
  },
  {
    id: 6,
    question: '包拯的脸谱是什么颜色？',
    options: ['红色', '白色', '黑色', '黄色'],
    correctAnswer: 2,
    explanation: '包拯的脸谱是黑色，象征铁面无私。'
  },
  {
    id: 7,
    question: '下列哪位是京剧"梅派"创始人？',
    options: ['梅兰芳', '程砚秋', '尚小云', '荀慧生'],
    correctAnswer: 0,
    explanation: '梅兰芳是梅派创始人，京剧四大名旦之首。'
  },
  {
    id: 8,
    question: '京剧《空城计》的主角是谁？',
    options: ['曹操', '诸葛亮', '司马懿', '刘备'],
    correctAnswer: 1,
    explanation: '《空城计》讲述诸葛亮用空城计吓退司马懿大军的故事。'
  },
  {
    id: 9,
    question: '京剧中的"水袖"有什么作用？',
    options: ['保暖', '装饰和表达情感', '防身', '区分角色'],
    correctAnswer: 1,
    explanation: '水袖是京剧服饰的重要组成部分，用于表达人物情感和美化动作。'
  },
  {
    id: 10,
    question: '京剧被列入世界非物质文化遗产是在哪一年？',
    options: ['2008年', '2010年', '2012年', '2014年'],
    correctAnswer: 1,
    explanation: '京剧于2010年被联合国教科文组织列入人类非物质文化遗产代表作名录。'
  }
];

export const talentRoles = [
  { minScore: 0, maxScore: 30, role: '戏曲小白', description: '刚刚踏入梨园之门，需要多加学习哦！' },
  { minScore: 31, maxScore: 50, role: '票友学徒', description: '已经有一定基础，可以尝试学唱简单唱段了！' },
  { minScore: 51, maxScore: 70, role: '梨园新秀', description: '对京剧有较深了解，是未来的潜力之星！' },
  { minScore: 71, maxScore: 90, role: '名角苗子', description: '天赋异禀，有望成为京剧艺术的传承者！' },
  { minScore: 91, maxScore: 100, role: '梨园大师', description: '京剧造诣深厚，堪称一代宗师！' }
];

export const roleSuggestions = {
  '戏曲小白': ['从经典唱段开始学习', '多观看京剧表演视频', '了解京剧基本常识'],
  '票友学徒': ['选择一个喜欢的行当深入学习', '参加京剧社团交流', '尝试模仿经典唱腔'],
  '梨园新秀': ['挑战难度更高的唱段', '学习京剧身段表演', '参加业余演出锻炼'],
  '名角苗子': ['拜师学艺深入钻研', '参加专业比赛', '考虑职业发展道路'],
  '梨园大师': ['传承京剧艺术', '培养新一代传人', '推动京剧创新发展']
};
