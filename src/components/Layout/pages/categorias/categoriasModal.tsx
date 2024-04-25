import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { ICategoria } from '../../../interfaces/ICategoria';


interface CategoriaModalProps {
  abrir: boolean;
  manejarModal: () => void;
  categoria?: ICategoria;
  alCambiarValor: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const CategoriasModal: React.FC<CategoriaModalProps> = ({ 
    abrir, 
    manejarModal, 
    categoria,
    alCambiarValor,
}) => {
  return (
    <Dialog open={abrir} onClose={manejarModal}>
      <DialogTitle>{categoria ? 'Editar Categoría' : 'Crear Categoría'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Por favor, ingrese los detalles de la categoría.
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
        <Button onClick={manejarModal} color="primary">
          Cancelar
        </Button>
        <Button onClick={() => {}} color="primary">
          {categoria ? 'Editar' : 'Crear'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CategoriasModal;
