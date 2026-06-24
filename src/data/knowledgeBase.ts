export interface KnowledgeItem {
  id: string;
  category: string;
  title: string;
  content: string;
}

export const knowledgeBase: KnowledgeItem[] = [
  {
    id: 'know-1',
    category: '脸谱知识',
    title: '脸谱的起源',
    content: '京剧脸谱起源于唐代的面具，经过长期发展，逐渐形成了一套完整的脸谱体系，成为京剧艺术的重要组成部分。'
  },
  {
    id: 'know-2',
    category: '行当知识',
    title: '生行的分类',
    content: '生行分为老生、小生、武生、红生等，老生扮演中年以上男性，小生扮演年轻男性，武生扮演武艺高强的男性角色。'
  },
  {
    id: 'know-3',
    category: '经典剧目',
    title: '京剧四大名旦',
    content: '京剧四大名旦是梅兰芳、程砚秋、尚小云、荀慧生，他们各自创立了独特的艺术流派，对京剧发展产生了深远影响。'
  },
  {
    id: 'know-4',
    category: '历史人物',
    title: '梅兰芳访美',
    content: '1930年，梅兰芳率团赴美国演出，这是京剧首次登上国际舞台，让世界了解了中国京剧艺术。'
  },
  {
    id: 'know-5',
    category: '唱念做打',
    title: '京剧四功',
    content: '唱、念、做、打是京剧表演的四种基本手段，唱是歌唱，念是念白，做是表演动作，打是武打。'
  },
  {
    id: 'know-6',
    category: '戏曲文化',
    title: '京胡的魅力',
    content: '京胡是京剧的主要伴奏乐器，音色高亢明亮，能很好地衬托演员的唱腔，是京剧音乐的灵魂。'
  },
  {
    id: 'know-7',
    category: '京剧发展史',
    title: '京剧的形成',
    content: '京剧形成于19世纪中叶的北京，融合了徽剧、汉剧、昆曲等多种戏曲艺术的精华。'
  },
  {
    id: 'know-8',
    category: '脸谱知识',
    title: '脸谱的色彩象征',
    content: '红色代表忠诚勇敢，黑色代表刚正不阿，白色代表奸诈阴险，黄色代表勇猛暴躁，金色银色代表神仙鬼怪。'
  },
  {
    id: 'know-9',
    category: '行当知识',
    title: '旦行的分类',
    content: '旦行分为青衣、花旦、武旦、老旦等，青衣扮演端庄稳重的女性，花旦扮演活泼可爱的年轻女性。'
  },
  {
    id: 'know-10',
    category: '经典剧目',
    title: '《贵妃醉酒》的艺术价值',
    content: '《贵妃醉酒》是梅兰芳的代表作，通过优美的唱腔和细腻的表演，展现了杨贵妃复杂的内心世界。'
  },
  {
    id: 'know-11',
    category: '历史人物',
    title: '同光十三绝',
    content: '同光十三绝是同治、光绪年间的十三位著名京剧演员，他们代表了京剧早期的最高水平。'
  },
  {
    id: 'know-12',
    category: '唱念做打',
    title: '五法的重要性',
    content: '手、眼、身、法、步是京剧表演的五种基本技法，演员通过这五法来塑造角色、表达情感。'
  },
  {
    id: 'know-13',
    category: '戏曲文化',
    title: '京剧的虚拟性',
    content: '京剧舞台具有虚拟性，通过演员的表演来表现场景和动作，如用马鞭代表骑马，用船桨代表划船。'
  },
  {
    id: 'know-14',
    category: '京剧发展史',
    title: '京剧的传承',
    content: '京剧传承至今已有两百多年历史，通过一代又一代艺术家的努力，不断创新发展，成为中国文化的瑰宝。'
  },
  {
    id: 'know-15',
    category: '脸谱知识',
    title: '脸谱的绘制',
    content: '脸谱的绘制非常讲究，需要根据角色的性格和身份来设计，每个脸谱都有独特的含义和象征意义。'
  },
  {
    id: 'know-16',
    category: '行当知识',
    title: '净行的特点',
    content: '净行又称花脸，以面部化妆和粗犷的表演风格为特点，通常扮演性格鲜明、具有强烈个性的角色。'
  },
  {
    id: 'know-17',
    category: '经典剧目',
    title: '现代京剧的发展',
    content: '现代京剧如《智取威虎山》《红灯记》《沙家浜》等，将传统京剧与现代题材相结合，开创了京剧发展的新方向。'
  },
  {
    id: 'know-18',
    category: '历史人物',
    title: '京剧的海外传播',
    content: '京剧不仅在中国广受欢迎，还传播到世界各地，成为中国文化对外交流的重要载体。'
  },
  {
    id: 'know-19',
    category: '唱念做打',
    title: '唱腔的流派',
    content: '京剧唱腔有梅派、程派、尚派、荀派等多种流派，每个流派都有独特的唱腔风格和表演特点。'
  },
  {
    id: 'know-20',
    category: '戏曲文化',
    title: '京剧的服饰',
    content: '京剧服饰称为行头，包括蟒袍、靠、褶子等，色彩鲜艳，图案精美，能够很好地表现角色的身份和性格。'
  }
];

export function getRandomKnowledge(): KnowledgeItem {
  const index = Math.floor(Math.random() * knowledgeBase.length);
  return knowledgeBase[index];
}