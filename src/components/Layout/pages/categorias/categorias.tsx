import React, { useState } from 'react';

import CategoriasService from '../../../../Services/CategoriasService';
import { ICategoria, estadoInicialCategoria } from '../../../interfaces/ICategoria';
import { IRespuesta } from '../../../interfaces/IRespuesta';
import CategoriasVista from './categoriasVista';
import CategoriasModal from './categoriasModal';
import Swal from 'sweetalert2';



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

    const consultarCategorias = async () => {
        setLoading(true);
        const categoriasData = await CategoriasService.listarCategorias();
        setLoading(false);
        setCategorias(categoriasData);
    };

    const editarCrearCategoria = async () => {
        setLoading(true);
        let response;
        if (estadoModal) {
            response = await CategoriasService.crearCategoria(categoria);
        } else {
            response = await CategoriasService.actualizarCategoria(categoria.categoriaId, categoria);
        }
        setLoading(false);
        if (response.exitoso) {
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: response.mensaje!,
                timer: 3000,
                showConfirmButton: false,
            });
            setAbrir(false);
            setCategoria(estadoInicialCategoria)
            consultarCategorias()
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Información',
                text: response.mensaje!,
                timer: 3000,
                showConfirmButton: false,
            });
        }
    };


    const eliminarCategoria = async (categoria: ICategoria) => {
        const confirmacion = await Swal.fire({
            icon: 'warning',
            title: '¿Estás seguro?',
            text: 'Esta acción eliminará la categoria permanentemente.',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#dc3545',
            cancelButtonColor: '#6c757d'
        });

        if (confirmacion.isConfirmed) {
            setLoading(true);
            let response = await CategoriasService.eliminarCategoria(categoria.categoriaId);
            setLoading(false);
            if (response.exitoso) {
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: response.mensaje!,
                    timer: 3000,
                    showConfirmButton: false,
                });
                consultarCategorias();
            } else {
                Swal.fire({
                    icon: 'info',
                    title: 'Información',
                    text: response.mensaje!,
                    timer: 3000,
                    showConfirmButton: false,
                });
            }
        }
    };

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
                eliminarCategoria={eliminarCategoria}
            />
            <CategoriasModal
                alCambiarValor={alCambiarValor}
                abrir={abrir}
                categoria={categoria}
                cerrarModal={cerrarModal}
                estadoModal={estadoModal}
                editarCrearCategoria={editarCrearCategoria}
                setAbrir={setAbrir}
            />
        </>
    );
};

export default Categorias;
