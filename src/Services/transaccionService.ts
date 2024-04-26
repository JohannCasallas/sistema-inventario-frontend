import axios from 'axios';
import { ITransaccion } from '../components/interfaces/ITransaccion';
import { IRespuesta } from '../components/interfaces/IRespuesta';
import { apiInventario } from '../config';


const urlTransaccion = `${apiInventario}/Transaccion`;

const TransaccionService = {
    async registrarTransaccion(transaccion: ITransaccion): Promise<IRespuesta<ITransaccion>> {
        try {
            const response = await axios.post<IRespuesta<ITransaccion>>(`${urlTransaccion}/RegistrarTransaccion`, transaccion);
            return response.data;
        } catch (error) {
            console.error('Error al registrar la transacción:', error);
            throw error;
        }
    },
};

export default TransaccionService;
