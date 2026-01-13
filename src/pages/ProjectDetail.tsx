import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  getProjectById,
  categoryLabels,
  categoryColors,
  projects,
} from '../data/projects'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [imageError, setImageError] = useState(false)
  const basePath = import.meta.env.BASE_URL

  const project = id ? getProjectById(id) : undefined

  // 前後のプロジェクトを取得
  const currentIndex = projects.findIndex((p) => p.id === id)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="text-2xl font-light text-gray-900 mb-4">
              Project not found
            </h1>
            <Link
              to="/#projects"
              className="text-gray-600 hover:text-gray-900 underline"
            >
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const categoryColor = categoryColors[project.category]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative">
          {/* Background Image or Placeholder */}
          <div className="h-64 sm:h-80 md:h-96 relative overflow-hidden">
            {project.thumbnail && !imageError ? (
              <img
                src={`${basePath}${project.thumbnail}`}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div
                className="w-full h-full"
                style={{ backgroundColor: `${categoryColor}15` }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 pb-8 sm:pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <span
                className="inline-block px-3 py-1 text-xs font-medium text-white rounded mb-4"
                style={{ backgroundColor: categoryColor }}
              >
                {categoryLabels[project.category]}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-2">
                {project.title}
              </h1>
              {project.period && (
                <p className="text-white/80 text-sm">{project.period}</p>
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-8">
                {/* Description */}
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    概要
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    {project.details ? (
                      project.details.split('\n\n').map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-gray-600 leading-relaxed mb-4"
                        >
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Achievements */}
                {project.achievements && project.achievements.length > 0 && (
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                      成果・実績
                    </h2>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: categoryColor }}
                          />
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Related Links - Moved to Main Content */}
                {project.relatedLinks && project.relatedLinks.length > 0 && (
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                      関連リンク
                    </h2>
                    <ul className="space-y-2">
                      {project.relatedLinks.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 underline flex items-center gap-1"
                          >
                            <svg
                              className="w-4 h-4 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                              />
                            </svg>
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                      ギャラリー
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      {project.gallery.map((image, index) => (
                        <div
                          key={index}
                          className="aspect-video rounded-lg overflow-hidden bg-gray-100"
                        >
                          <img
                            src={`${basePath}${image}`}
                            alt={`${project.title} - ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Organization */}
                {project.organization && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      組織・所属
                    </h3>
                    <p className="text-gray-600 text-sm">{project.organization}</p>
                  </div>
                )}

                {/* Role */}
                {project.role && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      担当・役割
                    </h3>
                    <p className="text-gray-600 text-sm">{project.role}</p>
                  </div>
                )}

                {/* Period */}
                {project.period && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      期間
                    </h3>
                    <p className="text-gray-600 text-sm">{project.period}</p>
                  </div>
                )}

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      キーワード
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* External Link */}
                {project.link && (
                  <div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors"
                      style={{ backgroundColor: categoryColor }}
                    >
                      外部サイトを見る
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-t border-gray-100 py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {prevProject ? (
                <button
                  onClick={() => navigate(`/project/${prevProject.id}`)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <div className="text-left">
                    <span className="text-xs text-gray-400 block">前の実績</span>
                    <span className="text-sm line-clamp-1">
                      {prevProject.title}
                    </span>
                  </div>
                </button>
              ) : (
                <div />
              )}

              <Link
                to="/#projects"
                className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-full hover:border-gray-300 hover:text-gray-900 transition-all"
              >
                一覧に戻る
              </Link>

              {nextProject ? (
                <button
                  onClick={() => navigate(`/project/${nextProject.id}`)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <div className="text-right">
                    <span className="text-xs text-gray-400 block">次の実績</span>
                    <span className="text-sm line-clamp-1">
                      {nextProject.title}
                    </span>
                  </div>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
