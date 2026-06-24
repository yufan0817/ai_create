export interface OperaSong {
  id: string;
  title: string;
  play: string;
  character: string;
  lyrics: string;
  category: string;
}

export const operaSongs: OperaSong[] = [
  {
    id: 'kongchengji-1',
    title: '我本是卧龙岗散淡的人',
    play: '空城计',
    character: '诸葛亮',
    lyrics: '我本是卧龙岗散淡的人，论阴阳如反掌保定乾坤。先帝爷下南阳御驾三请，算就了汉家业鼎足三分。官封到武乡侯执掌帅印，东西征南北剿保定乾坤。周文王访姜尚周室大振，汉诸葛怎比得前辈先生。闲无事在敌楼我亮一亮琴音，我面前缺少个知音的人。',
    category: '老生'
  },
  {
    id: 'kongchengji-2',
    title: '城楼观山景',
    play: '空城计',
    character: '诸葛亮',
    lyrics: '正在城楼观山景，耳听得城外乱纷纷。旌旗招展空翻影，却原来是司马发来的兵。我也曾差人去打听，打听得司马领兵就往西行。一来是马谡无谋少才能，二来是将帅不和失街亭。你连得三城多侥幸，贪而无厌又夺我西城。',
    category: '老生'
  },
  {
    id: 'guifeizuijiu-1',
    title: '海岛冰轮初转腾',
    play: '贵妃醉酒',
    character: '杨玉环',
    lyrics: '海岛冰轮初转腾，见玉兔，玉兔又早东升。那冰轮离海岛，乾坤分外明。皓月当空，恰便似嫦娥离月宫，奴似嫦娥离月宫。好一似嫦娥下九重，清清冷落在广寒宫，啊，广寒宫。玉石桥斜倚把栏杆靠，鸳鸯来戏水，金色鲤鱼在水面朝，啊，水面朝。长空雁，雁儿飞，哎呀雁儿呀，雁儿并飞腾，闻奴的声音落花荫，这景色撩人欲醉，不觉来到百花亭。',
    category: '青衣'
  },
  {
    id: 'guifeizuijiu-2',
    title: '满园春色惹人醉',
    play: '贵妃醉酒',
    character: '杨玉环',
    lyrics: '满园春色惹人醉，悄悄走进百花亭。趁着这酒意来相会，莫负良辰美景。啊，啊，啊，啊！这杯酒，这杯酒，我要饮了它，饮了它，醉了醉了！',
    category: '青衣'
  },
  {
    id: 'bawangbieji-1',
    title: '看大王在帐中和衣睡稳',
    play: '霸王别姬',
    character: '虞姬',
    lyrics: '看大王在帐中和衣睡稳，我这里出帐外且散愁情。轻移步走向前荒郊站定，猛抬头见碧落月色清明。(白)看，云敛晴空，冰轮乍涌，好一派清秋光景。',
    category: '青衣'
  },
  {
    id: 'muguiguiguaishuai-1',
    title: '辕门外三声炮如同雷震',
    play: '穆桂英挂帅',
    character: '穆桂英',
    lyrics: '辕门外三声炮如同雷震，天波府里走出来我保国臣。头戴金冠压双鬓，当年的铁甲又披上了身。帅字旗，飘入云，斗大的"穆"字震乾坤。上写着：浑天侯穆氏桂英，谁料想我五十三岁又管三军。',
    category: '旦角'
  },
  {
    id: 'suolinnang-1',
    title: '一霎时把七情俱已昧尽',
    play: '锁麟囊',
    character: '薛湘灵',
    lyrics: '一霎时把七情俱已昧尽，参透了酸辛处泪湿衣襟。我只道铁富贵一生注定，又谁知祸福事顷刻分明。想当年我也曾撒娇使性，到今朝哪怕我不信前尘。这也是老天爷一番教训，他教我收余恨、免娇嗔、且自新、改性情，休恋逝水、苦海回身、早悟兰因。',
    category: '青衣'
  },
  {
    id: 'zhiquweihushan-1',
    title: '今日痛饮庆功酒',
    play: '智取威虎山',
    character: '杨子荣',
    lyrics: '今日痛饮庆功酒，壮志未酬誓不休。来日方长显身手，甘洒热血写春秋！',
    category: '现代戏'
  },
  {
    id: 'hongdengji-1',
    title: '都有一颗红亮的心',
    play: '红灯记',
    character: '李铁梅',
    lyrics: '奶奶，您听我说！我家的表叔数不清，没有大事不登门。虽说是，虽说是亲眷又不相认，可他比亲眷还要亲。爹爹和奶奶齐声唤亲人，这里的奥妙我也能猜出几分。他们和爹爹都一样，都有一颗红亮的心！',
    category: '现代戏'
  },
  {
    id: 'shajiabang-1',
    title: '智斗',
    play: '沙家浜',
    character: '阿庆嫂',
    lyrics: '垒起七星灶，铜壶煮三江。摆开八仙桌，招待十六方。来的都是客，全凭嘴一张。相逢开口笑，过后不思量。人一走，茶就凉，有什么周详不周详！',
    category: '现代戏'
  },
  {
    id: 'zhameian-1',
    title: '包龙图打坐在开封府',
    play: '铡美案',
    character: '包拯',
    lyrics: '包龙图打坐在开封府，尊一声驸马爷细听端的。曾记得端午日朝贺天子，我与你在朝房曾把话提。说起了招赘事你神色不定，我料你在原郡定有前妻。到如今她母子前来寻你，你不该杀妻灭子丧天良。劝驸马你认下是正理，祸到临头悔不及。',
    category: '净角'
  },
  {
    id: 'silangtanmu-1',
    title: '杨延辉坐宫院自思自叹',
    play: '四郎探母',
    character: '杨延辉',
    lyrics: '杨延辉坐宫院自思自叹，想起了当年事好不惨然。我好比笼中鸟有翅难展，我好比虎离山受了孤单，我好比南来雁失群飞散，我好比浅水龙困在沙滩。想当年沙滩会一场血战，只杀得血成河尸骨堆山。我被擒改名姓身落北番，将公主招驸马匹配良缘。',
    category: '老生'
  },
  {
    id: 'silangtanmu-2',
    title: '听他言吓得我浑身是汗',
    play: '四郎探母',
    character: '铁镜公主',
    lyrics: '听他言吓得我浑身是汗，十五载到今日才吐真言。他本是杨家将把名姓改换，他思家乡想骨肉不得团圆。我这里走向前再把礼见，尊一声驸马爷细听咱言。早晚间休怪我言语怠慢，不知者不怪罪你海量放宽。',
    category: '旦角'
  },
  {
    id: 'hongmenyan-1',
    title: '劝君王饮酒听虞歌',
    play: '霸王别姬',
    character: '虞姬',
    lyrics: '劝君王饮酒听虞歌，解君忧闷舞婆娑。嬴秦无道把江山破，英雄四路起干戈。自古常言不欺我，成败兴亡一刹那。宽心饮酒宝帐坐，且听军情报如何。',
    category: '青衣'
  },
  {
    id: 'daqiaocheng-1',
    title: '忆昔当年护乾坤',
    play: '大保国',
    character: '徐延昭',
    lyrics: '忆昔当年护乾坤，保国家哪顾得性命残生。先帝爷白帝城龙归海境，托孤与我等扶保乾坤。李良贼在金殿把本动，要让江山与他人。我不容在金殿把本动，那时节怒恼了李良奸臣。他把我绑至在法场上，要斩我头首落埃尘。多亏了陈千岁把本保，救下了老臣的性命残生。',
    category: '老生'
  }
];

export const songCategories = ['全部', '老生', '青衣', '旦角', '净角', '现代戏'];

export function searchSongs(query: string, category: string = '全部') {
  let results = operaSongs;
  
  if (category !== '全部') {
    results = results.filter(song => song.category === category);
  }
  
  if (query) {
    const lowerQuery = query.toLowerCase();
    results = results.filter(song => 
      song.title.toLowerCase().includes(lowerQuery) ||
      song.play.toLowerCase().includes(lowerQuery) ||
      song.character.toLowerCase().includes(lowerQuery) ||
      song.lyrics.toLowerCase().includes(lowerQuery)
    );
  }
  
  return results;
}