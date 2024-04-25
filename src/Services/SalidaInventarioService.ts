import axios from 'axios';
import { apiInventario } from '../config';
import { ISalidaInventario } from '../components/interfaces/ISalidaInventario';
import { IRespuesta } from '../components/interfaces/IRespuesta';


const urlSalidaInventario = `${apiInventario}/SalidaInventario`;

const SalidaInventarioService = {
    async registrarSalidaInventario(salida: ISalidaInventario): Promise<IRespuesta<ISalidaInventario>> {
        try {
            const response = await axios.post<IRespuesta<ISalidaInventario>>(`${urlSalidaInventario}/RegistrarSalidaInventario`, salida);
            return response.data;
        } catch (error) {
            console.error('Error al registrar la salida de inventario:', error);
            throw error;
        }
    },
};

export default SalidaInventarioService;
