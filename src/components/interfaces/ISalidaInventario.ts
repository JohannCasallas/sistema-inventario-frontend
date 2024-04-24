import { IProducto } from './IProducto'; 
import { ICliente } from './ICliente'; 

export interface ISalidaInventario {
    salidaId: number;
    productoId: number;
    clienteId: number;
    cantidad: number;
    fecha: Date;
    producto?: IProducto | null; 
    cliente?: ICliente | null; 
}
