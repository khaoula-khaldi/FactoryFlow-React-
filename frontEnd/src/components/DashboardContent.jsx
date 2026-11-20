import { useNavigate } from 'react-router-dom';

function Dashboard({countMatieres, countOrders}) {

    const Navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10">

            <h2 className="text-2xl font-bold text-gray-800">
                Dashboard
            </h2>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <p className="text-gray-500 mt-2 mb-8">
                    Bienvenue, Admin FactoryFlow
                </p>
                <button onClick={()=>{Navigate('/addUser')}} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition mb-8">
                    + Ajouter un utilisateur
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-sm text-gray-500">
                        Total matières premières
                    </p>

                    <h3 className="text-3xl font-bold text-gray-800 mt-3">
                        {countMatieres}
                    </h3>

                    <p className="text-sm text-gray-400 mt-2">
                        Stock total
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-sm text-gray-500">
                        Ordres de fabrication actifs
                    </p>

                    <h3 className="text-3xl font-bold text-gray-800 mt-3">
                        {countOrders}
                    </h3>

                    <p className="text-sm text-gray-400 mt-2">
                        En cours de fabrication
                    </p>
                </div>

            </div>



            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">

                <h3 className="text-lg font-semibold text-gray-800 mb-5">
                    Alertes de stock
                </h3>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-md">
                    <p className="font-medium text-gray-800">
                        Nom de matière
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                        Total de stock de la matière
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;