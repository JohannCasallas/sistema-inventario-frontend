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
