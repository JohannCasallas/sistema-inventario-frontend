import axios from 'axios';
import { ICategoria } from '../components/interfaces/ICategoria';
import { IRespuesta } from '../components/interfaces/IRespuesta';
import { apiInventario } from '../../config'


const urlCategoria = `${apiInventario}/Categoria`;

const CategoriaService = {
  async crearCategoria(categoria: ICategoria): Promise<IRespuesta<ICategoria>> {
    try {
      const response = await axios.post<IRespuesta<ICategoria>>(`${urlCategoria}/CrearCategoria`, categoria);
      return response.data;
    } catch (error) {
      console.error('Error al crear la categoría:', error);
      throw error;
    }
  },

  async actualizarCategoria(id: number, categoria: ICategoria): Promise<IRespuesta<ICategoria>> {
    try {
      const response = await axios.put<IRespuesta<ICategoria>>(`${urlCategoria}/ActualizarCategoria/${id}`, categoria);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar la categoría:', error);
      throw error;
    }
  },

  async eliminarCategoria(id: number): Promise<IRespuesta<boolean>> {
    try {
      const response = await axios.delete<IRespuesta<boolean>>(`${urlCategoria}/EliminarCategoria/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar la categoría:', error);
      throw error;
    }
  },

  async obtenerCategoriaPorId(id: number): Promise<IRespuesta<ICategoria>> {
    try {
      const response = await axios.get<IRespuesta<ICategoria>>(`${urlCategoria}/ObtenerCategoriaPorId/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener la categoría por su ID:', error);
      throw error;
    }
  },

  async listarCategorias(): Promise<IRespuesta<ICategoria[]>> {
    try {
      const response = await axios.get<IRespuesta<ICategoria[]>>(`${urlCategoria}/ListarCategorias`);
      return response.data;
    } catch (error) {
      console.error('Error al listar las categorías:', error);
      throw error;
    }
  },
};

export default CategoriaService;
