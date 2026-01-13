import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ProjectCard } from '../components/ProjectCard'
import { projects, categoryLabels, type Category } from '../data/projects'
import { useEffect } from 'react'

const categories: Category[] = [
  'event',
  'writing',
  'media',
  'production',
  'exhibition',
  'speaking',
  'pr',
  'research',
  'other',
]

export function AllProjects() {
  useEffect(() => {
    window.scrollTo(0, 0)
    console.log('AllProjects mounted. Total projects:', projects.length)
  }, [])

  const hasProjects = Array.isArray(projects) && projects.length > 0

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-24 sm:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              All Projects
            </h1>
            <p className="text-gray-600">これまでの活動・プロジェクト一覧</p>
          </div>

          {!hasProjects ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found.</p>
              <p className="text-xs text-gray-400 mt-2">Check console for details.</p>
            </div>
          ) : (
            <div className="space-y-20">
              {categories.map((category) => {
                const categoryProjects = projects.filter(
                  (p) => p.category === category
                )

                if (categoryProjects.length === 0) return null

                return (
                  <section key={category} id={`category-${category}`}>
                    <h2 className="text-xl font-medium text-gray-900 mb-8 border-b border-gray-200 pb-2">
                      {categoryLabels[category]}
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {categoryProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  </section>
                )
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
