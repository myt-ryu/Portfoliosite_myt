import { Link } from 'react-router-dom'
import { newsItems } from '../data/news'

export function News() {
  // Show only the latest 3 items
  const displayItems = newsItems.slice(0, 3)

  return (
    <section id="news" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-12 text-center">
          News
        </h2>

        <div className="space-y-6">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 border-b border-gray-100 pb-6 last:border-0 last:pb-0"
            >
              <div className="flex items-center gap-4">
                <time className="text-sm text-gray-400 font-mono">
                  {item.date}
                </time>
                {item.category && (
                  <span className="px-2 py-0.5 text-xs font-medium text-gray-500 bg-gray-100 rounded">
                    {item.category.toUpperCase()}
                  </span>
                )}
              </div>

              {item.projectId ? (
                <Link
                  to={`/project/${item.projectId}`}
                  className="text-base text-gray-900 hover:text-gray-600 transition-colors flex-1"
                >
                  {item.title}
                </Link>
              ) : item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-900 hover:text-gray-600 transition-colors flex-1"
                >
                  {item.title}
                  <span className="inline-block ml-1 text-gray-400">↗</span>
                </a>
              ) : (
                <p className="text-base text-gray-900 flex-1">{item.title}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
