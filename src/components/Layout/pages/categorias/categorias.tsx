import React, { useState } from 'react';

import CategoriasService from '../../../../Services/CategoriasService';
import { ICategoria, estadoInicialCategoria } from '../../../interfaces/ICategoria';
import { IRespuesta } from '../../../interfaces/IRespuesta';
import CategoriasVista from './categoriasVista';
import CategoriasModal from './categoriasModal';



const Categorias: React.FC = () => {
    const [loading, setLoading] = React.useState(false);
    const [categorias, setCategorias] = React.useState<IRespuesta<ICategoria[]>>();
    const [categoria, setCategoria] = React.useState<ICategoria>(estadoInicialCategoria);
    const [estadoModal, setEstadoModal] = React.useState<boolean>(false);

    const [abrir, setAbrir] = useState(false);

    React.useEffect(() => {
        async function fetchCategorias() {
            setLoading(true)
            const categoriasData = await CategoriasService.listarCategorias();
            setLoading(false)
            setCategorias(categoriasData);
        }
        fetchCategorias()
    }, []);


    const alCambiarValor: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        const { name, value } = e.target;
        setCategoria(prevCategoria => ({
            ...prevCategoria,
            [name]: value
        }));
    };

    const manejarModal = (accion: 'creacion' | 'edicion') => {
        setAbrir(true);
        if (accion === 'creacion') {
            setEstadoModal(true);
        } else {
            setEstadoModal(false);
        }
    };

    const cerrarModal = () => {
        setAbrir(false);
        setCategoria(estadoInicialCategoria);
    };

    const manejarClicEdicion = (categoria: ICategoria) => {
        setCategoria(categoria);
        manejarModal('edicion');
      };

    return (
        <>
            <CategoriasVista
                categorias={categorias}
                manejarModal={manejarModal}
                manejarClicEdicion={manejarClicEdicion}
            />
            <CategoriasModal
                alCambiarValor={alCambiarValor}
                abrir={abrir}
                categoria={categoria}
                cerrarModal={cerrarModal}
                estadoModal={estadoModal}
            />
        </>
    );
};

export default Categorias;
