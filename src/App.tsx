import { Background } from './components/Background'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Header } from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Background />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  )
}

export default App