import axios from 'axios';
import { apiInventario } from '../../config'
import { IEntradaInventario } from '../components/interfaces/IEntradaInventario';
import { IRespuesta } from '../components/interfaces/IRespuesta';

const urlEntradaInventario = `${apiInventario}/EntradaInventario`;

const EntradaInventarioService = {
  async registrarEntradaInventario(entrada: IEntradaInventario): Promise<IRespuesta<IEntradaInventario>> {
    try {
      const response = await axios.post<IRespuesta<IEntradaInventario>>(`${urlEntradaInventario}/RegistrarEntradaInventario`, entrada);
      return response.data;
    } catch (error) {
      console.error('Error al registrar la entrada de inventario:', error);
      throw error;
    }
  },
};

export default EntradaInventarioService;
