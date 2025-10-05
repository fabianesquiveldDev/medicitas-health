import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectRoleModal from '../../Auth/Modal/SelectRoleModal'
export default function Header (){
    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);
    return (
        <>
          <header>
             <div className="flex space-x-4">
                <a >
                    Registrarse
                </a>    

                <a onClick={ ()=> setOpenModal(true)}>
                    iniciar sesión
                </a>
                 {/* Modal */}
                 <SelectRoleModal open={openModal} onClose={() => setOpenModal(false)} />

             </div>
          </header>
        </>

    )
}