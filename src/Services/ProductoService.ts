import axios from 'axios';
import { apiInventario } from '../config'
import { IProducto } from '../components/interfaces/IProducto';
import { IRespuesta } from '../components/interfaces/IRespuesta';

const urlProducto = `${apiInventario}/Producto`;

const ProductoService = {
    async crearProducto(producto: IProducto): Promise<IRespuesta<IProducto>> {
        try {
            const response = await axios.post<IRespuesta<IProducto>>(`${urlProducto}/CrearProducto`, producto);
            return response.data;
        } catch (error) {
            console.error('Error al crear el producto:', error);
            throw error;
        }
    },

    async actualizarProducto(id: number, producto: IProducto): Promise<IRespuesta<IProducto>> {
        try {
            const response = await axios.put<IRespuesta<IProducto>>(`${urlProducto}/ActualizarProducto/${id}`, producto);
            return response.data;
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
            throw error;
        }
    },

    async eliminarProducto(id: number): Promise<IRespuesta<boolean>> {
        try {
            const response = await axios.delete<IRespuesta<boolean>>(`${urlProducto}/EliminarProducto/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
            throw error;
        }
    },

    async obtenerProductoPorId(id: number): Promise<IRespuesta<IProducto>> {
        try {
            const response = await axios.get<IRespuesta<IProducto>>(`${urlProducto}/ObtenerProductoPorId/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error al obtener el producto por su ID:', error);
            throw error;
        }
    },

    async listarProductos(): Promise<IRespuesta<IProducto[]>> {
        try {
            const response = await axios.get<IRespuesta<IProducto[]>>(`${urlProducto}/ListarProductos`);
            return response.data;
        } catch (error) {
            console.error('Error al listar los productos:', error);
            throw error;
        }
    },
};

export default ProductoService;
