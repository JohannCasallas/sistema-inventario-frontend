import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { ICategoria } from '../../../interfaces/ICategoria';


interface CategoriaModalProps {
    abrir: boolean;
    categoria?: ICategoria;
    alCambiarValor: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    cerrarModal: () => void;
    estadoModal: boolean;
    editarCrearCategoria: () => Promise<void>;
    setAbrir: React.Dispatch<React.SetStateAction<boolean>>; 
}

const CategoriasModal: React.FC<CategoriaModalProps> = ({
    abrir,
    categoria,
    alCambiarValor,
    cerrarModal,
    estadoModal,
    editarCrearCategoria,
    setAbrir
}) => {
    return (
        <Dialog open={abrir} onClose={cerrarModal}>
            <DialogTitle>{estadoModal === true ? 'Crear Categoría' : 'Editar Categoría'}</DialogTitle>
            <DialogContent>
                <DialogContentText style={{ paddingTop: 10, paddingBottom: 20 }}>
                    {estadoModal === true ? 'Por favor, ingrese los detalles de la categoría.' : 'Por favor, edite los detalles de la categoría.'}
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="nombre"
                    name="nombre"
                    label="Nombre Categoría"
                    type="text"
                    fullWidth
                    inputProps={{ maxLength: 30 }}
                    value={categoria?.nombre}
                    onChange={alCambiarValor}
                />
                <TextField
                    margin="dense"
                    id="descripcion"
                    name="descripcion"
                    label="Descripción Categoría"
                    type="text"
                    fullWidth
                    inputProps={{ maxLength: 50 }}
                    value={categoria?.descripcion}
                    onChange={alCambiarValor}
                />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={cerrarModal} color="primary">
                    Cancelar
                </Button>
                <Button
                    variant="contained"
                    onClick={editarCrearCategoria}
                    color="primary"
                    disabled={!categoria?.nombre || !categoria?.descripcion}
                >
                    {estadoModal === true ? 'Crear' : 'Editar'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CategoriasModal;
