import Header from './components/Header'
import Hero from './components/Hero'
import InfoGrid from './components/InfoGrid'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <InfoGrid />
        <CTA />
      </main>
      <footer className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} le maitre du sandwish — Casablanca</p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-900">Instagram</a>
            <a href="tel:0522344026" className="hover:text-gray-900">05223-44026</a>
            <a href="https://maps.google.com/?q=14+All.+des+Mimosas,+Casablanca+20000" target="_blank" rel="noreferrer" className="hover:text-gray-900">Itinéraire</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
