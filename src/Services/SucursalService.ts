import axios from 'axios';
import { apiInventario } from '../../config';
import { ISucursal } from '../components/interfaces/ISucursal';
import { IRespuesta } from '../components/interfaces/IRespuesta';


const urlSucursal = `${apiInventario}/Sucursal`;

const SucursalService = {
  async crearSucursal(sucursal: ISucursal): Promise<IRespuesta<ISucursal>> {
    try {
      const response = await axios.post<IRespuesta<ISucursal>>(`${urlSucursal}/CrearSucursal`, sucursal);
      return response.data;
    } catch (error) {
      console.error('Error al crear la sucursal:', error);
      throw error;
    }
  },

  async actualizarSucursal(id: number, sucursal: ISucursal): Promise<IRespuesta<ISucursal>> {
    try {
      const response = await axios.put<IRespuesta<ISucursal>>(`${urlSucursal}/ActualizarSucursal/${id}`, sucursal);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar la sucursal:', error);
      throw error;
    }
  },

  async eliminarSucursal(id: number): Promise<IRespuesta<boolean>> {
    try {
      const response = await axios.delete<IRespuesta<boolean>>(`${urlSucursal}/EliminarSucursal/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar la sucursal:', error);
      throw error;
    }
  },

  async obtenerSucursalPorId(id: number): Promise<IRespuesta<ISucursal>> {
    try {
      const response = await axios.get<IRespuesta<ISucursal>>(`${urlSucursal}/ObtenerSucursalPorId/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener la sucursal por ID:', error);
      throw error;
    }
  },

  async listarSucursales(): Promise<IRespuesta<ISucursal[]>> {
    try {
      const response = await axios.get<IRespuesta<ISucursal[]>>(`${urlSucursal}/ListarSucursales`);
      return response.data;
    } catch (error) {
      console.error('Error al listar las sucursales:', error);
      throw error;
    }
  },
};

export default SucursalService;
