
import FormUpdateMatiere from "../components/FormUpdateMatiere";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function UpdateMatiere() {
    const { id } = useParams();
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");

    const [matiere, setMatiere] = useState(null);

    // Récupérer la matière première
    async function getMatiere() {
        try {
            const response = await axios.get(
                `http://localhost:3000/api/matieres-premieres/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setMatiere(response.data.data);

        } catch (error) {
            console.log(error.response?.data);
        }
    }

    useEffect(() => {
        getMatiere();
    }, [id]);

    // Modifier la matière première
    async function handleUpdate(updatedMatiere) {
        try {
            const response = await axios.put(
                `http://localhost:3000/api/matieres-premieres/${id}`,
                updatedMatiere,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            console.log(response.data);

            // Retourner à la liste après modification
            navigate("/MatieresPremieres");

        } catch (error) {
            console.log(error.response?.data);
        }
    }

    if (!matiere) {
        return <p className="text-center mt-10">Chargement...</p>;
    }

    return (
        <FormUpdateMatiere
            matiere={matiere}
            onUpdate={handleUpdate}
        />
    );
}

export default UpdateMatiere;
