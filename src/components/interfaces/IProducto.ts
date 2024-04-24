import { ICategoria } from './ICategoria';

export interface IProducto {
    productId: number;
    nombre: string;
    descripcion?: string;
    precio: number;
    cantidadStock: number;
    categoriaId: number;
    categoria?: ICategoria | null; 
}
