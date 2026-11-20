
function FormUpdateMatiere({ matiere, onUpdate }) {

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;

        const updatedMatiere = {
            reference: form.elements.reference.value,
            nom: form.elements.nom.value,
            uniteMesure: form.elements.uniteMesure.value,
            seuilAlerte: Number(form.elements.seuilAlerte.value)
        };

        onUpdate(updatedMatiere);
    }

    if (!matiere) {
        return <p>Chargement...</p>;
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

                <div className="border-b border-gray-100 px-6 py-5">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Modifier une matière première
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Modifiez les informations de cette matière première.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">

                    <div className="space-y-2">
                        <label htmlFor="reference" className="block text-sm font-medium text-gray-700">
                            Référence
                        </label>
                        <input
                            id="reference"
                            name="reference"
                            type="text"
                            defaultValue={matiere.reference}
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                            Nom
                        </label>
                        <input
                            id="nom"
                            name="nom"
                            type="text"
                            defaultValue={matiere.nom}
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="uniteMesure" className="block text-sm font-medium text-gray-700">
                            Unité de mesure
                        </label>
                        <input
                            id="uniteMesure"
                            name="uniteMesure"
                            type="text"
                            defaultValue={matiere.uniteMesure}
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="seuilAlerte" className="block text-sm font-medium text-gray-700">
                            Seuil d'alerte
                        </label>
                        <input
                            id="seuilAlerte"
                            name="seuilAlerte"
                            type="number"
                            min="0"
                            defaultValue={matiere.seuilAlerte}
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="flex justify-end gap-3 border-t border-gray-100 pt-5">
                        <button
                            type="button"
                            className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
                        >
                            Annuler
                        </button>

                        <button
                            type="submit"
                            className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm font-medium"
                        >
                            Enregistrer les modifications
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default FormUpdateMatiere;
