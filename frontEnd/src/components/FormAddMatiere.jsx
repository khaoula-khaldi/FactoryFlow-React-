import axios from "axios";
function AddMatiere(){
    async function Submit(e){
        e.preventDefault();
        const form =e.currentTarget; 
        const reference=form.elements.reference.value;
        const nom=form.elements.nom.value;
        const uniteMesure=form.elements.uniteMesure.value;
        const seuilAlerte=Number(form.elements.seuilAlerte.value);
        const token = sessionStorage.getItem("token");

        try{
            const response = await axios.post('http://localhost:3000/api/matieres-premieres',
                {reference,nom,uniteMesure,seuilAlerte},
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }       
            )
            console.log(response.data);
        }catch(error){
            console.log(error.response?.data);
        }

    }
    return(
           <form onSubmit={Submit} className="space-y-5 rounded-xl bg-white p-6 shadow-sm border border-gray-200">

            <div className="space-y-2">
                <label htmlFor="reference" className="block text-sm font-medium text-gray-700">
                    reference
                </label>
                <input id="reference" name="reference" type="text" minLength={4} placeholder="Entrez la reference"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                    nom
                </label>
                <input id="nom" name="nom" type="text" placeholder="Farine"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="uniteMesure" className="block text-sm font-medium text-gray-700">
                    uniteMesure
                </label>
                <input id="uniteMesure" name="uniteMesure" type="text" placeholder="Ex: kg, litre, unité"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="seuilAlerte" className="block text-sm font-medium text-gray-700">
                    seuil d'alerte
                </label>
                <input id="seuilAlerte" name="seuilAlerte" type="Number" placeholder="Entrez un seuil d'Alerte"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
            </div>
            <button type="submit" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
                Ajouter Matiere 
            </button>

        </form>
    );
    
}

export default AddMatiere