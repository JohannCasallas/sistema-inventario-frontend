import React, { useState } from 'react';

import UsuarioService from '../../../../Services/UsuarioService';
import { IUsuario, initialUsuario } from '../../../interfaces/IUsuario';
import { IRespuesta } from '../../../interfaces/IRespuesta';
import Swal from 'sweetalert2';
import UsuariosVista from './usuariosVista';
import UsuariosModal from './usuariosModal';




const Usuario: React.FC = () => {
    const [loading, setLoading] = React.useState(false);
    const [usuarios, setUsuarios] = React.useState<IRespuesta<IUsuario[]>>();
    const [usuario, setUsuario] = React.useState<IUsuario>(initialUsuario);
    const [estadoModal, setEstadoModal] = React.useState<boolean>(false);
    const [abrir, setAbrir] = useState(false);

    React.useEffect(() => {
        async function fetchUsuarios() {
            setLoading(true)
            const usuariosData = await UsuarioService.listarUsuarios();
            setLoading(false)
            setUsuarios(usuariosData);
        }
        fetchUsuarios()
    }, []);

    const consultarUsuarios = async () => {
        setLoading(true);
        const usuariosData = await UsuarioService.listarUsuarios();
        setLoading(false);
        setUsuarios(usuariosData);
    };

    const editarCrearUsuario = async () => {
        setLoading(true);
        let response;
        if (estadoModal) {
            response = await UsuarioService.registrarUsuario(usuario);
        } else {
            response = await UsuarioService.actualizarUsuario(usuario.usuarioId, usuario);
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
            setUsuario(initialUsuario)
            consultarUsuarios()
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

    const eliminarUsuario = async (usuario: IUsuario) => {
        const confirmacion = await Swal.fire({
            icon: 'warning',
            title: '¿Estás seguro?',
            text: 'Esta acción eliminará al usuario permanentemente.',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#dc3545',
            cancelButtonColor: '#6c757d'
        });

        if (confirmacion.isConfirmed) {
            setLoading(true);
            let response = await UsuarioService.eliminarUsuario(usuario.usuarioId);
            setLoading(false);
            if (response.exitoso) {
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: response.mensaje!,
                    timer: 3000,
                    showConfirmButton: false,
                });
                consultarUsuarios();
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


    const alCambiarValor: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }> = (e: any) => {
        const { name, value, type, checked } = e.target;
    
        switch (type) {
            case 'checkbox':
                setUsuario(prevUsuario => ({
                    ...prevUsuario,
                    [name!]: checked
                }));
                break;
            case 'text':
            case 'select-one':
                setUsuario(prevUsuario => ({
                    ...prevUsuario,
                    [name!]: value as string
                }));
                break;
            // Agregar otros casos según sea necesario
            default:
                break;
        }
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
        setUsuario(initialUsuario);
    };

    const manejarClicEdicion = (usuario: IUsuario) => {
        setUsuario(usuario);
        manejarModal('edicion');
    };

    return (
        <>
            <UsuariosVista
                usuarios={usuarios}
                manejarModal={manejarModal}
                manejarClicEdicion={manejarClicEdicion}
                eliminarUsuario={eliminarUsuario}
            />
            <UsuariosModal
                alCambiarValor={alCambiarValor}
                abrir={abrir}
                usuario={usuario}
                cerrarModal={cerrarModal}
                estadoModal={estadoModal}
                editarCrearUsuario={editarCrearUsuario}
            />
        </>
    );
};

export default Usuario;
