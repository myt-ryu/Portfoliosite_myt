export type Category =
  | 'direction'
  | 'facilitation'
  | 'writing'
  | 'production'
  | 'speaking'
  | 'research'
  | 'pr'
  | 'other'

export interface Project {
  id: string
  title: string
  description: string
  category: Category
  period?: string
  tags?: string[]
  link?: string
  featured?: boolean
}

export const categoryLabels: Record<Category, string> = {
  direction: 'イベント/ワークショップのディレクション',
  facilitation: 'イベント/ワークショップのファシリテーション',
  writing: '執筆',
  production: 'プロジェクト企画・プロデュース',
  speaking: '講演会登壇',
  research: '研究',
  pr: '広報・PR',
  other: 'その他',
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
  },
  {
    id: 'neu-world',
    title: 'Neu World プロジェクト',
    description:
      'ムーンショット型研究開発目標1「Internet of Brains」金井プロジェクトにおける科学コミュニケーションプロジェクトの立ち上げ・プロデュース。',
    category: 'direction',
    period: '2022年〜現在',
    tags: ['ムーンショット', 'BMI', '科学コミュニケーション'],
  },
  {
    id: 'cinema-miraikan',
    title: 'Cinema未来館シリーズ',
    description:
      'SF映画を題材に未来を語り合うトークイベントシリーズを同僚と立ち上げ、初回のファシリテーターを務めた。',
    category: 'direction',
    period: '日本科学未来館在職中',
    tags: ['SF映画', 'トークイベント', '日本科学未来館'],
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
  },
  {
    id: 'jsai-2023',
    title: '人工知能学会全国大会「人工知能と虚構の科学」',
    description:
      '2023年の人工知能学会全国大会にて企画セッションのオーガナイザーを務め、AIと物語の関係について専門家らと議論。',
    category: 'facilitation',
    period: '2023年',
    tags: ['人工知能学会', 'AI', 'SF'],
  },

  // 執筆
  {
    id: 'bunshun-ronten',
    title: '文藝春秋『○○年の論点100』シリーズ',
    description:
      '2022年版以降、連続して科学技術に関する論考を寄稿。専門知識を分かりやすい形で社会へ発信。',
    category: 'writing',
    period: '2022年〜現在',
    tags: ['文藝春秋', '科学技術', '論考'],
    featured: true,
  },
  {
    id: 'bunshun-enta',
    title: '週刊文春エンタ+ 各特集号',
    description:
      '『機動戦士ガンダム 水星の魔女』『シン・仮面ライダー』『怪獣8号』などサブカル作品と科学を絡めた記事を執筆。',
    category: 'writing',
    period: '継続中',
    tags: ['週刊文春', 'サブカルチャー', '科学解説'],
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
  },
  {
    id: 'rri-sf-prototyping',
    title: '責任ある研究とイノベーションを促進するSFプロトタイピング手法の企画調査',
    description:
      'RRI（責任ある研究・イノベーション）を促進するためのSFプロトタイピング手法の研究プロジェクト。',
    category: 'production',
    period: '2021〜2023年',
    tags: ['RRI', 'SFプロトタイピング', '研究'],
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
  },
  {
    id: 'sf-research',
    title: 'SFプロトタイピング研究',
    description:
      '慶應義塾大学サイエンスフィクション研究開発・実装センターにて、SF的発想を科学技術の研究開発に活かす手法の研究やワークショップを実施。',
    category: 'research',
    period: '2024年〜現在',
    tags: ['SFプロトタイピング', '慶應義塾大学', '研究開発'],
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
  },
  {
    id: 'iob-communication',
    title: 'Internet of Brains (IoB) 金井プロジェクト 広報',
    description:
      'ブレイン・マシン・インターフェース研究を題材に、SF作品やビジュアル資料を用いて2050年の未来像を多様な人々と議論する取り組みを推進。',
    category: 'pr',
    period: '2022年〜現在',
    tags: ['ムーンショット', 'BMI', '科学コミュニケーション'],
  },

  // その他
  {
    id: 'ohasta',
    title: 'テレビ東京系列『おはスタ』出演',
    description:
      '日本科学未来館の科学コミュニケーターとしてスタジオで科学実験の解説を行った。',
    category: 'other',
    period: '2021年11月',
    tags: ['テレビ出演', '科学実験', 'おはスタ'],
    featured: true,
  },
  {
    id: 'escape-game',
    title: 'リアル脱出ゲーム「人類滅亡からの脱出」',
    description:
      '日本科学未来館と体験型ゲーム会社SCRAPのコラボによるリアル脱出ゲーム。科学とゲームを融合した試みとして話題に。',
    category: 'other',
    period: '2020〜2021年',
    tags: ['リアル脱出ゲーム', 'SCRAP', '日本科学未来館'],
  },
]

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured)
}

export const getProjectsByCategory = (category: Category): Project[] => {
  return projects.filter((p) => p.category === category)
}
