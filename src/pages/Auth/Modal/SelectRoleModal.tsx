import React from "react";
import { X } from "lucide-react"
import { useNavigate } from "react-router-dom";

interface Props {
    open:boolean;
    onClose: () => void;
}

const SelectRoleModal: React.FC<Props> = ({open, onClose}) => {
    const navigate = useNavigate();

    if (!open) return null; // no va a devolver nada si no recibe nada

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
                {/* Botón cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                >
                    <X className="w-5 h-5" />
                </button>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Seleccione Su Acceso
                </h2>

                <div className="space-y-4">
                    {/* Botón medico */}
                    <button
                        onClick={() => navigate("/login-medico")}
                        className="w-full py-3 px-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
                    >
                        Médico o Doctor 
                    </button>
                    {/* Botón Paciente */}

                    <button
                        onClick={() => navigate("/login-paciente")}
                        className="w-full py-3 px-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"

                    >
                      Paciente   
                    </button>
                </div>
            </div>
        </div>
    )

}

export default SelectRoleModal;
