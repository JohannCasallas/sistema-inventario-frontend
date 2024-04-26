import axios from 'axios';
import { apiInventario } from '../config';
import { IProveedor } from '../components/interfaces/IProveedor';
import { IRespuesta } from '../components/interfaces/IRespuesta';


const urlProveedor = `${apiInventario}/Proveedor`;

const ProveedorService = {
    async crearProveedor(proveedor: IProveedor): Promise<IRespuesta<IProveedor>> {
        try {
            const response = await axios.post<IRespuesta<IProveedor>>(`${urlProveedor}/CrearProveedor`, proveedor);
            return response.data;
        } catch (error) {
            console.error('Error al crear el proveedor:', error);
            throw error;
        }
    },

    async actualizarProveedor(id: number, proveedor: IProveedor): Promise<IRespuesta<IProveedor>> {
        try {
            const response = await axios.put<IRespuesta<IProveedor>>(`${urlProveedor}/ActualizarProveedor/${id}`, proveedor);
            return response.data;
        } catch (error) {
            console.error('Error al actualizar el proveedor:', error);
            throw error;
        }
    },

    async eliminarProveedor(id: number): Promise<IRespuesta<boolean>> {
        try {
            const response = await axios.delete<IRespuesta<boolean>>(`${urlProveedor}/EliminarProveedor/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error al eliminar el proveedor:', error);
            throw error;
        }
    },

    async obtenerProveedorPorId(id: number): Promise<IRespuesta<IProveedor>> {
        try {
            const response = await axios.get<IRespuesta<IProveedor>>(`${urlProveedor}/ObtenerProveedorPorId/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error al obtener el proveedor por su ID:', error);
            throw error;
        }
    },

    async listarProveedores(): Promise<IRespuesta<IProveedor[]>> {
        try {
            const response = await axios.get<IRespuesta<IProveedor[]>>(`${urlProveedor}/ListarProveedores`);
            return response.data;
        } catch (error) {
            console.error('Error al listar los proveedores:', error);
            throw error;
        }
    },
};

export default ProveedorService;
