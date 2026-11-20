import {Routes,Route} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MatieresPremieres from './pages/MatieresPremieres';
import Produits from './pages/Produits';
import AddUser from './pages/AddUser';
import AddMatiere from './pages/AddMatiere'
import UpdateMatiere from './pages/UpdateMatiere';

function App() {

  

  return (
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="MatieresPremieres" element={<MatieresPremieres />} />
          <Route path="Produits" element={<Produits />} />
          <Route path="addUser" element={<AddUser/>}/>
          <Route path="addMatiere" element={<AddMatiere/>}/>
          <Route path="/updateMatiere/:id" element={<UpdateMatiere />}/>
        </Route>
      </Routes>
      
  
  )
}

export default App
