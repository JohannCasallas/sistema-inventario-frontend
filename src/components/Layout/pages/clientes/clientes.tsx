import React, { useState } from 'react';

import ClientesService from '../../../../Services/ClientesService';
import { ICliente, estadoInicialCliente } from '../../../interfaces/ICliente';
import { IRespuesta } from '../../../interfaces/IRespuesta';
import Swal from 'sweetalert2';
import ClientesVista from './clientesVista';
import ClientesModal from './clientesModal';



const Clientes: React.FC = () => {
    const [loading, setLoading] = React.useState(false);
    const [clientes, setClientes] = React.useState<IRespuesta<ICliente[]>>();
    const [cliente, setCliente] = React.useState<ICliente>(estadoInicialCliente);
    const [estadoModal, setEstadoModal] = React.useState<boolean>(false);
    const [abrir, setAbrir] = useState(false);

    React.useEffect(() => {
        async function fetchClientes() {
            setLoading(true)
            const clientesData = await ClientesService.listarClientes();
            setLoading(false)
            setClientes(clientesData);
        }
        fetchClientes()
    }, []);

    const consultarClientes = async () => {
        setLoading(true);
        const categoriasData = await ClientesService.listarClientes();
        setLoading(false);
        setClientes(categoriasData);
    };

    const editarCrearCliente = async () => {
        setLoading(true);
        let response;
        if (estadoModal) {
            response = await ClientesService.crearCliente(cliente);
        } else {
            response = await ClientesService.actualizarCliente(cliente.clienteId, cliente);
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
            setCliente(estadoInicialCliente)
            consultarClientes()
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

    const eliminarCliente = async (cliente: ICliente) => {
        const confirmacion = await Swal.fire({
            icon: 'warning',
            title: '¿Estás seguro?',
            text: 'Esta acción eliminará al cliente permanentemente.',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#dc3545',
            cancelButtonColor: '#6c757d'
        });

        if (confirmacion.isConfirmed) {
            setLoading(true);
            let response = await ClientesService.eliminarCliente(cliente.clienteId);
            setLoading(false);
            if (response.exitoso) {
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: response.mensaje!,
                    timer: 3000,
                    showConfirmButton: false,
                });
                consultarClientes();
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
        setCliente(prevCliente => ({
            ...prevCliente,
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
        setCliente(estadoInicialCliente);
    };

    const manejarClicEdicion = (cliente: ICliente) => {
        setCliente(cliente);
        manejarModal('edicion');
    };

    return (
        <>
            <ClientesVista
                clientes={clientes}
                manejarModal={manejarModal}
                manejarClicEdicion={manejarClicEdicion}
                eliminarCliente={eliminarCliente}
            />
            <ClientesModal
                alCambiarValor={alCambiarValor}
                abrir={abrir}
                cliente={cliente}
                cerrarModal={cerrarModal}
                estadoModal={estadoModal}
                editarCrearCliente={editarCrearCliente}
            />
        </>
    );
};

export default Clientes;
