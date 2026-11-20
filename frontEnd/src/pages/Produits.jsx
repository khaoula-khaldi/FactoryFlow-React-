
import axios from "axios";
import { useEffect, useState } from "react";

function Produits() {
    const [produits, setProduits] = useState([]);

    async function getProduit() {
        const token = sessionStorage.getItem("token");

        try {
            const response = await axios.get(
                "http://localhost:3000/api/produits",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            console.log(response.data);

            // Récupération des produits
            const data = response.data.produit;

            setProduits(Array.isArray(data) ? data : []);

        } catch (error) {
            console.log(
                error.response?.data || error.message
            );
        }
    }

    useEffect(() => {
        getProduit();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 p-6">

            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Liste des produits
            </h1>

            {produits.length === 0 ? (
                <p className="text-gray-500">
                    Aucun produit trouvé.
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {produits.map((produit) => (
                        <div
                            key={produit._id}
                            className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
                        >
                            <h2 className="text-lg font-semibold text-gray-800">
                                {produit.nom}
                            </h2>

                            <p className="text-sm text-gray-500 mt-2">
                                Référence : {produit.reference}
                            </p>

                            <p className="text-gray-600 mt-3">
                                {produit.description}
                            </p>
                        </div>
                    ))}

                </div>
            )}

        </div>
    );
}

export default Produits;
