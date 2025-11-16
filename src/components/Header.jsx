import { Menu, Phone } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-rose-500" />
          <div>
            <h1 className="text-xl font-bold tracking-tight">Les Mimosas</h1>
            <p className="text-xs text-gray-500">Cuisine marocaine • Casablanca</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <a href="tel:0522344026" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition">
            <Phone className="h-4 w-4" /> 05223-44026
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-black transition">
            <Menu className="h-4 w-4" /> Menu
          </a>
        </div>
      </div>
    </header>
  )
}
