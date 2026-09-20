import { useEffect, useState } from 'react'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import CommandPalette from './components/CommandPalette'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Leadership from './sections/Leadership'
import Contact from './sections/Contact'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [paletteOpen, setPaletteOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((o) => !o)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="min-h-screen bg-white text-ink-900 antialiased dark:bg-[#050505] dark:text-neutral-100">
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenCommand={() => setPaletteOpen(true)}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Leadership />
        <Contact />
      </main>
      <Footer />

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onToggleTheme={toggleTheme}
      />
    </div>
  )
}