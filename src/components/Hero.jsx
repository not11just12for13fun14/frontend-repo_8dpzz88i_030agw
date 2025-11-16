export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-2xl bg-white/80 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">Saveurs authentiques de Casablanca</h2>
            <p className="mt-4 text-gray-700 text-lg">Adresse : 14 All. des Mimosas, Casablanca 20000</p>
            <p className="text-gray-700">Ouvert • Ferme à 23:00</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="tel:0522344026" className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">Réserver par téléphone</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-black transition">Voir le menu</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
