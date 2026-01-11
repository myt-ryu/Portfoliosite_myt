import { Link } from 'react-router-dom'
import {
  projects,
  type Category,
  type Project,
} from '../data/projects'
import { ProjectCard } from './ProjectCard'

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

export function Projects() {
  // カテゴリごとにfeaturedプロジェクトを1つずつ取得
  const featuredByCategory = categories
    .map((category) => {
      const categoryProjects = projects.filter((p) => p.category === category)
      return (
        categoryProjects.find((p) => p.featured) || categoryProjects[0] || null
      )
    })
    .filter((p): p is Project => p !== null)

  const displayProjects = featuredByCategory

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
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm text-gray-600 border border-gray-200 rounded-full hover:border-gray-300 hover:text-gray-900 transition-all bg-white"
          >
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
          </Link>
        </div>
      </div>
    </section>
  )
}