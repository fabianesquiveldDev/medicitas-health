import { useState } from 'react'
import './App.css'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import MedicalLogin from './pages/Auth/MedicalLogin';
import Landing from './pages/LandingPage/Landing';


 const App: React.FC = () => {
   return(
      
         <BrowserRouter>
            <Routes>
                {/* Rutas públicas */}
                <Route path='/'   element={<Landing/>}/>
                <Route path='/login-medico' element={<MedicalLogin />}/>
            </Routes>
         
         </BrowserRouter>
           
   );
 };
export default App
