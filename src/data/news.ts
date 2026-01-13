export interface NewsItem {
  id: string
  date: string
  title: string
  category?: 'info' | 'event' | 'media' | 'other'
  url?: string
}

export const newsItems: NewsItem[] = [
  {
    id: '1',
    date: '2026.01.13',
    title: 'ポートフォリオサイトをリニューアルしました',
    category: 'info',
  },
  // Add more items here
]
