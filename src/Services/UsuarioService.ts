import axios from 'axios';
import { apiInventario } from '../../config';
import { IUsuario } from '../components/interfaces/IUsuario';
import { IRespuesta } from '../components/interfaces/IRespuesta';


const urlUsuario = `${apiInventario}/Usuario`;

const UsuarioService = {
  async registrarUsuario(usuario: IUsuario): Promise<IRespuesta<IUsuario>> {
    try {
      const response = await axios.post<IRespuesta<IUsuario>>(`${urlUsuario}/RegistrarUsuario`, usuario);
      return response.data;
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      throw error;
    }
  },
  
  async actualizarUsuario(id: number, usuario: IUsuario): Promise<IRespuesta<IUsuario>> {
    try {
      const response = await axios.put<IRespuesta<IUsuario>>(`${urlUsuario}/ActualizarUsuario/${id}`, usuario);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      throw error;
    }
  },
  
  async eliminarUsuario(id: number): Promise<IRespuesta<IUsuario>> {
    try {
      const response = await axios.delete<IRespuesta<IUsuario>>(`${urlUsuario}/EliminarUsuario/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      throw error;
    }
  },
  
  async autenticarUsuario(usuario: IUsuario): Promise<IRespuesta<string>> {
    try {
      const response = await axios.post<IRespuesta<string>>(`${urlUsuario}/usuarioAutenticacion`, usuario);
      return response.data;
    } catch (error) {
      console.error('Error al autenticar el usuario:', error);
      throw error;
    }
  },
  
  async listarUsuarios(): Promise<IRespuesta<IUsuario[]>> {
    try {
      const response = await axios.get<IRespuesta<IUsuario[]>>(`${urlUsuario}/ListarUsuarios`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener la lista de usuarios:', error);
      throw error;
    }
  },
};

export default UsuarioService;
