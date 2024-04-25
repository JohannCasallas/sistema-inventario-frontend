export interface ICategoria {
    categoriaId: number;
    nombre: string;
    descripcion?: string;
}

export const estadoInicialCategoria: ICategoria = {
    categoriaId: 0,
    nombre: "",
    descripcion: undefined,
};
