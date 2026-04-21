import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/shared'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Book from './pages/Book'
import Curly from './pages/Curly'
import './App.css'

function useParallax() {
  useEffect(() => {
    const speed = 0.05
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        document.querySelectorAll('.section, .hero, .ig-section, .expect-split, .results-split, .book-split, .pricing-dynamic, .curly-block-1, .curly-block-2, .curly-block-3').forEach(el => {
          const rect = el.getBoundingClientRect()
          const center = rect.top + rect.height / 2
          const offset = (center - window.innerHeight / 2) * speed
          el.style.setProperty('--px', `${offset}px`)
        })
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}

export default function App() {
  useParallax()
  return (
    <div className="gc-app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book" element={<Book />} />
        <Route path="/curly" element={<Curly />} />
      </Routes>
    </div>
  )
}
