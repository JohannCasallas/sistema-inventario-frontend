import { IProducto } from './IProducto'; 
import { IProveedor } from './IProveedor'; 

export interface IEntradaInventario {
    entradaId: number;
    productoId: number;
    proveedorId: number;
    cantidad: number;
    fecha: Date;
    producto?: IProducto | null; 
    proveedor?: IProveedor | null; 
}
