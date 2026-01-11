import { useState } from 'react'
import {
  projects,
  categoryLabels,
  type Category,
  type Project,
} from '../data/projects'

const categories: Category[] = [
  'direction',
  'facilitation',
  'writing',
  'production',
  'speaking',
  'research',
  'pr',
  'other',
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-lg p-6 hover:border-gray-200 hover:shadow-sm transition-all">
      <div className="mb-3">
        <span className="text-xs text-gray-400">
          {categoryLabels[project.category]}
        </span>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h3>
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        {project.description}
      </p>
      {project.period && (
        <p className="text-xs text-gray-400 mb-3">{project.period}</p>
      )}
      {project.tags && (
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-xs text-gray-500 bg-gray-50 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export function Projects() {
  const [showAll, setShowAll] = useState(false)

  // カテゴリごとにfeaturedプロジェクトを1つずつ取得
  const featuredByCategory = categories.map((category) => {
    const categoryProjects = projects.filter((p) => p.category === category)
    return (
      categoryProjects.find((p) => p.featured) || categoryProjects[0] || null
    )
  }).filter((p): p is Project => p !== null)

  const displayProjects = showAll ? projects : featuredByCategory

  return (
    <section id="projects" className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-16 text-center">
          Projects
        </h2>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm text-gray-600 border border-gray-200 rounded-full hover:border-gray-300 hover:text-gray-900 transition-all"
          >
            {showAll ? (
              <>
                Show Less
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
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </>
            ) : (
              <>
                View All Projects
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
