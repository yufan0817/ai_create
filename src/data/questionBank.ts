export interface Question {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export type QuestionCategory = '脸谱知识' | '行当知识' | '经典剧目' | '历史人物' | '唱念做打' | '戏曲文化' | '京剧发展史';

export const questionCategories: QuestionCategory[] = [
  '脸谱知识',
  '行当知识',
  '经典剧目',
  '历史人物',
  '唱念做打',
  '戏曲文化',
  '京剧发展史'
];

export const questionBank: Question[] = [
  {
    id: 'facial-1',
    category: '脸谱知识',
    question: '京剧中红色脸谱通常代表什么性格？',
    options: ['忠诚勇敢', '阴险狡诈', '正直无私', '勇猛暴躁'],
    correctAnswer: 0,
    explanation: '红色脸谱在京剧中通常代表忠诚勇敢的人物，如关羽。'
  },
  {
    id: 'facial-2',
    category: '脸谱知识',
    question: '黑色脸谱在京剧中常用来表现什么性格的人物？',
    options: ['儒雅智慧', '刚正不阿', '奸诈多疑', '勇猛善战'],
    correctAnswer: 1,
    explanation: '黑色脸谱通常表现刚正不阿、铁面无私的人物，如包拯。'
  },
  {
    id: 'facial-3',
    category: '脸谱知识',
    question: '白色脸谱在京剧中通常代表什么？',
    options: ['纯洁善良', '奸诈阴险', '年老体弱', '神仙高人'],
    correctAnswer: 1,
    explanation: '白色脸谱通常代表奸诈阴险的人物，如曹操。'
  },
  {
    id: 'facial-4',
    category: '脸谱知识',
    question: '黄色脸谱在京剧中常表现什么性格？',
    options: ['温和善良', '勇猛暴躁', '儒雅斯文', '忠诚正直'],
    correctAnswer: 1,
    explanation: '黄色脸谱通常表现勇猛暴躁的人物。'
  },
  {
    id: 'facial-5',
    category: '脸谱知识',
    question: '关羽的脸谱是什么颜色？',
    options: ['黑色', '白色', '红色', '金色'],
    correctAnswer: 2,
    explanation: '关羽是忠义的代表，使用红色脸谱。'
  },
  {
    id: 'role-1',
    category: '行当知识',
    question: '京剧的四大行当是指？',
    options: ['生旦净丑', '唱念做打', '手眼身法步', '喜怒哀乐'],
    correctAnswer: 0,
    explanation: '京剧四大行当为生、旦、净、丑。'
  },
  {
    id: 'role-2',
    category: '行当知识',
    question: '老生属于哪个行当？',
    options: ['生', '旦', '净', '丑'],
    correctAnswer: 0,
    explanation: '老生是生行的重要分支，扮演中年以上的男性角色。'
  },
  {
    id: 'role-3',
    category: '行当知识',
    question: '青衣属于哪个行当？',
    options: ['生', '旦', '净', '丑'],
    correctAnswer: 1,
    explanation: '青衣是旦行的一种，扮演端庄稳重的中青年女性。'
  },
  {
    id: 'role-4',
    category: '行当知识',
    question: '包拯属于哪个行当？',
    options: ['老生', '青衣', '花脸', '丑'],
    correctAnswer: 2,
    explanation: '包拯属于净行，也就是花脸。'
  },
  {
    id: 'role-5',
    category: '行当知识',
    question: '丑角在京剧中通常扮演什么角色？',
    options: ['英雄豪杰', '帝王将相', '滑稽幽默', '端庄淑女'],
    correctAnswer: 2,
    explanation: '丑角通常扮演滑稽幽默的人物，是戏曲中的喜剧角色。'
  },
  {
    id: 'play-1',
    category: '经典剧目',
    question: '《贵妃醉酒》的主角是谁？',
    options: ['西施', '貂蝉', '杨玉环', '王昭君'],
    correctAnswer: 2,
    explanation: '《贵妃醉酒》的主角是杨贵妃杨玉环。'
  },
  {
    id: 'play-2',
    category: '经典剧目',
    question: '《空城计》的主角是谁？',
    options: ['关羽', '张飞', '诸葛亮', '刘备'],
    correctAnswer: 2,
    explanation: '《空城计》讲述的是诸葛亮智退司马懿的故事。'
  },
  {
    id: 'play-3',
    category: '经典剧目',
    question: '《霸王别姬》中的"霸王"指的是谁？',
    options: ['刘邦', '项羽', '韩信', '英布'],
    correctAnswer: 1,
    explanation: '《霸王别姬》中的霸王是项羽。'
  },
  {
    id: 'play-4',
    category: '经典剧目',
    question: '《穆桂英挂帅》属于哪个戏曲流派？',
    options: ['梅派', '程派', '尚派', '荀派'],
    correctAnswer: 0,
    explanation: '《穆桂英挂帅》是梅派经典剧目。'
  },
  {
    id: 'play-5',
    category: '经典剧目',
    question: '《铡美案》讲述的是谁的故事？',
    options: ['包拯', '海瑞', '狄仁杰', '宋慈'],
    correctAnswer: 0,
    explanation: '《铡美案》讲述的是包拯秉公执法，铡杀陈世美的故事。'
  },
  {
    id: 'play-6',
    category: '经典剧目',
    question: '《四郎探母》中的四郎是谁？',
    options: ['杨延平', '杨延定', '杨延辉', '杨延朗'],
    correctAnswer: 2,
    explanation: '《四郎探母》中的四郎是杨延辉。'
  },
  {
    id: 'play-7',
    category: '经典剧目',
    question: '《锁麟囊》是哪个流派的代表作？',
    options: ['梅派', '程派', '尚派', '荀派'],
    correctAnswer: 1,
    explanation: '《锁麟囊》是程派经典剧目。'
  },
  {
    id: 'play-8',
    category: '经典剧目',
    question: '《智取威虎山》属于什么类型的京剧？',
    options: ['传统戏', '现代戏', '历史戏', '神话戏'],
    correctAnswer: 1,
    explanation: '《智取威虎山》是现代京剧的代表作。'
  },
  {
    id: 'history-1',
    category: '历史人物',
    question: '京剧形成于哪个朝代？',
    options: ['明朝', '清朝', '元朝', '宋朝'],
    correctAnswer: 1,
    explanation: '京剧形成于清朝乾隆年间。'
  },
  {
    id: 'history-2',
    category: '历史人物',
    question: '京剧的前身是什么？',
    options: ['昆曲', '徽剧', '秦腔', '汉剧'],
    correctAnswer: 1,
    explanation: '京剧是在徽剧的基础上发展起来的。'
  },
  {
    id: 'history-3',
    category: '历史人物',
    question: '京剧被称为中国的什么？',
    options: ['国剧', '国粹', '国乐', '国艺'],
    correctAnswer: 1,
    explanation: '京剧被称为中国的国粹。'
  },
  {
    id: 'history-4',
    category: '历史人物',
    question: '"同光十三绝"是指哪个时期的京剧演员？',
    options: ['同治光绪年间', '康熙乾隆年间', '道光咸丰年间', '民国时期'],
    correctAnswer: 0,
    explanation: '同光十三绝是指同治、光绪年间的十三位著名京剧演员。'
  },
  {
    id: 'skill-1',
    category: '唱念做打',
    question: '京剧的四种表演手段是？',
    options: ['生旦净丑', '唱念做打', '手眼身法步', '喜怒哀乐'],
    correctAnswer: 1,
    explanation: '京剧的四种表演手段是唱、念、做、打。'
  },
  {
    id: 'skill-2',
    category: '唱念做打',
    question: '"唱"在京剧中指的是什么？',
    options: ['歌唱', '念白', '表演', '武打'],
    correctAnswer: 0,
    explanation: '唱指的是歌唱，是京剧表演的重要组成部分。'
  },
  {
    id: 'skill-3',
    category: '唱念做打',
    question: '"念"在京剧中指的是什么？',
    options: ['唱歌', '念白', '表演', '武功'],
    correctAnswer: 1,
    explanation: '念指的是念白，即台词的朗诵。'
  },
  {
    id: 'skill-4',
    category: '唱念做打',
    question: '"做"在京剧中指的是什么？',
    options: ['做工', '表演动作', '武打', '唱腔'],
    correctAnswer: 1,
    explanation: '做指的是表演动作和身段。'
  },
  {
    id: 'skill-5',
    category: '唱念做打',
    question: '"打"在京剧中指的是什么？',
    options: ['打击乐器', '武打动作', '对话', '唱腔'],
    correctAnswer: 1,
    explanation: '打指的是武打动作和舞蹈。'
  },
  {
    id: 'culture-1',
    category: '戏曲文化',
    question: '京剧的伴奏乐器主要是什么？',
    options: ['钢琴', '小提琴', '京胡', '古筝'],
    correctAnswer: 2,
    explanation: '京胡是京剧的主要伴奏乐器。'
  },
  {
    id: 'culture-2',
    category: '戏曲文化',
    question: '京剧的舞台有什么特点？',
    options: ['写实', '虚拟', '现代', '立体'],
    correctAnswer: 1,
    explanation: '京剧舞台具有虚拟性，通过演员的表演来表现场景。'
  },
  {
    id: 'culture-3',
    category: '戏曲文化',
    question: '京剧的服装被称为什么？',
    options: ['时装', '汉服', '行头', '戏服'],
    correctAnswer: 2,
    explanation: '京剧的服装被称为行头。'
  },
  {
    id: 'culture-4',
    category: '戏曲文化',
    question: '京剧表演中的"水袖"有什么作用？',
    options: ['保暖', '装饰和表达情感', '防身', '遮阳'],
    correctAnswer: 1,
    explanation: '水袖是京剧表演中重要的道具，用于表达情感和美化动作。'
  },
  {
    id: 'culture-5',
    category: '戏曲文化',
    question: '京剧的脸谱有多少种颜色？',
    options: ['3种', '5种', '8种', '多种'],
    correctAnswer: 3,
    explanation: '京剧脸谱颜色丰富，有红、黑、白、黄、蓝、绿、紫、金、银等多种颜色。'
  },
  {
    id: 'history-5',
    category: '京剧发展史',
    question: '京剧是在什么时期形成的？',
    options: ['18世纪末', '19世纪初', '19世纪中叶', '20世纪初'],
    correctAnswer: 2,
    explanation: '京剧形成于19世纪中叶的北京。'
  },
  {
    id: 'history-6',
    category: '京剧发展史',
    question: '京剧的"四大名旦"是指？',
    options: ['梅兰芳、程砚秋、尚小云、荀慧生', '谭鑫培、余叔岩、马连良、周信芳', '杨小楼、盖叫天、李万春、李少春', '金少山、裘盛戎、袁世海、方荣翔'],
    correctAnswer: 0,
    explanation: '四大名旦是梅兰芳、程砚秋、尚小云、荀慧生。'
  },
  {
    id: 'history-7',
    category: '京剧发展史',
    question: '京剧"梅派"的创始人是谁？',
    options: ['梅葆玖', '梅兰芳', '梅巧玲', '梅兰'],
    correctAnswer: 1,
    explanation: '梅派的创始人是梅兰芳。'
  },
  {
    id: 'history-8',
    category: '京剧发展史',
    question: '京剧首次登上国际舞台是在什么时候？',
    options: ['1919年', '1924年', '1930年', '1949年'],
    correctAnswer: 2,
    explanation: '1930年梅兰芳率团赴美国演出，这是京剧首次登上国际舞台。'
  },
  {
    id: 'facial-6',
    category: '脸谱知识',
    question: '蓝脸在京剧中通常代表什么性格？',
    options: ['忠诚', '勇猛', '奸诈', '神秘'],
    correctAnswer: 1,
    explanation: '蓝脸通常代表勇猛、刚强的人物。'
  },
  {
    id: 'facial-7',
    category: '脸谱知识',
    question: '绿脸在京剧中常表现什么？',
    options: ['神仙', '妖怪', '草莽英雄', '帝王'],
    correctAnswer: 2,
    explanation: '绿脸常表现草莽英雄或绿林好汉。'
  },
  {
    id: 'facial-8',
    category: '脸谱知识',
    question: '金色和银色脸谱通常用于表现什么？',
    options: ['平民', '贵族', '神仙鬼怪', '武将'],
    correctAnswer: 2,
    explanation: '金色和银色脸谱通常用于表现神仙、鬼怪或神话人物。'
  },
  {
    id: 'role-6',
    category: '行当知识',
    question: '花脸属于哪个行当？',
    options: ['生', '旦', '净', '丑'],
    correctAnswer: 2,
    explanation: '花脸是净行的俗称。'
  },
  {
    id: 'role-7',
    category: '行当知识',
    question: '武生属于哪个行当？',
    options: ['生', '旦', '净', '丑'],
    correctAnswer: 0,
    explanation: '武生是生行的一种，扮演擅长武艺的男性角色。'
  },
  {
    id: 'role-8',
    category: '行当知识',
    question: '花旦属于哪个行当？',
    options: ['生', '旦', '净', '丑'],
    correctAnswer: 1,
    explanation: '花旦是旦行的一种，扮演活泼可爱的年轻女性。'
  },
  {
    id: 'play-9',
    category: '经典剧目',
    question: '《红灯记》属于什么类型的京剧？',
    options: ['传统戏', '现代戏', '历史戏', '神话戏'],
    correctAnswer: 1,
    explanation: '《红灯记》是现代京剧代表作。'
  },
  {
    id: 'play-10',
    category: '经典剧目',
    question: '《沙家浜》讲述的是什么时期的故事？',
    options: ['抗日战争', '解放战争', '抗美援朝', '三国时期'],
    correctAnswer: 0,
    explanation: '《沙家浜》讲述的是抗日战争时期的故事。'
  },
  {
    id: 'skill-6',
    category: '唱念做打',
    question: '京剧的"五法"是指？',
    options: ['唱念做打舞', '手眼身法步', '喜怒哀乐愁', '生旦净末丑'],
    correctAnswer: 1,
    explanation: '京剧五法是手、眼、身、法、步。'
  },
  {
    id: 'skill-7',
    category: '唱念做打',
    question: '"手"在五法中指的是什么？',
    options: ['手势', '手法', '手指', '手掌'],
    correctAnswer: 0,
    explanation: '手指的是手势和手部动作。'
  },
  {
    id: 'skill-8',
    category: '唱念做打',
    question: '"眼"在五法中指的是什么？',
    options: ['眼神', '眼睛', '眼光', '眼色'],
    correctAnswer: 0,
    explanation: '眼指的是眼神的运用。'
  },
  {
    id: 'culture-6',
    category: '戏曲文化',
    question: '京剧的"板眼"是什么意思？',
    options: ['节奏', '眼神', '动作', '服装'],
    correctAnswer: 0,
    explanation: '板眼是京剧的节奏体系，板是强拍，眼是弱拍。'
  },
  {
    id: 'culture-7',
    category: '戏曲文化',
    question: '京剧的"韵白"是什么？',
    options: ['押韵的唱词', '有韵律的念白', '韵脚', '伴奏'],
    correctAnswer: 1,
    explanation: '韵白是京剧念白的一种，具有韵律感。'
  },
  {
    id: 'culture-8',
    category: '戏曲文化',
    question: '京剧的"京白"是什么？',
    options: ['北京话', '普通话', '口语化的念白', '京剧专用语'],
    correctAnswer: 2,
    explanation: '京白是京剧念白的一种，使用北京方言，比较口语化。'
  },
  {
    id: 'history-9',
    category: '京剧发展史',
    question: '京剧被列入世界非物质文化遗产名录是在哪一年？',
    options: ['2008年', '2010年', '2012年', '2014年'],
    correctAnswer: 1,
    explanation: '京剧于2010年被列入联合国教科文组织非物质文化遗产名录。'
  },
  {
    id: 'history-10',
    category: '京剧发展史',
    question: '京剧的发源地是哪里？',
    options: ['上海', '北京', '天津', '南京'],
    correctAnswer: 1,
    explanation: '京剧发源于北京。'
  },
  {
    id: 'facial-9',
    category: '脸谱知识',
    question: '曹操在京剧中是什么脸谱颜色？',
    options: ['红色', '黑色', '白色', '黄色'],
    correctAnswer: 2,
    explanation: '曹操是白脸，代表奸诈。'
  },
  {
    id: 'facial-10',
    category: '脸谱知识',
    question: '张飞在京剧中是什么脸谱颜色？',
    options: ['红色', '黑色', '白色', '蓝色'],
    correctAnswer: 1,
    explanation: '张飞是黑脸，代表刚直勇猛。'
  },
  {
    id: 'role-9',
    category: '行当知识',
    question: '小生属于哪个行当？',
    options: ['生', '旦', '净', '丑'],
    correctAnswer: 0,
    explanation: '小生是生行的一种，扮演年轻男性角色。'
  },
  {
    id: 'role-10',
    category: '行当知识',
    question: '武旦属于哪个行当？',
    options: ['生', '旦', '净', '丑'],
    correctAnswer: 1,
    explanation: '武旦是旦行的一种，扮演擅长武艺的女性角色。'
  },
  {
    id: 'play-11',
    category: '经典剧目',
    question: '《秦香莲》讲述的是什么故事？',
    options: ['爱情故事', '公案故事', '战争故事', '神话故事'],
    correctAnswer: 1,
    explanation: '《秦香莲》是一出公案戏，讲述秦香莲状告陈世美的故事。'
  },
  {
    id: 'play-12',
    category: '经典剧目',
    question: '《野猪林》改编自哪部文学作品？',
    options: ['三国演义', '水浒传', '西游记', '红楼梦'],
    correctAnswer: 1,
    explanation: '《野猪林》改编自《水浒传》中林冲的故事。'
  },
  {
    id: 'skill-9',
    category: '唱念做打',
    question: '"身"在五法中指的是什么？',
    options: ['身体', '身段', '身材', '身法'],
    correctAnswer: 1,
    explanation: '身指的是身段和身体的姿态。'
  },
  {
    id: 'skill-10',
    category: '唱念做打',
    question: '"步"在五法中指的是什么？',
    options: ['步伐', '脚步', '步态', '步法'],
    correctAnswer: 0,
    explanation: '步指的是舞台上的步伐和走位。'
  },
  {
    id: 'culture-9',
    category: '戏曲文化',
    question: '京剧的"场面"指的是什么？',
    options: ['舞台场景', '乐队', '观众席', '后台'],
    correctAnswer: 1,
    explanation: '场面是京剧乐队的俗称。'
  },
  {
    id: 'culture-10',
    category: '戏曲文化',
    question: '京剧的"文场"指的是什么？',
    options: ['文戏演员', '文场乐器', '文戏场景', '文官角色'],
    correctAnswer: 1,
    explanation: '文场指的是京剧乐队中的管弦乐器部分。'
  },
  {
    id: 'history-11',
    category: '京剧发展史',
    question: '京剧的"武场"指的是什么？',
    options: ['武戏演员', '打击乐器', '武戏场景', '武将角色'],
    correctAnswer: 1,
    explanation: '武场指的是京剧乐队中的打击乐器部分。'
  },
  {
    id: 'history-12',
    category: '京剧发展史',
    question: '京剧最早的名称是什么？',
    options: ['京剧', '平剧', '京戏', '皮黄'],
    correctAnswer: 3,
    explanation: '京剧最早被称为皮黄戏。'
  },
  {
    id: 'facial-11',
    category: '脸谱知识',
    question: '窦尔敦在京剧中是什么脸谱颜色？',
    options: ['红色', '黑色', '蓝色', '白色'],
    correctAnswer: 2,
    explanation: '窦尔敦是蓝脸，代表勇猛刚强。'
  },
  {
    id: 'facial-12',
    category: '脸谱知识',
    question: '典韦在京剧中是什么脸谱颜色？',
    options: ['红色', '黄色', '蓝色', '绿色'],
    correctAnswer: 1,
    explanation: '典韦是黄脸，代表勇猛暴躁。'
  },
  {
    id: 'role-11',
    category: '行当知识',
    question: '老旦属于哪个行当？',
    options: ['生', '旦', '净', '丑'],
    correctAnswer: 1,
    explanation: '老旦是旦行的一种，扮演老年女性角色。'
  },
  {
    id: 'role-12',
    category: '行当知识',
    question: '丑行通常分为哪两类？',
    options: ['文丑和武丑', '男丑和女丑', '老丑和小丑', '方巾丑和袍带丑'],
    correctAnswer: 0,
    explanation: '丑行分为文丑和武丑两类。'
  },
  {
    id: 'play-13',
    category: '经典剧目',
    question: '《群英会》讲述的是什么时期的故事？',
    options: ['三国时期', '唐朝', '宋朝', '明朝'],
    correctAnswer: 0,
    explanation: '《群英会》讲述的是三国时期的故事。'
  },
  {
    id: 'play-14',
    category: '经典剧目',
    question: '《贵妃醉酒》的核心唱段是什么？',
    options: ['海岛冰轮初转腾', '劝君王饮酒听虞歌', '看大王在帐中和衣睡稳', '一霎时把七情俱已昧尽'],
    correctAnswer: 0,
    explanation: '《贵妃醉酒》的核心唱段是"海岛冰轮初转腾"。'
  },
  {
    id: 'skill-11',
    category: '唱念做打',
    question: '京剧的唱腔主要分为哪两类？',
    options: ['西皮和二黄', '高腔和低腔', '快板和慢板', '男声和女声'],
    correctAnswer: 0,
    explanation: '京剧唱腔主要分为西皮和二黄两大类。'
  },
  {
    id: 'skill-12',
    category: '唱念做打',
    question: '"西皮"唱腔的特点是什么？',
    options: ['高亢激昂', '低沉婉转', '节奏缓慢', '音调柔和'],
    correctAnswer: 0,
    explanation: '西皮唱腔高亢激昂，常用于表现欢快、激动的情绪。'
  },
  {
    id: 'culture-11',
    category: '戏曲文化',
    question: '京剧的"过门"是什么？',
    options: ['入场门', '出场门', '乐器间奏', '过门石'],
    correctAnswer: 2,
    explanation: '过门是京剧唱腔之间的乐器间奏。'
  },
  {
    id: 'culture-12',
    category: '戏曲文化',
    question: '京剧的"引子"是什么？',
    options: ['开场音乐', '角色上场前的念白或唱段', '引导观众', '开场白'],
    correctAnswer: 1,
    explanation: '引子是角色上场前的念白或唱段，用于介绍角色身份和情绪。'
  },
  {
    id: 'history-13',
    category: '京剧发展史',
    question: '京剧"程派"的创始人是谁？',
    options: ['程砚秋', '程长庚', '程继先', '程之'],
    correctAnswer: 0,
    explanation: '程派的创始人是程砚秋。'
  },
  {
    id: 'history-14',
    category: '京剧发展史',
    question: '京剧"尚派"的创始人是谁？',
    options: ['尚小云', '尚长荣', '尚和玉', '尚小云'],
    correctAnswer: 0,
    explanation: '尚派的创始人是尚小云。'
  },
  {
    id: 'facial-13',
    category: '脸谱知识',
    question: '姜维在京剧中是什么脸谱颜色？',
    options: ['红色', '黑色', '绿色', '红色'],
    correctAnswer: 0,
    explanation: '姜维是红脸，代表忠诚。'
  },
  {
    id: 'facial-14',
    category: '脸谱知识',
    question: '高俅在京剧中是什么脸谱颜色？',
    options: ['红色', '白色', '黑色', '黄色'],
    correctAnswer: 1,
    explanation: '高俅是白脸，代表奸诈。'
  },
  {
    id: 'role-13',
    category: '行当知识',
    question: '娃娃生属于哪个行当？',
    options: ['生', '旦', '净', '丑'],
    correctAnswer: 0,
    explanation: '娃娃生是生行的一种，扮演儿童角色。'
  },
  {
    id: 'role-14',
    category: '行当知识',
    question: '泼辣旦属于哪个行当？',
    options: ['生', '旦', '净', '丑'],
    correctAnswer: 1,
    explanation: '泼辣旦是旦行的一种，扮演性格泼辣的女性角色。'
  },
  {
    id: 'play-15',
    category: '经典剧目',
    question: '《搜孤救孤》讲述的是什么时期的故事？',
    options: ['春秋时期', '战国时期', '汉朝', '唐朝'],
    correctAnswer: 0,
    explanation: '《搜孤救孤》讲述的是春秋时期的故事。'
  },
  {
    id: 'play-16',
    category: '经典剧目',
    question: '《玉堂春》的主角是谁？',
    options: ['苏三', '王宝钏', '秦香莲', '崔莺莺'],
    correctAnswer: 0,
    explanation: '《玉堂春》的主角是苏三。'
  },
  {
    id: 'skill-13',
    category: '唱念做打',
    question: '"二黄"唱腔的特点是什么？',
    options: ['高亢激昂', '低沉婉转', '节奏明快', '音调尖锐'],
    correctAnswer: 1,
    explanation: '二黄唱腔低沉婉转，常用于表现深沉、忧伤的情绪。'
  },
  {
    id: 'skill-14',
    category: '唱念做打',
    question: '京剧的"板腔体"是什么意思？',
    options: ['以板眼为基础的唱腔结构', '板式变化的腔体', '板胡伴奏的唱腔', '板状的舞台'],
    correctAnswer: 0,
    explanation: '板腔体是以板眼为基础的唱腔结构体系。'
  },
  {
    id: 'culture-13',
    category: '戏曲文化',
    question: '京剧的"自报家门"是什么？',
    options: ['自我介绍', '家门地址', '家族背景', '开场白'],
    correctAnswer: 0,
    explanation: '自报家门是角色上场后的自我介绍。'
  },
  {
    id: 'culture-14',
    category: '戏曲文化',
    question: '京剧的"背躬"是什么？',
    options: ['背对观众', '内心独白', '背面鞠躬', '背着弓箭'],
    correctAnswer: 1,
    explanation: '背躬是角色的内心独白，通过念白表达内心想法。'
  },
  {
    id: 'history-15',
    category: '京剧发展史',
    question: '京剧"荀派"的创始人是谁？',
    options: ['荀慧生', '荀灌娘', '荀攸', '荀彧'],
    correctAnswer: 0,
    explanation: '荀派的创始人是荀慧生。'
  },
  {
    id: 'history-16',
    category: '京剧发展史',
    question: '京剧"马派"的创始人是谁？',
    options: ['马连良', '马三立', '马季', '马天宇'],
    correctAnswer: 0,
    explanation: '马派的创始人是马连良。'
  },
  {
    id: 'facial-15',
    category: '脸谱知识',
    question: '尉迟恭在京剧中是什么脸谱颜色？',
    options: ['红色', '黑色', '白色', '蓝色'],
    correctAnswer: 1,
    explanation: '尉迟恭是黑脸，代表刚直。'
  },
  {
    id: 'facial-16',
    category: '脸谱知识',
    question: '杨戬在京剧中是什么脸谱颜色？',
    options: ['红色', '黑色', '金色', '白色'],
    correctAnswer: 2,
    explanation: '杨戬是金脸，代表神仙。'
  },
  {
    id: 'role-15',
    category: '行当知识',
    question: '红生属于哪个行当？',
    options: ['生', '旦', '净', '丑'],
    correctAnswer: 0,
    explanation: '红生是生行的一种，专门扮演红脸的男性角色。'
  },
  {
    id: 'role-16',
    category: '行当知识',
    question: '铜锤花脸属于哪个行当？',
    options: ['生', '旦', '净', '丑'],
    correctAnswer: 2,
    explanation: '铜锤花脸是净行的一种，以唱功为主。'
  },
  {
    id: 'play-17',
    category: '经典剧目',
    question: '《凤还巢》是谁的代表作？',
    options: ['梅兰芳', '程砚秋', '尚小云', '荀慧生'],
    correctAnswer: 0,
    explanation: '《凤还巢》是梅兰芳的代表作。'
  },
  {
    id: 'play-18',
    category: '经典剧目',
    question: '《红娘》是谁的代表作？',
    options: ['梅兰芳', '程砚秋', '尚小云', '荀慧生'],
    correctAnswer: 3,
    explanation: '《红娘》是荀慧生的代表作。'
  },
  {
    id: 'skill-15',
    category: '唱念做打',
    question: '京剧的"散板"是什么？',
    options: ['散乱的板式', '自由节奏的板式', '分散的表演', '散开的舞台'],
    correctAnswer: 1,
    explanation: '散板是一种自由节奏的板式，没有固定的板眼。'
  },
  {
    id: 'skill-16',
    category: '唱念做打',
    question: '京剧的"流水板"是什么？',
    options: ['流水般的节奏', '快速的板式', '流动的表演', '水流的声音'],
    correctAnswer: 1,
    explanation: '流水板是一种节奏较快的板式。'
  },
  {
    id: 'culture-15',
    category: '戏曲文化',
    question: '京剧的"下场诗"是什么？',
    options: ['下场时的诗歌', '角色下场前的念白或唱词', '下场的台词', '下场的音乐'],
    correctAnswer: 1,
    explanation: '下场诗是角色下场前的念白或唱词，总结角色的命运或剧情。'
  },
  {
    id: 'culture-16',
    category: '戏曲文化',
    question: '京剧的"定场诗"是什么？',
    options: ['开场的诗歌', '角色上场后的念白或唱词', '定场的音乐', '固定的台词'],
    correctAnswer: 1,
    explanation: '定场诗是角色上场后的念白或唱词，介绍角色身份和情绪。'
  },
  {
    id: 'history-17',
    category: '京剧发展史',
    question: '京剧"谭派"的创始人是谁？',
    options: ['谭鑫培', '谭富英', '谭元寿', '谭孝曾'],
    correctAnswer: 0,
    explanation: '谭派的创始人是谭鑫培。'
  },
  {
    id: 'history-18',
    category: '京剧发展史',
    question: '京剧"余派"的创始人是谁？',
    options: ['余叔岩', '余三胜', '余秋雨', '余光中'],
    correctAnswer: 0,
    explanation: '余派的创始人是余叔岩。'
  },
  {
    id: 'facial-17',
    category: '脸谱知识',
    question: '孙悟空在京剧中是什么脸谱颜色？',
    options: ['红色', '黄色', '金色', '白色'],
    correctAnswer: 2,
    explanation: '孙悟空是金脸，代表神仙。'
  },
  {
    id: 'facial-18',
    category: '脸谱知识',
    question: '猪八戒在京剧中是什么脸谱颜色？',
    options: ['黑色', '白色', '黄色', '绿色'],
    correctAnswer: 2,
    explanation: '猪八戒是黄脸。'
  },
  {
    id: 'role-17',
    category: '行当知识',
    question: '架子花脸属于哪个行当？',
    options: ['生', '旦', '净', '丑'],
    correctAnswer: 2,
    explanation: '架子花脸是净行的一种，以做工和念白为主。'
  },
  {
    id: 'role-18',
    category: '行当知识',
    question: '武丑属于哪个行当？',
    options: ['生', '旦', '净', '丑'],
    correctAnswer: 3,
    explanation: '武丑是丑行的一种，扮演擅长武艺的滑稽角色。'
  },
  {
    id: 'play-19',
    category: '经典剧目',
    question: '《昭君出塞》讲述的是谁的故事？',
    options: ['王昭君', '西施', '貂蝉', '杨玉环'],
    correctAnswer: 0,
    explanation: '《昭君出塞》讲述的是王昭君的故事。'
  },
  {
    id: 'play-20',
    category: '经典剧目',
    question: '《文姬归汉》讲述的是谁的故事？',
    options: ['蔡文姬', '王昭君', '李清照', '卓文君'],
    correctAnswer: 0,
    explanation: '《文姬归汉》讲述的是蔡文姬的故事。'
  },
  {
    id: 'skill-17',
    category: '唱念做打',
    question: '京剧的"慢板"是什么？',
    options: ['缓慢的板式', '慢速的节奏', '慢悠悠的表演', '慢吞吞的台词'],
    correctAnswer: 0,
    explanation: '慢板是一种节奏缓慢的板式。'
  },
  {
    id: 'skill-18',
    category: '唱念做打',
    question: '京剧的"原板"是什么？',
    options: ['原来的板式', '标准的板式', '原始的表演', '原来的台词'],
    correctAnswer: 1,
    explanation: '原板是一种标准的、中等速度的板式。'
  },
  {
    id: 'culture-17',
    category: '戏曲文化',
    question: '京剧的"趟马"是什么？',
    options: ['骑马的动作', '趟水的动作', '走路的动作', '跑步的动作'],
    correctAnswer: 0,
    explanation: '趟马是京剧中表现骑马的舞蹈动作。'
  },
  {
    id: 'culture-18',
    category: '戏曲文化',
    question: '京剧的"起霸"是什么？',
    options: ['称霸的动作', '武将上场的舞蹈动作', '起床的动作', '霸气的表演'],
    correctAnswer: 1,
    explanation: '起霸是京剧中武将上场前的舞蹈动作，展示威武的气势。'
  },
  {
    id: 'history-19',
    category: '京剧发展史',
    question: '京剧"周派"的创始人是谁？',
    options: ['周信芳', '周恩来', '周润发', '周杰伦'],
    correctAnswer: 0,
    explanation: '周派的创始人是周信芳（麒麟童）。'
  },
  {
    id: 'history-20',
    category: '京剧发展史',
    question: '京剧"盖派"的创始人是谁？',
    options: ['盖叫天', '盖中盖', '盖伦', '盖茨'],
    correctAnswer: 0,
    explanation: '盖派的创始人是盖叫天。'
  },
  {
    id: 'facial-19',
    category: '脸谱知识',
    question: '哪吒在京剧中是什么脸谱颜色？',
    options: ['红色', '黄色', '金色', '白色'],
    correctAnswer: 2,
    explanation: '哪吒是金脸，代表神仙。'
  },
  {
    id: 'facial-20',
    category: '脸谱知识',
    question: '雷震子在京剧中是什么脸谱颜色？',
    options: ['红色', '蓝色', '绿色', '紫色'],
    correctAnswer: 2,
    explanation: '雷震子是绿脸。'
  },
  {
    id: 'role-19',
    category: '行当知识',
    question: '大嗓属于哪个行当的特点？',
    options: ['生', '旦', '净', '丑'],
    correctAnswer: 2,
    explanation: '大嗓是净行的特点，声音洪亮有力。'
  },
  {
    id: 'role-20',
    category: '行当知识',
    question: '小嗓属于哪个行当的特点？',
    options: ['生', '旦', '净', '丑'],
    correctAnswer: 1,
    explanation: '小嗓是旦行的特点，声音细腻婉转。'
  },
  {
    id: 'play-21',
    category: '经典剧目',
    question: '《洛神》是谁的代表作？',
    options: ['梅兰芳', '程砚秋', '尚小云', '荀慧生'],
    correctAnswer: 0,
    explanation: '《洛神》是梅兰芳的代表作。'
  },
  {
    id: 'play-22',
    category: '经典剧目',
    question: '《荒山泪》是谁的代表作？',
    options: ['梅兰芳', '程砚秋', '尚小云', '荀慧生'],
    correctAnswer: 1,
    explanation: '《荒山泪》是程砚秋的代表作。'
  },
  {
    id: 'skill-19',
    category: '唱念做打',
    question: '京剧的"摇板"是什么？',
    options: ['摇晃的板式', '有节奏摇摆的板式', '摇动的表演', '摇晃的台词'],
    correctAnswer: 1,
    explanation: '摇板是一种有节奏摇摆的板式，介于散板和原板之间。'
  },
  {
    id: 'skill-20',
    category: '唱念做打',
    question: '京剧的"快板"是什么？',
    options: ['快速的板式', '快乐的板式', '快捷的表演', '快速的台词'],
    correctAnswer: 0,
    explanation: '快板是一种节奏非常快的板式。'
  },
  {
    id: 'culture-19',
    category: '戏曲文化',
    question: '京剧的"圆场"是什么？',
    options: ['圆形的场地', '绕场行走的动作', '圆形的舞台', '圆满的结局'],
    correctAnswer: 1,
    explanation: '圆场是京剧中演员绕场行走的动作，用于表现空间转换。'
  },
  {
    id: 'culture-20',
    category: '戏曲文化',
    question: '京剧的"亮相"是什么？',
    options: ['亮相的动作', '角色出场时的定型姿势', '亮灯的动作', '亮丽的形象'],
    correctAnswer: 1,
    explanation: '亮相是角色出场或表演高潮时的定型姿势，展示角色的精神面貌。'
  }
];

export function getRandomQuestions(count: number, excludeIds: string[] = []): Question[] {
  const availableQuestions = questionBank.filter(q => !excludeIds.includes(q.id));
  const shuffled = [...availableQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function getQuestionsByCategory(category: QuestionCategory, count: number): Question[] {
  const categoryQuestions = questionBank.filter(q => q.category === category);
  const shuffled = [...categoryQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function analyzeScore(answers: number[], questions: Question[]): {
  totalScore: number;
  correctCount: number;
  categoryStats: Record<string, { correct: number; total: number }>;
} {
  const categoryStats: Record<string, { correct: number; total: number }> = {};
  
  questions.forEach((q, index) => {
    if (!categoryStats[q.category]) {
      categoryStats[q.category] = { correct: 0, total: 0 };
    }
    categoryStats[q.category].total++;
    if (answers[index] === q.correctAnswer) {
      categoryStats[q.category].correct++;
    }
  });
  
  const correctCount = answers.reduce((acc, answer, index) => {
    return acc + (answer === questions[index].correctAnswer ? 1 : 0);
  }, 0);
  
  return {
    totalScore: correctCount * 10,
    correctCount,
    categoryStats
  };
}

export function getTitle(score: number): string {
  if (score >= 90) return '梨园宗师';
  if (score >= 80) return '梨园名角';
  if (score >= 70) return '梨园雅士';
  if (score >= 60) return '梨园新秀';
  return '梨园学徒';
}