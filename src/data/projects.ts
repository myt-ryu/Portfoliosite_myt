export type Category =
  | 'direction'
  | 'facilitation'
  | 'writing'
  | 'production'
  | 'speaking'
  | 'research'
  | 'pr'
  | 'media'
  | 'other'

export interface RelatedLink {
  label: string
  url: string
}

export interface Project {
  id: string
  title: string
  description: string
  category: Category
  period?: string
  tags?: string[]
  link?: string
  featured?: boolean
  thumbnail?: string
  // 詳細ページ用
  details?: string
  role?: string
  achievements?: string[]
  relatedLinks?: RelatedLink[]
  gallery?: string[]
}

export const categoryLabels: Record<Category, string> = {
  direction: 'イベント/ワークショップのディレクション',
  facilitation: 'イベント/ワークショップのファシリテーション',
  writing: '執筆',
  production: 'プロジェクト企画・プロデュース',
  speaking: '講演会登壇',
  research: '研究',
  pr: '広報・PR',
  media: 'メディア出演',
  other: 'その他',
}

export const categoryColors: Record<Category, string> = {
  direction: '#4F46E5',
  facilitation: '#0891B2',
  writing: '#059669',
  production: '#D97706',
  speaking: '#DC2626',
  research: '#7C3AED',
  pr: '#DB2777',
  media: '#EA580C',
  other: '#6B7280',
}

export const projects: Project[] = [
  // ディレクション
  {
    id: 'kimi-to-robot',
    title: '特別展「きみとロボット〜ニンゲンッテ、ナンダ？〜」',
    description:
      '日本科学未来館にて開催された特別展の展示企画・ディレクションを担当。ロボットと人間の関係性を多角的に探求する展示を実現。',
    category: 'direction',
    period: '2020〜2022年',
    tags: ['展示企画', 'ロボット', '日本科学未来館'],
    featured: true,
    thumbnail: 'images/projects/kimi-to-robot.jpg',
    details: `日本科学未来館にて2022年3月〜8月に開催された特別展「きみとロボット〜ニンゲンッテ、ナンダ？〜」の展示企画・ディレクションを担当しました。

本展示では、約90種類130点のロボットを展示し、「ロボットと人間の関係性」を多角的に探求。来場者がロボットとの対話を通じて「人間とは何か」を考える体験型の展示を実現しました。

展示企画の立案から、展示構成の設計、広報戦略の策定、会期中のトークセッションの企画・運営まで幅広く携わりました。`,
    role: '展示企画・ディレクション、広報',
    achievements: [
      '約90種類130点のロボットを展示',
      '来場者数：約XX万人を達成',
      '関連トークセッションを複数回開催',
      'メディア向け解説記事の執筆',
    ],
    relatedLinks: [
      {
        label: '日本科学未来館 特別展ページ',
        url: 'https://www.miraikan.jst.go.jp/',
      },
    ],
  },
  {
    id: 'neu-world',
    title: 'Neu World プロジェクト',
    description:
      'ムーンショット型研究開発目標1「Internet of Brains」金井プロジェクトにおける科学コミュニケーションプロジェクトの立ち上げ・プロデュース。',
    category: 'direction',
    period: '2022年〜現在',
    tags: ['ムーンショット', 'BMI', '科学コミュニケーション'],
    thumbnail: 'images/projects/neu-world.jpg',
    details: `内閣府ムーンショット型研究開発事業・目標1「2050年までに、人が身体・脳・空間・時間の制約から解放された社会を実現」の一環として、「Internet of Brains（IoB）金井プロジェクト」における科学コミュニケーションプロジェクト「Neu World」の立ち上げ・プロデュースを担当しています。

ブレイン・マシン・インターフェース（BMI）の研究を題材に、SF作品やビジュアル資料を用いて2050年の未来像を多様な人々と議論する取り組みを進めています。`,
    role: 'プロジェクト立ち上げ・プロデュース',
    achievements: [
      '科学コミュニケーションプロジェクト「Neu World」の立ち上げ',
      'コンセプトムービーの企画・制作',
      'プロジェクト公式SNSの運営',
    ],
    relatedLinks: [
      {
        label: 'ニューロダイバーシティプロジェクト インタビュー',
        url: 'https://neuro-diversity.world/report/interview2024_araya/',
      },
    ],
  },
  {
    id: 'cinema-miraikan',
    title: 'Cinema未来館シリーズ',
    description:
      'SF映画を題材に未来を語り合うトークイベントシリーズを同僚と立ち上げ、初回のファシリテーターを務めた。',
    category: 'direction',
    period: '日本科学未来館在職中',
    tags: ['SF映画', 'トークイベント', '日本科学未来館'],
    thumbnail: 'images/projects/cinema-miraikan.jpg',
    details: `日本科学未来館にて、SF映画を題材に未来を語り合うトークイベントシリーズ「Cinema未来館」を同僚と立ち上げました。

科学とエンターテインメントを融合し、映画という親しみやすい切り口から科学技術の未来について来場者と対話する場を創出。自ら初回のファシリテーターも務めました。`,
    role: 'イベント企画・立ち上げ、ファシリテーター',
    achievements: [
      'トークイベントシリーズの企画・立ち上げ',
      '初回ファシリテーターを担当',
      '科学とエンターテインメントの融合を実現',
    ],
  },

  // ファシリテーション
  {
    id: 'designart-tokyo-2023',
    title: 'サイエンス×クリエイティブ #2 - センス・オブ・ワンダーを求めて',
    description:
      'DESIGNART Tokyo 2023にて開催。研究者・アーティストと協働し、科学の持つ「センス・オブ・ワンダー」を探求するイベントのモデレーターを務めた。',
    category: 'facilitation',
    period: '2023年10月',
    tags: ['DESIGNART', 'アート', 'モデレーター'],
    link: 'https://100banch.com/magazine/55506/',
    featured: true,
    thumbnail: 'images/projects/designart-tokyo-2023.jpg',
    details: `DESIGNART Tokyo 2023にて開催された「サイエンス×クリエイティブ #2 - センス・オブ・ワンダーを求めて」のモデレーターを務めました。

研究者・アーティストと協働し、科学の根源にある「面白さ」や「驚き」を探求。異分野の専門家が集まり、科学の持つ「センス・オブ・ワンダー」について深く議論しました。`,
    role: 'モデレーター',
    achievements: [
      '異分野の専門家による対話の場を創出',
      '科学とアートの接点を探求',
    ],
    relatedLinks: [
      {
        label: '100BANCH アーカイブ記事',
        url: 'https://100banch.com/magazine/55506/',
      },
    ],
  },
  {
    id: 'jsai-2023',
    title: '人工知能学会全国大会「人工知能と虚構の科学」',
    description:
      '2023年の人工知能学会全国大会にて企画セッションのオーガナイザーを務め、AIと物語の関係について専門家らと議論。',
    category: 'facilitation',
    period: '2023年',
    tags: ['人工知能学会', 'AI', 'SF'],
    thumbnail: 'images/projects/jsai-2023.jpg',
    details: `2023年の人工知能学会全国大会（JSAI2023）にて、「人工知能と虚構の科学」と題した企画セッションのオーガナイザーを務めました。

AIと物語（フィクション）の関係について、AI研究者、SF作家、哲学者など多様な専門家を招いて議論。人工知能研究における想像力や物語の役割について深く掘り下げました。`,
    role: 'セッションオーガナイザー',
    achievements: [
      '企画セッションの立案・運営',
      '多分野の専門家による議論を実現',
    ],
  },

  // 執筆
  {
    id: 'bunshun-ronten',
    title: '文藝春秋『○○年の論点100』シリーズ',
    description:
      '2022年、2023年、2025年、2026年の論点100で、科学技術に関する論考を執筆。',
    category: 'writing',
    period: '2022年〜現在',
    tags: ['文藝春秋', '科学技術', '論考'],
    featured: true,
    thumbnail: 'images/projects/bunshun-ronten.jpg',
    details: `文藝春秋のオピニオン誌『○○年の論点100』シリーズに、2022年版以降（2024年版を除く）継続的に科学技術に関する論考を寄稿しています。

最新の科学技術トピックについて、専門知識を分かりやすい形で一般読者に向けて解説。社会と科学技術の接点について考察しています。`,
    role: '寄稿者',
    achievements: [
      '2026年版：シンギュラリティの到来は早まったのか',
      '2025年版：イーロン・マスクが夢見る“脳と機械を接続する”未来',
      '2023年版：デジタルクローンが提起する「『人格』とは何か」という問い',
      '2022年版：分身＝“アバター”が人格に影響 ＶＲが孕む可能性と危険性',
    ],
  },
  {
    id: 'bunshun-enta',
    title: '週刊文春エンタ+ 各特集号',
    description:
      '『機動戦士ガンダム 水星の魔女』『シン・仮面ライダー』『怪獣8号』などサブカル作品と科学を絡めた記事を執筆。',
    category: 'writing',
    period: '継続中',
    tags: ['週刊文春', 'サブカルチャー', '科学解説'],
    thumbnail: 'images/projects/bunshun-enta.jpg',
    details: `文春ムック『週刊文春エンタ＋』の各特集号において、人気サブカルチャー作品と科学を絡めた記事を執筆しています。

『機動戦士ガンダム 水星の魔女』『シン・仮面ライダー』『怪獣8号』など、話題の作品に登場する科学技術について解説。エンターテインメントを入り口に、科学の面白さを伝えています。`,
    role: '寄稿者',
    achievements: [
      '人気作品と科学を結びつけた記事を複数執筆',
      'エンターテインメントを通じた科学コミュニケーション',
    ],
    relatedLinks: [
      {
        label: 'アラヤ ニュースリリース',
        url: 'https://www.araya.org/publications/news20230407/',
      },
    ],
  },
  {
    id: 'bunshun-plus',
    title: '文藝春秋Plus 寄稿',
    description:
      'ウェブ媒体「文藝春秋Plus」にて科学技術に関する記事を執筆。イーロン・マスクの"脳と機械を接続する"技術に関する展望記事など。',
    category: 'writing',
    period: '継続中',
    tags: ['文藝春秋Plus', 'BMI', 'テクノロジー'],
    link: 'https://bunshun.jp/bungeishunju/author/67e94618a53aef1044000005',
    thumbnail: 'images/projects/bunshun-plus.jpg',
    details: `ウェブ媒体「文藝春秋Plus」にて、科学技術に関する記事を執筆しています。

2025年4月には、イーロン・マスクの"脳と機械を接続する"技術（Neuralink）に関する展望記事を掲載。最先端のテクノロジーについて、分かりやすく解説しています。`,
    role: '寄稿者',
    achievements: ['最先端テクノロジーの解説記事を執筆', 'BMI技術の展望を発信'],
    relatedLinks: [
      {
        label: '文藝春秋Plus 著者ページ',
        url: 'https://bunshun.jp/bungeishunju/author/67e94618a53aef1044000005',
      },
    ],
  },

  // プロジェクト企画・プロデュース
  {
    id: 'ai-design-fiction',
    title: '想像力のアップデート：人工知能のデザインフィクション',
    description:
      '科学技術と社会の未来像を描くSFプロトタイピングプロジェクト。',
    category: 'production',
    period: '2018〜2021年',
    tags: ['デザインフィクション', 'AI', 'SFプロトタイピング'],
    featured: true,
    thumbnail: 'images/projects/ai-design-fiction.jpg',
    details: `「想像力のアップデート：人工知能のデザインフィクション」は、科学技術と社会の未来像を描くSFプロトタイピングプロジェクトです。

デザインフィクションの手法を用いて、AIが普及した未来社会のシナリオを作成。多様なステークホルダーとの対話を通じて、望ましい未来像について議論を行いました。`,
    role: 'プロジェクト参画',
    achievements: [
      'SFプロトタイピング手法の実践',
      'AI社会の未来シナリオ作成',
      '多様なステークホルダーとの対話',
    ],
  },
  {
    id: 'rri-sf-prototyping',
    title:
      '責任ある研究とイノベーションを促進するSFプロトタイピング手法の企画調査',
    description:
      'RRI（責任ある研究・イノベーション）を促進するためのSFプロトタイピング手法の研究プロジェクト。',
    category: 'production',
    period: '2021〜2023年',
    tags: ['RRI', 'SFプロトタイピング', '研究'],
    thumbnail: 'images/projects/rri-sf-prototyping.jpg',
    details: `RRI（Responsible Research and Innovation：責任ある研究・イノベーション）を促進するためのSFプロトタイピング手法について、企画調査を行うプロジェクトに参画しました。

SFプロトタイピングを活用して、科学技術の社会的影響を多角的に検討し、責任あるイノベーションのあり方を探求しました。`,
    role: 'プロジェクト参画',
    achievements: [
      'RRI促進のための手法研究',
      'SFプロトタイピングの活用方法の調査',
    ],
  },

  // 講演会登壇
  {
    id: 'lectures',
    title: '各種講演・トークイベント登壇',
    description:
      '科学館や各種イベントで講師・モデレーターを務め、科学と社会をつなぐ対話の場を積極的に創出。',
    category: 'speaking',
    period: '継続中',
    tags: ['講演', 'モデレーター', '科学コミュニケーション'],
    featured: true,
    thumbnail: 'images/projects/lectures.jpg',
    details: `科学館や各種イベントにおいて、講師・モデレーターとして登壇し、科学と社会をつなぐ対話の場を積極的に創出しています。

AI、ロボット、脳科学、SFプロトタイピングなど、幅広いテーマで講演やワークショップを実施。参加者との対話を大切にしながら、科学の面白さや社会との関わりについて伝えています。`,
    role: '講師・モデレーター',
    achievements: [
      '科学館でのイベント講師',
      '企業向けワークショップの実施',
      '学会・カンファレンスでの登壇',
    ],
  },

  // 研究
  {
    id: 'social-physics',
    title: '社会物理学研究',
    description:
      '修士研究では、各国の政権支持率の時系列データを「集団の意思決定」の動態とみなして分析し、その中に物理法則性を見出す試みに取り組んだ。',
    category: 'research',
    period: '2014〜2016年',
    tags: ['社会物理学', '九州大学', '修士研究'],
    featured: true,
    thumbnail: 'images/projects/social-physics.jpg',
    details: `九州大学大学院 総合理工学府 量子プロセス理工学専攻にて、社会物理学の研究に取り組みました。

修士研究では、各国の政権支持率の時系列データを「集団の意思決定」の動態とみなして分析。社会現象の中に物理法則性を見出す試みを行い、修士（理学）を取得しました。`,
    role: '研究者（修士課程）',
    achievements: [
      '修士（理学）取得',
      '政権支持率データの物理学的分析',
      '社会現象への物理学的アプローチの実践',
    ],
  },
  {
    id: 'sf-research',
    title: 'SFプロトタイピング研究',
    description:
      '慶應義塾大学サイエンスフィクション研究開発・実装センターにて、SF的発想を科学技術の研究開発に活かす手法の研究やワークショップを実施。',
    category: 'research',
    period: '2024年〜現在',
    tags: ['SFプロトタイピング', '慶應義塾大学', '研究開発'],
    thumbnail: 'images/projects/sf-research.png',
    details: `2024年4月より、慶應義塾大学 サイエンスフィクション研究開発・実装センターに特任研究員として着任。

SF的発想を科学技術の研究開発に活かす手法の研究や、ワークショップの実施などを行っています。SFを活用した研究開発の社会実装に取り組んでいます。`,
    role: '特任研究員',
    achievements: [
      'SFプロトタイピング手法の研究',
      'ワークショップの企画・実施',
      '研究開発への SF活用の社会実装',
    ],
  },

  // 広報・PR
  {
    id: 'araya-pr',
    title: '株式会社アラヤ 研究広報',
    description:
      '研究開発部のサイエンスコミュニケーションチームリーダーとして、社内研究の広報およびムーンショット型研究開発の科学コミュニケーション活動を担当。',
    category: 'pr',
    period: '2022年10月〜現在',
    tags: ['アラヤ', '研究広報', 'チームリーダー'],
    featured: true,
    thumbnail: 'images/projects/araya-pr.jpg',
    details: `株式会社アラヤ 研究開発部にて、サイエンスコミュニケーションチームのリーダーを務めています。

社内研究の広報活動を統括し、ムーンショット型研究開発目標1「Internet of Brains」金井プロジェクトにおける科学コミュニケーション活動を担当。研究成果を社会に分かりやすく伝える取り組みを推進しています。`,
    role: 'サイエンスコミュニケーションチームリーダー',
    achievements: [
      'チームリーダーとして広報活動を統括',
      '研究成果の社会発信',
      'コンセプトムービーの企画',
    ],
  },
  {
    id: 'iob-communication',
    title: 'Internet of Brains (IoB) 金井プロジェクト 広報',
    description:
      'ブレイン・マシン・インターフェース研究を題材に、SF作品やビジュアル資料を用いて2050年の未来像を多様な人々と議論する取り組みを推進。',
    category: 'pr',
    period: '2022年〜現在',
    tags: ['ムーンショット', 'BMI', '科学コミュニケーション'],
    thumbnail: 'images/projects/iob-communication.jpg',
    details: `内閣府ムーンショット型研究開発事業・目標1「Internet of Brains（IoB）金井プロジェクト」の広報を担当しています。

ブレイン・マシン・インターフェース（BMI）研究を題材に、SF作品やビジュアル資料を用いて2050年の未来像を多様な人々と議論する取り組みを推進。科学技術の社会受容に向けた対話を大切にしています。`,
    role: '広報担当',
    achievements: [
      'BMI研究の社会発信',
      'SF作品を活用した未来像の議論',
      '多様なステークホルダーとの対話',
    ],
  },

  // その他
  {
    id: 'ohasta',
    title: 'テレビ東京系列『おはスタ』出演',
    description:
      '日本科学未来館の科学コミュニケーターとしてスタジオで科学実験の解説を行った。',
    category: 'media',
    period: '2021年11月',
    tags: ['テレビ出演', '科学実験', 'おはスタ'],
    featured: true,
    thumbnail: 'images/projects/ohasta.png',
    details: `テレビ東京系列の子供向け番組『おはスタ』に、日本科学未来館の科学コミュニケーターとして出演しました（2021年11月8日放送回）。

スタジオで科学実験の解説を行い、子供たちに科学の面白さを伝えました。`,
    role: '出演者・科学実験解説',
    achievements: ['全国放送のテレビ番組に出演', '子供向けに科学実験を解説'],
    relatedLinks: [
      {
        label: 'テレビ大阪 番組情報',
        url: 'https://www.tv-osaka.co.jp/onair/detail/oaid=2040292/',
      },
    ],
  },
  {
    id: 'escape-game',
    title: 'リアル脱出ゲーム「人類滅亡からの脱出」',
    description:
      '日本科学未来館と体験型ゲーム会社SCRAPのコラボによるリアル脱出ゲーム。科学とゲームを融合した試みとして話題に。',
    category: 'other',
    period: '2020〜2021年',
    tags: ['リアル脱出ゲーム', 'SCRAP', '日本科学未来館'],
    thumbnail: 'images/projects/escape-game.jpg',
    details: `日本科学未来館と体験型ゲーム会社SCRAPのコラボレーションによるリアル脱出ゲーム「人類滅亡からの脱出」（2020〜2021年開催）に携わりました。

科学とゲームを融合した体験型イベントとして話題を集め、来場者に科学の面白さを体感してもらう機会を創出しました。`,
    role: '企画協力',
    achievements: [
      '科学とゲームの融合イベントを実現',
      '体験型の科学コミュニケーション',
    ],
  },
]

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured)
}

export const getProjectsByCategory = (category: Category): Project[] => {
  return projects.filter((p) => p.category === category)
}

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((p) => p.id === id)
}
