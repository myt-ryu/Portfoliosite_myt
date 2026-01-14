import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function Biography() {
    const basePath = import.meta.env.BASE_URL

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="pt-24 pb-24">
                {/* Header Section - Clean & Respectful of the photo */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 pt-12">
                    <div className="flex flex-col items-center text-center space-y-12">
                        <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src={`${basePath}images/profile.png`}
                                alt={profile.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="max-w-3xl space-y-4">
                            <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-tight">
                                {profile.name}
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-500 font-light tracking-tight">
                                {profile.tagline}
                            </p>
                        </div>
                    </div>
                </section>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Narrative Bio */}
                    <section className="mb-24">
                        <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-8 border-l-2 border-gray-900 pl-4">
                            The Story
                        </h2>
                        <div className="text-xl md:text-2xl text-gray-900 leading-relaxed font-light space-y-8 whitespace-pre-wrap">
                            {profile.bio}
                        </div>
                    </section>

                    {/* Chronology / Tour Dates Style */}
                    <section className="mb-24">
                        <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-12 border-l-2 border-gray-900 pl-4">
                            History / Milestones
                        </h2>
                        <div className="space-y-0 border-t border-gray-100">
                            {profile.history.map((item, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col md:flex-row md:items-baseline py-8 border-b border-gray-100 hover:bg-gray-50 transition-colors px-4 -mx-4"
                                >
                                    <div className="w-48 text-sm font-mono text-gray-400 mb-2 md:mb-0 shrink-0">
                                        {item.period}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:translate-x-2 transition-transform duration-300">
                                            {item.event}
                                        </h3>
                                        {item.details && <p className="text-gray-500 mt-2 text-sm leading-relaxed">{item.details}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="text-center py-24 border-t border-gray-100">
                        <Link
                            to="/#contact"
                            className="inline-block px-12 py-4 bg-gray-900 text-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
                        >
                            Contact Me
                        </Link>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    )
}
