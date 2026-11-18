import {Routes,Route} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MatieresPremieres from './pages/MatieresPremieres';
import Produits from './pages/Produits';
function App() {

  

  return (
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="MatieresPremieres" element={<MatieresPremieres />} />
          <Route path="Produits" element={<Produits />} />

        </Route>
      </Routes>
      
  
  )
}

export default App
