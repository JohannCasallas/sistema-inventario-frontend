export interface IUsuario {
    usuarioId: number;
    nombreUsuario: string;
    contrasena: string;
    nombre?: string;
    apellido?: string;
    activo: boolean;
    rol: string;
    fechaRegistro: Date;
    correoElectronico?: string;
    telefono?: string;
}

export const initialUsuario: IUsuario = {
    usuarioId: 0,
    nombreUsuario: "",
    contrasena: "",
    activo: false,
    rol: "",
    fechaRegistro: new Date(),
};