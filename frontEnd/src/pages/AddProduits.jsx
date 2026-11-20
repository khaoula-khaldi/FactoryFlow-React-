import AddProduit from "../components/FormAddProduit";
import axios from "axios";

function AddProduits() {
    const token = sessionStorage.getItem("token");

    async function create(produit) {
    console.log("Produit envoyé :", produit);

    try {
        const response = await axios.post(
            "http://localhost:3000/api/produits",
            produit,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        console.log("Status :", response.status);
        console.log("Response :", response.data);

    } catch (error) {
        console.log("Status :", error.response?.status);
        console.log("Erreur :", error.response?.data || error.message);
    }
}

    return (
        <>
            <AddProduit onCreate={create} />
        </>
    );
}

export default AddProduits;