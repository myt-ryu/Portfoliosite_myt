import { profile } from '../data/profile'

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8">
          Contact
        </h2>

        <div className="mb-12">
          <h3 className="text-gray-900 font-medium mb-4">対応可能業務</h3>
          <ul className="text-gray-600 space-y-2 inline-block text-left">
            {(profile as any).services.map((service: string) => (
              <li key={service} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          お仕事のご依頼・ご相談は
          <br />
          下記メールアドレスまでお気軽にご連絡ください。
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="inline-block text-lg sm:text-xl text-gray-900 hover:text-gray-600 transition-colors border-b border-gray-300 hover:border-gray-400 pb-1"
        >
          {profile.email.replace('@', '【at】')}
        </a>

        <div className="mt-12 flex justify-center gap-6">
          <a
            href={profile.social.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="X (Twitter)"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <a
            href={profile.social.note}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="note"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="115 117 260 260">
              <path d="m139.57,142.06c41.19,0,97.6-2.09,138.1-1.04,54.34,1.39,74.76,25.06,75.45,83.53.69,33.06,0,127.73,0,127.73h-58.79c0-82.83.35-96.5,0-122.6-.69-22.97-7.25-33.92-24.9-36.01-18.69-2.09-71.07-.35-71.07-.35v158.96h-58.79v-210.22Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
