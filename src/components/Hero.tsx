import { profile } from '../data/profile'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm tracking-widest text-gray-500 mb-4">
          {profile.title}
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-4">
          {profile.name}
        </h1>
        <p className="text-sm text-gray-400 mb-8">{profile.nameReading}</p>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          {profile.tagline}
        </p>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Scroll to About"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
