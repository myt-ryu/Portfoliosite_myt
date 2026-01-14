import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

export function About() {
  const basePath = import.meta.env.BASE_URL

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-16 text-center">
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-gray-100 shadow-sm">
              <img
                src={`${basePath}images/profile.png`}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Profile Content */}
          <div className="space-y-8">
            {/* Bio */}
            <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{profile.bio}</p>

            {/* Affiliations */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">所属</h3>
              <ul className="space-y-3">
                {profile.affiliations.map((affiliation, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    <span className="font-medium text-gray-900">
                      {affiliation.org}
                    </span>
                    <br />
                    <span className="text-gray-500">{affiliation.role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">
                専門領域
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs text-gray-600 bg-gray-100 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-4">SNS</h3>
              <div className="flex items-center gap-4">
                <a
                  href={profile.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X
                </a>

                <a
                  href={profile.social.note}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                  note
                </a>

                <a
                  href={profile.social.researchmap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <span className="w-4 h-4 flex items-center justify-center text-xs font-bold font-mono">
                    RM
                  </span>
                  researchmap
                </a>
              </div>
            </div>

            {/* Biography Link */}
            <div className="pt-6 border-t border-gray-100">
              <Link
                to="/biography"
                className="group inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-gray-600 transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                <span>READ FULL BIOGRAPHY</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
