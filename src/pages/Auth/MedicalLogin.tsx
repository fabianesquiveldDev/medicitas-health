import { User, Lock, Eye, EyeOff, Stethoscope, AlertCircle, MapPin } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MedicalLogin () {

    const[showPassword, setShowPassword]= useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4">
            {/* Construimso el componente para crear el login */}
            <div className='w-full max-w-md'>
                {/* Construimso el componente para crear el login */}
                <div className='text-center mb-8'>
                    <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadown-lg'>
                        <Stethoscope className='w-8 h-8 text-white' />
                    </div>
                    <h1 className='text-3xl font-bold text-gray-900 mb-2'> Portal Médico</h1>
                    <p className='text-gray-600'>Sistema de Gestion de Medicitas</p>
                    <br />
                    {/*Formulario de login */}
                    <div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100'>
                        <form className='space-y-6'>
                            {/*campo de usuario */}
                            <div className='space-y-2 text-left'>
                                <label htmlFor="nombre_usuarios" className="block text-sm font-semibold text-gray-900">
                                    Usuario
                                </label>
                                <div className='relative'>  {/* funciona como referencia pára los contenedores hijos */}   
                                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                        <User className='h-5 w-5 text-gray-400'/>
                                    </div>
                                    <input 
                                       id='nombre_usuario'
                                       name='nombre_usuario'
                                       type='text'
                                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                                       placeholder='Ingresa tu usuario Médico'
                                       required
                                       disabled={loading}
                                    />
                                </div>
                            </div>

                             {/* Campo Contraseña */}
                             <div className='space-y-2 text-left'>
                                <label htmlFor="contrasena" className='block text-sm font-semibold text-gray-700'>
                                    Contraseña
                                </label>
                                <div className='relative'>
                                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                        <Lock className='h-5 w-5 text-gray-400'/>
                                    </div>
                                    <input
                                        id='contrasena'
                                        name='contrasena'
                                        type='text'
                                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200"
                                        placeholder='Ingrese su contraseña'
                                        required
                                        disabled={loading}
                                     />
                                     <button 
                                        type='button'
                                        disabled={loading}
                                        onClick={()=>setShowPassword (!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-50 rounded-r-xl transition-colors"
                                     >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        ):[
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        ]}
                                     </button>
                                </div>
                             </div>

                             {/* Botón de login */}
                                      <button
                                        type='submit'
                                        disabled={loading}
                                        className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-200 ${
                                            loading
                                                ? 'bg-gray-400 cursor-not-alloweb'
                                                : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-lg hover:shadow-xl'
                                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                                      >
                                        {loading ? (
                                            <div className='flex items-center justufy-center space-x-2'>
                                                <div className='w-5 h-5 border-2 boder-white border-t-transparent rounded-full animate-spin'></div>
                                                <span>Iniciando sesión...</span>
                                            </div>
                                        ):(
                                            'Iniciar Sesión'
                                        )} 
                                      </button>
                         </form>
                            {/* Enlaces adicionales */}
                                      <div className='mt-6 text-center space-y-3'>
                                         <button 
                                            type='button'
                                            className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                                            >
                                            ¿Olvidaste tu contraseña?
                                         </button>
                                         <div className="text-xs text-gray-500 pt-4 border-t border-gray-100">
                                            Sistema seguro para profesionales médicos
                                        </div>
                                      </div>

                                       {/* Footer */}
                                       <div className="text-center mt-8 text-sm text-gray-500">
                                            <p>© 2025 MediCitas - Todos los derechos reservados</p>
                                            <p className="mt-1">Acceso exclusivo para personal médico autorizado</p>
                                       </div>
                    </div>
                </div>
            </div>

        </div>

    )
    
}