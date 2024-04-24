import axios from 'axios';
import { apiInventario } from '../../config'
import { ICliente } from '../components/interfaces/ICliente';
import { IRespuesta } from '../components/interfaces/IRespuesta';

const urlCliente = `${apiInventario}/Cliente`;

const ClienteService = {
  async crearCliente(cliente: ICliente): Promise<IRespuesta<ICliente>> {
    try {
      const response = await axios.post<IRespuesta<ICliente>>(`${urlCliente}/CrearCliente`, cliente);
      return response.data;
    } catch (error) {
      console.error('Error al crear el cliente:', error);
      throw error;
    }
  },

  async actualizarCliente(id: number, cliente: ICliente): Promise<IRespuesta<ICliente>> {
    try {
      const response = await axios.put<IRespuesta<ICliente>>(`${urlCliente}/ActualizarCliente/${id}`, cliente);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar el cliente:', error);
      throw error;
    }
  },

  async eliminarCliente(id: number): Promise<IRespuesta<boolean>> {
    try {
      const response = await axios.delete<IRespuesta<boolean>>(`${urlCliente}/EliminarCliente/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar el cliente:', error);
      throw error;
    }
  },

  async obtenerClientePorId(id: number): Promise<IRespuesta<ICliente>> {
    try {
      const response = await axios.get<IRespuesta<ICliente>>(`${urlCliente}/ObtenerClientePorId/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener el cliente por su ID:', error);
      throw error;
    }
  },

  async listarClientes(): Promise<IRespuesta<ICliente[]>> {
    try {
      const response = await axios.get<IRespuesta<ICliente[]>>(`${urlCliente}/ListarClientes`);
      return response.data;
    } catch (error) {
      console.error('Error al listar los clientes:', error);
      throw error;
    }
  },
};

export default ClienteService;
