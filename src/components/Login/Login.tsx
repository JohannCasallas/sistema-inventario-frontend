import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layaut';


const MiComponente = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Aquí va la lógica para iniciar sesión
        // Después de autenticar al usuario con éxito, redirigirlo a la página de Layout
        navigate('/');
    };

    return (
        <div>
            <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
    );
};

export default MiComponente;
