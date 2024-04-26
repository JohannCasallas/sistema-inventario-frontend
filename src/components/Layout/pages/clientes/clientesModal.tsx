import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { ICliente } from '../../../interfaces/ICliente';


interface ClientesModalProps {
    abrir: boolean;
    cliente?: ICliente;
    alCambiarValor: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    cerrarModal: () => void;
    estadoModal: boolean;
    editarCrearCliente: () => Promise<void>;
    
}
const ClientessModal: React.FC<ClientesModalProps> = ({
    abrir,
    alCambiarValor,
    cerrarModal,
    estadoModal,
    editarCrearCliente,
    cliente
}) => {
    return (
        <Dialog open={abrir} onClose={cerrarModal}>
            <DialogTitle>{estadoModal === true ? 'Crear Cliente' : 'Editar Cliente'}</DialogTitle>
            <DialogContent>
                <DialogContentText style={{ paddingTop: 10, paddingBottom: 20 }}>
                    {estadoModal === true ? 'Por favor, ingrese los detalles del Cliente.' : 'Por favor, edite los detalles del Cliente.'}
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="nombre"
                    name="nombre"
                    label="Nombre Cliente"
                    type="text"
                    fullWidth
                    inputProps={{ maxLength: 50 }}
                    value={cliente?.nombre}
                    onChange={alCambiarValor}
                />
                <TextField
                    margin="dense"
                    id="contacto"
                    name="contacto"
                    label="Contacto cliente"
                    type="text"
                    fullWidth
                    inputProps={{ maxLength: 50 }}
                    value={cliente?.contacto}
                    onChange={alCambiarValor}
                />
                <TextField
                    margin="dense"
                    id="direccion"
                    name="direccion"
                    label="Direccion cliente"
                    type="text"
                    fullWidth
                    inputProps={{ maxLength: 50 }}
                    value={cliente?.direccion}
                    onChange={alCambiarValor}
                />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={cerrarModal} color="primary">
                    Cancelar
                </Button>
                <Button
                    variant="contained"
                    onClick={editarCrearCliente}
                    color="primary"
                    disabled={!cliente?.nombre || !cliente?.contacto || !cliente?.direccion}
                >
                    {estadoModal === true ? 'Crear' : 'Editar'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ClientessModal;
