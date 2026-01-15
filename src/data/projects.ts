export type Category =
  | 'event'
  | 'writing'
  | 'media'
  | 'production'
  | 'exhibition'
  | 'speaking'
  | 'pr'
  | 'research'
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
  organization?: string
  achievements?: string[]
  relatedLinks?: RelatedLink[]
  gallery?: string[]
}

export const categoryLabels: Record<Category, string> = {
  event: 'イベント/ワークショップの企画制作・ファシリテーション',
  writing: '執筆',
  media: 'メディア出演',
  production: 'プロジェクトの企画/プロデュース',
  exhibition: '展示制作',
  speaking: '講演会などの登壇',
  pr: 'PR/オウンドメディア運用',
  research: '研究',
  other: 'その他',
}

export const categoryColors: Record<Category, string> = {
  event: '#4F46E5',
  writing: '#059669',
  media: '#EA580C',
  production: '#D97706',
  exhibition: '#3B82F6',
  speaking: '#DC2626',
  pr: '#DB2777',
  research: '#7C3AED',
  other: '#6B7280',
}

export const projects: Project[] = [
  {
    id: 'sf-research',
    title: 'SFプロトタイピング研究',
    description:
      '慶應義塾大学サイエンスフィクション研究開発・実装センターにて、SF的発想を科学技術の研究開発に活かす手法の研究やワークショップを実施。',
    category: 'research',
    period: '2024年〜現在',
    tags: ['SFプロトタイピング', '慶應義塾大学', '研究開発'],
    thumbnail: 'images/projects/sf-research.png',
    details: `2024年4月より、慶應義塾大学 サイエンスフィクション研究開発・実装センターに訪問研究員として着任。

SF的発想を科学技術の研究開発に活かす手法の研究や、ワークショップの実施などを行っています。SFを活用した研究開発の社会実装に取り組んでいます。`,
    role: '訪問研究員',
    organization: '慶應義塾大学',
    achievements: [
      'SFプロトタイピング手法の研究',
      'ワークショップの企画・実施',
      '研究開発への SF活用の社会実装',
    ],
  },
  {
    id: 'workers-resort-interview',
    title: 'Worker’s Resort インタビュー掲載',
    description:
      '「脳とテクノロジーがつながる世界でどう働くのか？」をテーマに、ブレインテックとSF思考がもたらす未来の働き方について語ったインタビュー記事。',
    category: 'media',
    period: '2024年3月',
    tags: ['ブレインテック', 'SF思考', '働き方', 'インタビュー'],
    thumbnail: 'images/projects/workers-resort.webp',
    details: `オフィスマネージャーのためのリサーチネットワーク「Worker’s Resort」にインタビュー記事が掲載されました。

「【ブレインテック】脳とテクノロジーがつながる世界でどう働くのか？ SF思考で問うブレインテック時代の最適解」と題し、ブレインテックが働き方やオフィスのあり方をどう変えるのか、またSFの想像力を活用してどのように未来の対話をデザインしていくべきかについて詳しくお答えしています。`,
    role: 'インタビュー',
    organization: 'Worker’s Resort (株式会社フロンティアコンサルティング)',
    achievements: [
      'ブレインテックと未来の働き方に関する知見の提供',
      'SF思考を用いた対話デザインの手法紹介',
    ],
    relatedLinks: [
      {
        label: '記事を読む（Worker’s Resort）',
        url: 'https://www.workersresort.com/articles/12711/',
      },
    ],
  },
  {
    id: 'designart-tokyo-2023',
    title: 'サイエンス×クリエイティブ #2 - センス・オブ・ワンダーを求めて',
    description:
      'DESIGNART Tokyo 2023にて開催。研究者・アーティストと協働し、科学の持つ「センス・オブ・ワンダー」を探求するイベントの企画/ファシリテーションを担当。',
    category: 'event',
    period: '2023年10月',
    tags: ['DESIGNART', 'アート', 'モデレーター'],
    link: 'https://100banch.com/magazine/55506/',
    featured: true,
    thumbnail: 'images/projects/designart-tokyo-2023.jpg',
    details: `DESIGNART Tokyo 2023にて開催された「サイエンス×クリエイティブ #2 - センス・オブ・ワンダーを求めて」の企画/ファシリテーションを担当。

研究者・アーティストと協働し、科学の根源にある「面白さ」や「驚き」を探求。異分野の専門家が集まり、科学の持つ「センス・オブ・ワンダー」について深く議論しました。`,
    role: '企画/ファシリテーション',
    organization: 'Academimic',
    achievements: [
      '異分野の専門家による対話の場を創出',
      '科学とアートの接点を探求',
    ],
    relatedLinks: [
      {
        label: '科学の根源にある面白さをわかちあうには——DESIGNART TOKYO 2023アーカイブ',
        url: 'https://100banch.com/magazine/55506/',
      },
    ],
  },
  {
    id: 'jsai-2023',
    title: '人工知能学会全国大会「人工知能と虚構の科学」',
    description:
      '2023年の人工知能学会全国大会にて企画セッションのオーガナイザーを務め、AIと物語の関係について専門家らと議論。',
    category: 'event',
    period: '2023年',
    tags: ['人工知能学会', 'AI', 'SF'],
    thumbnail: 'images/projects/jsai-2023.jpg',
    details: `2023年の人工知能学会全国大会（JSAI2023）にて、「人工知能と虚構の科学」と題した企画セッションのオーガナイザーを務めました。

AIと物語（フィクション）の関係について、AI研究者、SF作家、哲学者など多様な専門家を招いて議論。人工知能研究における想像力や物語の役割について深く掘り下げました。`,
    role: 'セッションオーガナイザー',
    organization: '人工知能学会 (JSAI)',
    achievements: [
      '企画セッションの立案・運営',
      '多分野の専門家による議論を実現',
    ],
  },
  {
    id: 'neu-world',
    title: 'SFプロトタイピングによるサイエンスコミュニケーションプロジェクト「Neu World」',
    description:
      'ムーンショット型研究開発目標1「Internet of Brains」金井プロジェクトにおける科学コミュニケーションプロジェクトの立ち上げ・プロデュース。',
    category: 'production',
    period: '2022年〜現在',
    tags: ['ムーンショット', 'BMI', '科学コミュニケーション'],
    thumbnail: 'images/projects/neu-world.jpg',
    details: `内閣府ムーンショット型研究開発事業・目標1「2050年までに、人が身体・脳・空間・時間の制約から解放された社会を実現」の一環として、「Internet of Brains（IoB）金井プロジェクト」における科学コミュニケーションプロジェクト「Neu World」の立ち上げ・プロデュースを担当しています。

ブレイン・マシン・インターフェース（BMI）の研究を題材に、SF作品やビジュアル資料を用いて2050年の未来像を多様な人々と議論する取り組みを進めています。`,
    role: 'プロジェクト立ち上げ・プロデュース',
    organization: '株式会社アラヤ / ムーンショット目標1',
    achievements: [
      '科学コミュニケーションプロジェクト「Neu World」の立ち上げ',
      'コンセプトムービーの企画・制作',
      'プロジェクト公式SNSの運営',
    ],
    relatedLinks: [
      {
        label: '公式WEBサイト',
        url: 'https://neu-world.link/',
      },
      {
        label: 'ニューロダイバーシティプロジェクト インタビュー',
        url: 'https://neuro-diversity.world/report/interview2024_araya/',
      },
    ],
  },
  {
    id: 'tokyofm-onemorning-miraikan',
    title: 'Tokyo FM「ONE MORNING」出演',
    description:
      '番組内の情報コーナーにて、日本科学未来館で開催中の特別展「きみとロボット」の見どころを詳しく紹介しました。',
    category: 'media',
    period: '2022年7月',
    tags: ['ラジオ出演', 'Tokyo FM', '日本科学未来館', 'きみとロボット'],
    thumbnail: 'images/projects/tokyofm-onemorning.jpg',
    details: `Tokyo FM「ONE MORNING」（2022年7月21日放送）に出演しました。

番組内にて、日本科学未来館で開催されていた特別展「きみとロボット〜ニンゲンッテ、ナンダ？〜」の魅力を紹介。展示されているロボットたちの特徴や、最先端のロボティクスが描く未来について解説しました。`,
    role: '番組出演（展示解説）',
    organization: '日本科学未来館 / Tokyo FM',
    achievements: [
      'ラジオ番組での特別展「きみとロボット」紹介',
      '専門家としてのロボット技術解説',
    ],
  },
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
    organization: '株式会社アラヤ',
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
    organization: '株式会社アラヤ / ムーンショット目標1',
    achievements: [
      'BMI研究の社会発信',
      'SF作品を活用した未来像の議論',
      '多様なステークホルダーとの対話',
    ],
  },
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
    organization: '文藝春秋',
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
      '『機動戦士ガンダムSEED』『シン・仮面ライダー』『怪獣8号』などサブカル作品と科学を絡めた記事を執筆。',
    category: 'writing',
    period: '継続中',
    tags: ['週刊文春', 'サブカルチャー', '科学解説'],
    thumbnail: 'images/projects/bunshun-enta.jpg',
    details: `文春ムック『週刊文春エンタ＋』の各特集号において、『機動戦士ガンダムSEED』『シン・仮面ライダー』『怪獣8号』など、話題の作品に登場する科学技術について解説。エンターテインメントを入り口に、科学的な視点で作品世界観を深堀りして楽しむ「○○○は現代科学の夢を見るか」を連載しています。`,
    role: '寄稿者',
    organization: '文藝春秋',
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
    organization: '各種主催者',
    achievements: [
      '科学館でのイベント講師',
      '企業向けワークショップの実施',
      '学会・カンファレンスでの登壇',
    ],
  },
  {
    id: '1242-zoom-miraikan',
    title: 'ニッポン放送「辛坊治郎 ズーム そこまで言うか！」出演',
    description:
      '番組内の「街角ステーション～噂を求めてどこまでも」コーナーにて、レポーターの吉田悠希さんとともに日本科学未来館から生中継リポートを行いました。',
    category: 'media',
    period: '2022年6月',
    tags: ['ラジオ出演', 'ニッポン放送', '日本科学未来館', 'きみとロボット'],
    thumbnail: 'images/projects/media-placeholder.jpg',
    details: `ニッポン放送「辛坊治郎 ズーム そこまで言うか！」（2022年6月22日放送回）に出演しました。

番組内の「街角ステーション～噂を求めてどこまでも」コーナーにて、レポーターの吉田悠希さんとともに日本科学未来館から生中継で出演。開催中の特別展「きみとロボット」の見どころや、ロボットと人間の未来について現地からリポートしました。`,
    role: '番組出演（現地リポート解説）',
    organization: '日本科学未来館 / ニッポン放送',
    achievements: [
      'ラジオ生放送での展示リポート・解説',
      'レポーターとの対話による科学コミュニケーションの実践',
    ],
    relatedLinks: [
      {
        label: '番組ブログ 放送アーカイブ',
        url: 'https://www.1242.com/zoom/zoom_blog/blog20220622-278096/',
      },
    ],
  },
  {
    id: 'junsanpo-miraikan',
    title: 'テレビ朝日「じゅん散歩」出演',
    description:
      '高田純次さんが各地を歩く「じゅん散歩」にて、日本科学未来館を訪れた際、開催中の特別展「きみとロボット」を案内・解説しました。',
    category: 'media',
    period: '2022年3月',
    tags: ['テレビ出演', 'じゅん散歩', '日本科学未来館', 'きみとロボット'],
    thumbnail: 'images/projects/media-placeholder.jpg',
    details: `テレビ朝日「じゅん散歩」（2022年3月17日放送回）に出演しました。

番組内の「日本科学未来館」散歩の回にて、当時開催中であった特別展「きみとロボット〜ニンゲンッテ、ナンダ？〜」の案内・解説を担当。高田純次さんに最新のロボット技術や展示の魅力を紹介しました。`,
    role: '番組出演（展示案内・解説）',
    organization: '日本科学未来館 / テレビ朝日',
    achievements: [
      '特別展「きみとロボット」の展示案内・解説',
      '最新ロボット技術の一般向け解説',
    ],
    relatedLinks: [
      {
        label: 'じゅん散歩 番組バックナンバー',
        url: 'https://www.tv-asahi.co.jp/junsanpo/backnumber2/0317/',
      },
    ],
  },
  {
    id: 'kimi-to-robot',
    title: '特別展「きみとロボット〜ニンゲンッテ、ナンダ？〜」',
    description:
      '日本科学未来館にて開催された特別展の展示企画・ディレクションを担当。ロボットと人間の関係性を多角的に探求する展示を実現。',
    category: 'exhibition',
    period: '2020〜2022年',
    tags: ['展示企画', 'ロボット', '日本科学未来館'],
    featured: true,
    thumbnail: 'images/projects/kimi-to-robot.jpg',
    details: `日本科学未来館にて2022年3月〜8月に開催された特別展「きみとロボット〜ニンゲンッテ、ナンダ？〜」の展示企画・ディレクションを担当しました。

本展示では、約90種類130点のロボットを展示し、「ロボットと人間の関係性」を多角的に探求。来場者がロボットとの対話を通じて「人間とは何か」を考える体験型の展示を実現しました。

展示企画の立案から、展示構成の設計、広報戦略の策定、会期中のトークセッションの企画・運営まで幅広く携わりました。`,
    role: '展示企画・ディレクション、広報',
    organization: '日本科学未来館',
    achievements: [
      '約90種類130点のロボットを展示',
      '来場者数：約XX万人を達成',
      '関連トークセッションを複数回開催',
      'メディア向け解説記事の執筆',
    ],
    relatedLinks: [
      {
        label: '日本科学未来館 特別展ページ',
        url: 'https://www.miraikan.jst.go.jp/exhibitions/spexhibition/kimirobo.html',
      },
    ],
  },
  {
    id: 'rri-sf-prototyping',
    title:
      '責任ある研究とイノベーションを促進するSFプロトタイピング手法の企画調査',
    description:
      'RRI（責任ある研究・イノベーション）を促進するためのSFプロトタイピング手法の研究プロジェクト。',
    category: 'research',
    period: '2021〜2023年',
    tags: ['RRI', 'SFプロトタイピング', '研究'],
    thumbnail: 'images/projects/rri-sf-prototyping.png',
    details: `RRI（Responsible Research and Innovation：責任ある研究・イノベーション）を促進するためのSFプロトタイピング手法について、企画調査を行うプロジェクトに、研究協力メンバーとして参画しました。

SFプロトタイピングを活用して、科学技術の社会的影響を多角的に検討し、責任あるイノベーションのあり方を探求しました。`,
    role: '研究協力メンバー',
    organization: '',
    achievements: [
      'RRI促進のための手法研究',
      'SFプロトタイピングの活用方法の調査',
    ],
  },
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
    organization: '日本科学未来館 / テレビ東京',
    achievements: ['全国放送のテレビ番組に出演', '子供向けに科学実験を解説'],
    relatedLinks: [
      {
        label: 'テレビ大阪 番組情報',
        url: 'https://www.tv-osaka.co.jp/onair/detail/oaid=2040292/',
      },
    ],
  },
  {
    id: 'hirameki-no-niwa',
    title: '空間インスタレーション「ひらめきの庭」',
    description:
      '科学館の新しい楽しみ方を提案する空間インスタレーション。来場者がゆっくりと思考し、未来に向けたひらめきを見つける場を創出。',
    category: 'exhibition',
    period: '2020年8月〜',
    tags: ['展示制作', 'インスタレーション', '日本科学未来館'],
    thumbnail: 'images/projects/hirameki-no-niwa.png',
    details: `日本科学未来館にて開催された空間インスタレーション「ひらめきの庭」の制作に携わりました。
    
新型コロナウイルスと共に生きる時代において、広くゆったりとした展示空間を生かし、来場者が頭の中に「余白」をつくり、新しい「知」と出合い、未来を変えるひらめきを発見するための場所を制作。

「いきつぎの森」「ささやきのベンチ」「はばたきの泉」「ときめきのピアノ」といった複数のゾーンで構成され、映像、科学者の言葉、インタラクティブな演出、AIによる音楽などを通じて、日常を離れた深い思考体験が展示を通して提供されました。`,
    role: 'アシスタント',
    organization: '日本科学未来館',
    achievements: [
      'ささやきのベンチのキュレーション',
      '展示制作のアシスタント',
    ],
    relatedLinks: [
      {
        label: '日本科学未来館 イベント詳細',
        url: 'https://www.miraikan.jst.go.jp/events/202008081475.html',
      },
    ],
  },
  {
    id: 'cosmic-front-next',
    title: 'NHK BSプレミアム「コズミックフロント☆NEXT」出演',
    description:
      '「“宇宙アニメ”は実現する!?」回にリポーターとして出演。ガンダムなどの宇宙アニメに登場するロボットや技術の現実性について解説。',
    category: 'media',
    period: '2021年1月',
    tags: ['NHK', 'コズミックフロント', '宇宙ロボット', 'ガンダム'],
    thumbnail: 'images/projects/cosmicfront.jpg',
    details: `NHK BSプレミアム「コズミックフロント☆NEXT『“宇宙アニメ”は実現する!?』」（2021年1月21日放送）に出演しました。

番組内ではリポーターを務め、機動戦士ガンダムなどの宇宙アニメに登場する「宇宙ロボット」や「重力制御」といった夢の技術が、現代の科学技術でどこまで実現可能なのかを最前線の研究現場から解説しました。`,
    role: '番組リポーター・科学解説',
    organization: 'NHK / 日本科学未来館',
    achievements: [
      'リポーターとして番組に出演',
      '宇宙ロボットやアニメの科学考証を解説',
    ],
  },
  {
    id: 'escape-game',
    title: 'リアル脱出ゲーム「人類滅亡からの脱出」',
    description:
      '日本科学未来館と体験型ゲーム会社SCRAPのコラボによるリアル脱出ゲーム。科学とゲームを融合した試みとして話題に。',
    category: 'event',
    period: '2020〜2021年',
    tags: ['リアル脱出ゲーム', 'SCRAP', '日本科学未来館'],
    thumbnail: 'images/projects/escape-game.jpg',
    details: `日本科学未来館と体験型ゲーム会社SCRAPのコラボレーションによるリアル脱出ゲーム「人類滅亡からの脱出」（2020〜2021年開催）に携わりました。

科学とゲームを融合した体験型イベントとして話題を集め、来場者に科学の面白さを体感してもらう機会を創出しました。`,
    role: '企画協力',
    organization: '日本科学未来館',
    achievements: [
      '科学とゲームの融合イベントを実現',
      '体験型の科学コミュニケーション',
    ],
  },
  {
    id: 'miraikan-blog-arts-culture',
    title: '科学コミュニケーターブログ「芸術文化に満ちあふれた未来をつくるためには」',
    description:
      '未来館の展示「未来逆算思考」を題材に、文化財の保存と公開のジレンマやテロノロジーによる新しい鑑賞の形について執筆。',
    category: 'writing',
    period: '2020年7月',
    tags: ['ブログ', '日本科学未来館', '文化財', 'テクノロジー'],
    thumbnail: 'images/projects/miraikan-blog.png',
    details: `日本科学未来館の科学コミュニケーターブログにて、展示「未来逆算思考」を題材にした記事を執筆しました。

「芸術文化に満ちあふれた未来をつくるためには」というテーマで、文化財の保存と公開の間に生じるジレンマや、デジタルアーカイブ・スーパークローン技術による新しい芸術鑑賞の可能性、そして私たちが理想とする未来の芸術文化のあり方について考案しました。`,
    role: '執筆',
    organization: '日本科学未来館',
    achievements: [
      '「未来逆算思考」を題材にしたブログ記事の執筆',
      '専門的なトピック（文化財保存等）を一般向けに解説',
    ],
    relatedLinks: [
      {
        label: 'ブログ記事を読む',
        url: 'https://blog.miraikan.jst.go.jp/articles/20200728post-352.html',
      },
    ],
  },
  {
    id: 'gendai-business-sound-symbolism',
    title: '「強い怪獣」を思い出して。それ、名前に「濁音」が入ってませんか？',
    description:
      '言葉の響きが特定のイメージを想起させる「音象徴」について、怪獣の名前などを例に科学的に解説。',
    category: 'writing',
    period: '2020.01.23',
    tags: ['現代ビジネス', '音象徴', '科学解説', '怪獣'],
    link: 'https://gendai.media/articles/-/69820',
    thumbnail: 'images/projects/gendai-sound-symbolism.jpg',
    details: `講談社のウェブメディア「現代ビジネス」に寄稿した解説記事です。

「強い怪獣の名前には濁音が入りやすい」という切り口から、言葉の音が持つイメージ（音象徴）の不思議について、言語学や認知科学の知見を交えて分かりやすく解説しました。

『ウルトラマン』シリーズের 怪獣名の分析や、「マルマ」と「タケテ」の実験（ブーバ/キキ効果）などを紹介し、私たちが無意識に音から受け取っている印象の正体に迫っています。`,
    role: '寄稿者',
    organization: '日本科学未来館',
    relatedLinks: [
      {
        label: '現代ビジネス 記事ページ',
        url: 'https://gendai.media/articles/-/69820',
      },
    ],
  },
  {
    id: 'nobel-live-2019',
    title: 'ニコニコ生放送「ノーベル賞発表の瞬間をみんなで迎えよう＠日本科学未来館」 (2019)',
    description:
      '2019年のノーベル賞発表に合わせた特別生放送。番組ディレクションおよび運営コメントを担当。',
    category: 'pr',
    period: '2019年10月',
    tags: ['ニコニコ生放送', 'ノーベル賞', '日本科学未来館', 'サイエンスコミュニケーション'],
    thumbnail: 'images/projects/nobel-live-2019.png',
    details: `2019年のノーベル生理学・医学賞、物理学賞、化学賞の発表に際し、日本科学未来館から連日配信されたニコニコ生放送特別番組に携わりました。

前年に引き続き番組の企画・ディレクションを担当。運営コメントを通じた視聴者との双方向なコミュニケーションを行い、吉野彰氏の化学賞受賞など歴史的な瞬間を数万人の視聴者とともに共有しました。`,
    role: '番組ディレクション / 運営コメント',
    organization: '日本科学未来館',
    achievements: [
      '吉野彰氏の受賞を含む全3番組のディレクション',
      '専門家と連携したリアルタイムな科学解説',
      '運営コメント（天の声）による視聴者コミュニケ―ション',
    ],
    relatedLinks: [
      {
        label: '未来館 イベント情報',
        url: 'https://www.miraikan.jst.go.jp/events/201909251476.html',
      },
    ],
  },
  {
    id: 'nobel-live-2018',
    title: 'ニコニコ生放送「ノーベル賞発表の瞬間をみんなで迎えよう＠日本科学未来館」',
    description:
      '2018年のノーベル賞発表に合わせた特別生放送。番組ディレクションおよび運営コメントを担当。',
    category: 'pr',
    period: '2018年10月',
    tags: ['ニコニコ生放送', 'ノーベル賞', '日本科学未来館', 'サイエンスコミュニケーション'],
    thumbnail: 'images/projects/nobel-live-2018.png',
    details: `2018年のノーベル生理学・医学賞、物理学賞、化学賞の発表に際し、日本科学未来館から連日配信されたニコニコ生放送特別番組に携わりました。

番組の企画・ディレクションを担当するとともに、運営コメント（天の声）として視聴者とのコミュニケーションや科学的な解説の補足を行い、発表の瞬間を視聴者と共有しました。`,
    role: '番組ディレクション / 運営コメント',
    organization: '日本科学未来館',
    achievements: [
      '受賞発表に合わせた連日の生放送番組ディレクション',
      '運営コメントによる双方向の科学解説・コミュニケーション',
      '専門家と視聴者をつなぐリアルタイムな番組進行',
    ],
    relatedLinks: [
      {
        label: '未来館 イベント情報',
        url: 'https://www.miraikan.jst.go.jp/events/201810011477.html',
      },
    ],
  },
  {
    id: 'ai-design-fiction',
    title: '想像力のアップデート：人工知能のデザインフィクション',
    description:
      '科学技術と社会の未来像を描くSFプロトタイピングプロジェクト。',
    category: 'research',
    period: '2018〜2021年',
    tags: ['デザインフィクション', 'AI', 'SFプロトタイピング'],
    featured: true,
    details: `「想像力のアップデート：人工知能のデザインフィクション」は、科学技術と社会の未来像を描くSFプロトタイピングプロジェクトです。

研究協力メンバーとして参画しました。`,
    role: 'プロジェクト参画',
    organization: '',
    achievements: [
      'SFプロトタイピング手法の実践',
    ],
  },
  {
    id: 'niconico-live-2018',
    title: 'ニコニコ生放送「【科学技術週間】未来館の科学コミュニケーターと楽しもう！2018」',
    description:
      '科学技術週間に合わせた特別生放送番組。企画ディレクションおよび番組出演を担当。',
    category: 'pr',
    period: '2018年4月',
    tags: ['ニコニコ生放送', '科学技術週間', '日本科学未来館', 'サイエンスコミュニケーション'],
    thumbnail: 'images/projects/niconico-live.jpg',
    details: `2018年の「科学技術週間」に合わせ、日本科学未来館から4日間連続で配信されたニコニコ生放送特別番組に出演しました。

番組の企画ディレクションを担当するとともに、科学コミュニケーターとして番組に出演。視聴者とのリアルタイムな対話を通じて、身近な疑問から最新の科学トピックまで幅広く解説を行いました。`,
    role: '番組ディレクション / 出演',
    organization: '日本科学未来館',
    achievements: [
      '生放送番組の企画・ディレクション',
      '科学コミュニケーターとしての番組出演',
      '視聴者とのリアルタイム対話によるSCの実践',
    ],
    relatedLinks: [
      {
        label: 'ニコニコ生放送 番組ページ',
        url: 'https://live.nicovideo.jp/watch/lv311709931',
      },
    ],
  },
  {
    id: 'cinema-miraikan',
    title: 'Cinema未来館シリーズ',
    description:
      'SF映画を題材に未来を語り合うトークイベントシリーズを同僚と立ち上げ、初回のファシリテーターを務めた。',
    category: 'event',
    period: '日本科学未来館在職中',
    tags: ['SF映画', 'トークイベント', '日本科学未来館'],
    thumbnail: 'images/projects/cinema-miraikan.jpg',
    details: `日本科学未来館にて、SF映画を題材に未来を語り合うトークイベントシリーズ「Cinema未来館」を同僚と立ち上げました。

科学とエンターテインメントを融合し、映画という親しみやすい切り口から科学技術の未来について来場者と対話する場を創出。自ら初回のファシリテーターも務めました。`,
    role: 'イベント企画・立ち上げ、ファシリテーター',
    organization: '日本科学未来館',
    achievements: [
      'トークイベントシリーズの企画・立ち上げ',
      '初回ファシリテーターを担当',
      '科学とエンターテインメントの融合を実現',
    ],
  },
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
    organization: '九州大学大学院',
    achievements: [
      '修士（理学）取得',
      '政権支持率データの物理学的分析',
      '社会現象への物理学的アプローチの実践',
    ],
  },
  {
    id: 'musashino-univ-lecture-2026',
    title: '武蔵野大学 ゲスト講師（サステナビリティ学特殊授業Ｃ）',
    description:
      'SFプロトタイピングを応用した科学コミュニケーションについて、講義とワークショップを実施。',
    category: 'speaking',
    period: '2026年1月14日',
    tags: ['武蔵野大学', 'SFプロトタイピング', 'ワークショップ', '大学講義'],
    details: `武蔵野大学の「サステナビリティ学特殊授業Ｃ」において、ゲスト講師として登壇しました。
    
SFプロトタイピングを科学コミュニケーションにどのように応用できるかについて講義を行い、学生とともに未来の社会像を議論するワークショップを実施しました。`,
    role: 'ゲスト講師',
    organization: '武蔵野大学',
    achievements: [
      'SFプロトタイピングの理論と実践に関する講義',
      '未来洞察ワークショップのファシリテーション',
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
