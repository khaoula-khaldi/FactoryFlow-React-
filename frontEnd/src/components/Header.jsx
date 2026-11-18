
function Header() {
  return (
    <header className="bg-white px-6 py-4 flex items-center justify-between shadow-sm">
      <div>
        <h1 className="text-xl font-bold text-gray-800">
          FactoryFlow
        </h1>
        <p className="text-sm text-gray-500">
          Gestion industrielle.
        </p>
      </div>

      <div>
        <input
          type="text"
          placeholder="Rechercher une machine..."
          className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </header>
  )
}

export default Header
