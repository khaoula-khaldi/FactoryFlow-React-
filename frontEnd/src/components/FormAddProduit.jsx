
function AddProduit({onCreate }) {

    async function handleForm(e) {
        e.preventDefault();

        const form = e.target;

        const produit = {
            reference: form.elements.reference.value,
            nom: form.elements.nom.value,
            description: form.elements.description.value
        };

        await onCreate(produit);
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10">

            <div className="max-w-2xl mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Ajouter un produit
                    </h1>

                    <p className="text-sm text-gray-500 mt-2">
                        Remplissez les informations pour créer un nouveau produit.
                    </p>
                </div>

                {/* Formulaire */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm">

                    <div className="px-6 py-5 border-b border-gray-100">
                        <h2 className="text-lg font-semibold text-gray-800">
                            Informations du produit
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            Informations générales
                        </p>
                    </div>

                    <form onSubmit={handleForm} className="p-6 space-y-6">

                        {/* Référence */}
                        <div className="space-y-2">
                            <label htmlFor="reference" className="block text-sm font-medium text-gray-700"> Référence
                            </label>

                            <input id="reference" name="reference" type="text" placeholder="Ex: PROD-001" required className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"/>
                        </div>

                        {/* Nom */}
                        <div className="space-y-2">
                            <label htmlFor="nom" className="block text-sm font-medium text-gray-700"> Nom du produit
                            </label>

                            <input id="nom" name="nom" type="text" placeholder="Ex: Table en bois" required className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700"> Description
                            </label>

                            <textarea id="description" name="description" rows="4" placeholder="Décrivez le produit..." className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"/>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end gap-3 border-t border-gray-100 pt-5">

                            <button type="reset" className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50"> Réinitialiser
                            </button>

                            <button type="submit" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"> Ajouter le produit
                            </button>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProduit;
