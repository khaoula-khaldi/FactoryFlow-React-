import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <aside side className="w-64 min-h-screen bg-slate-900 p-5">
      <h2 className="text-xl font-bold text-white mb-8">
        FactoryFlow
      </h2>

      <nav>
        <ul className="space-y-2">
          <li>
            <NavLink  to="/dashboard" className="block px-4 py-3 rounded-lg text-white bg-blue-600">
              Dashboard
            </NavLink >
          </li>

          <li>
            <NavLink  to="/MatieresPremieres" className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
              Matières premières
            </NavLink >
          </li>

          <li>
            <NavLink  to="/Produits" className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
              Produits
            </NavLink >
          </li>
          <li>
            <NavLink  to="/addUser" className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
              Ajouter un utilisateur 
            </NavLink >
          </li>
          <li>
            <NavLink  to="/addMatiere" className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
              Ajouter un Matière 
            </NavLink >
          </li>
          <li>
            <NavLink  to="/AddProduit" className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white transition-colors">
              Ajouter un produit 
            </NavLink >
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
