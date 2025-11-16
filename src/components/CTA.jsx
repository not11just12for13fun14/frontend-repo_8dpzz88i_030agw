export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Prêt à découvrir nos spécialités ?</h3>
        <p className="mt-3 text-gray-700">Appelez-nous pour réserver votre table ou commandez à emporter.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:0522344026" className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">Appeler maintenant</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-black transition">Consulter le menu</a>
        </div>
      </div>
    </section>
  )
}
