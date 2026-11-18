import { Factory } from 'lucide-react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [errors,setErrors]=useState({email:'',password:''});
    const navigate = useNavigate();

    async function handelSubmit(e){
        let newError = {};
        e.preventDefault();
        if (!email.trim()) {
            newError.email = 'email est obligatoire'
        }

        if (!password.trim()) {
            newError.password = 'password est obligatoire'
        }
        setErrors(newError);
        
        if (Object.keys(newError).length > 0) {
            return
        }
        
        try {
    const response = await axios.post('http://localhost:3000/api/auth/login',
        {email,password});
        const utilisateur = response.data.utilisateur;
        const token = response.data.utilisateur.token;
        sessionStorage.setItem('token',token);
        sessionStorage.setItem('utilisateur',JSON.stringify(utilisateur));
        navigate('/dashboard');
        } catch (error) {
            console.log(error.response?.data);
        }
    }
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

        <div className="md:w-1/2 bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-white/10 p-3 rounded-xl">
                <Factory size={32} />
              </div>

              <h1 className="text-2xl font-bold">
                Factory<span className="text-blue-300">Flow</span>
              </h1>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Gérez. Suivez.
              <br />
              Optimisez.
            </h2>

            <p className="text-blue-100 leading-relaxed max-w-md">
              Votre plateforme de gestion industrielle.
              Pilotez vos ressources et suivez votre production
              en toute simplicité.
            </p>
          </div>

          <div className="hidden md:flex items-center justify-center mt-12">
            <div className="bg-white/10 rounded-2xl p-8">
              <Factory size={120} strokeWidth={1.2} className="text-blue-200" />
            </div>
          </div>

          <p className="text-sm text-blue-200 mt-8">
            © 2026 FactoryFlow — Gestion industrielle
          </p>
        </div>

        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Connexion
            </h2>

            <p className="text-slate-500">
              Connectez-vous à votre espace de gestion.
            </p>
          </div>

          <form onSubmit={handelSubmit} noValidate className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Adresse email
              </label>

              <input type="email" id="email" placeholder="exemple@factoryflow.com" required 
                value={email} onChange={(e)=>setEmail(e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              {errors.email &&(
                <span className="text-red-500 text-sm">
                    {errors.email}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Mot de passe
              </label>

              <input type="password" id="password" placeholder="••••••••" required minLength={4}
                value={password} onChange={(e)=>{setPassword(e.target.value)}}
                className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              {errors.password &&(
                <span className="text-red-500 text-sm">
                    {errors.password}
                </span>
              )}

            </div>

            <button
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Se connecter
            </button>
          </form>

          <p className="text-center text-sm text-slate-400 mt-8">
            Accès réservé au personnel autorisé.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Login