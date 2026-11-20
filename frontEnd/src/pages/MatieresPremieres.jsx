import {useState,useEffect } from "react"; 
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function MatieresPremieres() {
    const [matierPremier, setMatierPremier] = useState([]);
    const token = sessionStorage.getItem("token");
    const Navigate = useNavigate()
 
    useEffect(() => {
            async function getMatieres() {
                try {
                    const response = await axios.get(
                        "http://localhost:3000/api/matieres-premieres",
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
    
                    const data = response.data.data;
                    if (Array.isArray(data)) {
                        setMatierPremier(data);      
                    }
    
                } catch (error) {
                    console.log(error.response?.data);
                }
            }
    
            getMatieres();
    }, []);

    return (
        <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <h2 className="text-xl font-semibold mb-4">
                    Liste des matières premières
                </h2>
                <button onClick={()=>{Navigate('/addMatiere')}} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition mb-8">+Ajouter Matière</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {matierPremier.map((matiere) => (
                                        
                    <div
                        key={matiere._id}
                        className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-200"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {matiere.nom}
                                </h3>
                                <p className="text-sm text-gray-400 mt-1">
                                    {matiere.reference}
                                </p>
                            </div>

                            <span className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1.5 rounded-full">
                                Matière première
                            </span>
                        </div>

                        <div className="space-y-3 border-t border-gray-100 pt-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">Unité de mesure</span>
                                <span className="text-sm font-medium text-gray-800">
                                    {matiere.uniteMesure}
                                </span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">Seuil d'alerte</span>
                                <span className="text-sm font-semibold text-orange-600">
                                    {matiere.seuilAlerte} {matiere.uniteMesure}
                                </span>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 mt-4 pt-4">
                            <button onClick={()=>{Navigate(`/UpdateMatiere/${matiere._id}`)}}
                                type="button"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition duration-200"
                            >
                                Modifier
                            </button>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default MatieresPremieres;
