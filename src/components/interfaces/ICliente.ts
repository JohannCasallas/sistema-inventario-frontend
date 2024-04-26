export interface ICliente {
    clienteId: number;
    nombre: string;
    direccion?: string;
    contacto?: string;
}

export const estadoInicialCliente: ICliente = {
    clienteId: 0,
    nombre: "",
    direccion: "",
    contacto: ""
};