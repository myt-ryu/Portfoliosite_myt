import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ProjectDetail } from './pages/ProjectDetail'
import { AllProjects } from './pages/AllProjects'
import { ErrorBoundary } from './components/ErrorBoundary'

function App() {
  return (
    <HashRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </ErrorBoundary>
    </HashRouter>
  )
}

export default App
