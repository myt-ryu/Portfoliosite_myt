import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { News } from '../components/News'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <News />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
