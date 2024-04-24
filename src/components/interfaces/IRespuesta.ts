export interface IRespuesta<T> {
    mensaje?: string;
    exitoso: boolean;
    datos?: T;
}
