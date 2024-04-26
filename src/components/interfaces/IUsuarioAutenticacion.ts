export interface IUsuarioAutenticacion {
    correoElectronico?: string;
    contrasena: string;
}

export const initialUsuarioAutenticacion: IUsuarioAutenticacion = {
    correoElectronico: '',
    contrasena: '',
};