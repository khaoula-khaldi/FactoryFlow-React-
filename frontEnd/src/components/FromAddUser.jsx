import axios from "axios";
function FromAddUser() {

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;
        const nom = form.elements.name.value;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        const role = form.elements.role.value;

        const token = sessionStorage.getItem("token");

        try {
            const response = await axios.post(
                "http://localhost:3000/api/auth/creeUser",
                { nom, email, password, role },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            console.log(response.data);

        } catch (error) {
            console.log(error.response?.data);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5 rounded-xl bg-white p-6 shadow-sm border border-gray-200">

            <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nom complet
                </label>
                <input id="name" type="text" minLength={4} placeholder="Entrez le nom complet"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input id="email" type="email" placeholder="exemple@email.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Mot de passe
                </label>
                <input id="password" type="password" minLength={4} placeholder="Entrez un mot de passe"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                    Rôle
                </label>
                <select name="role" id="role" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                    <option value="ADMIN">Admin</option>
                    <option value="OPERATEUR">Opérateur</option>
                </select>
            </div>

            <div className="flex justify-end gap-3 pt-3">
                <button type="button"
                    className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
                    Annuler
                </button>

                <button type="submit"
                    className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
                    Ajouter l'utilisateur
                </button>
            </div>

        </form>
    );
}

export default FromAddUser;