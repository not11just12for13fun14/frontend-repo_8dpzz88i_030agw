import { MapPin, Clock, Navigation, Phone } from 'lucide-react'

export default function InfoGrid() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-5 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-rose-500" />
            <h3 className="font-semibold">Adresse</h3>
          </div>
          <p className="mt-2 text-gray-600">14 All. des Mimosas, Casablanca 20000</p>
        </div>
        <div className="p-5 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-rose-500" />
            <h3 className="font-semibold">Horaires</h3>
          </div>
          <p className="mt-2 text-gray-600">Ouvert • Ferme à 23:00</p>
        </div>
        <div className="p-5 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3">
            <Navigation className="h-5 w-5 text-rose-500" />
            <h3 className="font-semibold">Y aller</h3>
          </div>
          <p className="mt-2 text-gray-600">1 h 8 min • 27 min</p>
        </div>
        <div className="p-5 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-rose-500" />
            <h3 className="font-semibold">Téléphone</h3>
          </div>
          <p className="mt-2 text-gray-600">05223-44026</p>
        </div>
      </div>
    </section>
  )
}
