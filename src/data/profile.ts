export interface Profile {
  name: string
  nameReading: string
  nameEn: string
  title: string
  tagline: string
  bio: string
  affiliations: Array<{ org: string; role: string; period: string }>
  history: Array<{ event: string; details?: string; period: string }>
  skills: string[]
  social: { x: string; note: string; researchmap: string }
  services: string[]
  email: string
}

export const profile: Profile = {
  name: '宮田 龍',
  nameReading: 'みやた りゅう',
  nameEn: 'Ryu Miyata',
  title: 'サイエンスコミュニケーター',
  tagline: '科学と社会をつなぎ、閉塞感のない未来をつくる',
  bio: `科学コミュニケーター。
「閉塞感のない社会」を目標に社会と科学の架け橋となるコミュニケーション活動に2017年より従事。これまで、AI・ロボット、ニューロテックを始めとしたテクノロジーと人間の関わり方やWell-being、未来における人間らしさのあり方など社会的テーマについて対話を実践してきました。また、SFプロトタイピング（サイエンスフィクションを用いた未来洞察・対話手法）の科学コミュニケーションへの応用にも力を入れています。`,
  affiliations: [
    {
      org: '株式会社アラヤ',
      role: '研究開発部 サイエンスコミュニケーションチーム サイエンスコミュニケーター（チームリーダー）',
      period: '2022年10月〜現在',
    },
    {
      org: '慶應義塾大学',
      role: 'サイエンスフィクション研究開発・実装センター 訪問研究員',
      period: '2024年4月〜現在',
    },
    {
      org: '日本大学 文理学部',
      role: '次世代社会研究センター (RINGS) プロボノ研究員',
      period: '2021年8月〜現在',
    },
    {
      org: '日本SF作家クラブ',
      role: '会員',
      period: '2023年7月〜現在',
    },
  ],
  history: [
    {
      event: '慶應義塾大学 サイエンスフィクション研究開発・実装センター 訪問研究員',
      period: '2024.04 - PRESENT',
      details: 'SF的発想を科学技術の研究開発に活かす手法の研究やワークショップを実施。',
    },
    {
      event: '株式会社アラヤ サイエンスコミュニケーター',
      period: '2022.10 - PRESENT',
      details: '研究開発部にてサイエンスコミュニケーションチームのリーダーを務める。',
    },
    {
      event: '日本科学未来館 科学コミュニケーター',
      period: '2017.04 - 2022.09',
      details: '展示企画、実演、イベント開発、メディア出演など幅広く従事。',
    },
    {
      event: '九州大学大学院 総合理工学府 修士（理学）取得',
      period: '2016.03',
      details: '社会物理学の研究を通じ、集団の意思決定における物理法則性を分析。',
    },
  ],
  skills: [
    'サイエンスコミュニケーション',
    'ニューロテック',
    'SFプロトタイピング',
    '展示企画・ディレクション',
    'ワークショップファシリテーション',
    '執筆・編集',
    '広報・PR',
  ],
  social: {
    x: 'https://x.com/myt_ryu',
    note: 'https://note.com/myt_ryt',
    researchmap: 'https://researchmap.jp/myt_ryu',
  },
  services: [
    'SFプロトタイピングの企画・実施',
    '展示・イベントの企画・ディレクション',
    '科学コミュニケーションに関する講演・研修',
    '執筆・編集（科学記事、広報、SF設定等）',
    '研究開発の社会実装支援',
  ],
  email: 'good.glider.04.19@gmail.com',
}
