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


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const alCambiarValor: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        const { name, value } = e.target;
        setCategoria(prevCategoria => ({
          ...prevCategoria,
          [name]: value
        }));
      };
      
      

    const manejarModal = () => {
        setAbrir(!abrir);
    }

    return (
        <>
            <CategoriasVista
                categorias={categorias}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                page={page}
                rowsPerPage={rowsPerPage}
                manejarModal={manejarModal}
            />
            <CategoriasModal
                alCambiarValor={alCambiarValor}
                abrir={abrir}
                manejarModal={manejarModal}
                categoria={categoria}
            />
        </>
    );
};

export default Categorias;
