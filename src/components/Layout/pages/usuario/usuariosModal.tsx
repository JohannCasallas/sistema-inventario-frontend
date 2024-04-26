import React from 'react';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { IUsuario } from '../../../interfaces/IUsuario';
import { Visibility, VisibilityOff } from '@mui/icons-material';


interface UsuariosModalProps {
    abrir: boolean;
    usuario?: IUsuario;
    alCambiarValor: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    cerrarModal: () => void;
    estadoModal: boolean;
    editarCrearUsuario: () => Promise<void>;

}
const UsuariosModal: React.FC<UsuariosModalProps> = ({
    abrir,
    alCambiarValor,
    cerrarModal,
    estadoModal,
    editarCrearUsuario,
    usuario
}) => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const validarContrasena = (contrasena: any) => {
        // Validar la contraseña aquí
        // Por ejemplo, verificar si tiene al menos una mayúscula, una minúscula, un carácter especial y una longitud mínima
        const tieneMayuscula = /[A-Z]/.test(contrasena);
        const tieneMinuscula = /[a-z]/.test(contrasena);
        const tieneCaracterEspecial = /[^A-Za-z0-9]/.test(contrasena);
        const tieneLongitudMinima = contrasena.length >= 8; // Cambia el valor mínimo según tus requisitos

        return tieneMayuscula && tieneMinuscula && tieneCaracterEspecial && tieneLongitudMinima;
    };

    const validarCorreoElectronico = (correo: any) => {
        // Expresión regular para validar la estructura de un correo electrónico
        const regexCorreoElectronico = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexCorreoElectronico.test(correo);
    };

    const alCambiarValorCorreoElectronico = (e: any) => {
        const { name, value } = e.target;
        if (name === 'correoElectronico' && !validarCorreoElectronico(value)) {
        } else {
            alCambiarValor(e);
        }
    };
    return (
        <Dialog open={abrir} onClose={cerrarModal} maxWidth="lg">
            <DialogTitle>{estadoModal === true ? 'Crear Usuario' : 'Editar Usuario'}</DialogTitle>
            <DialogContent>
                <DialogContentText style={{ paddingTop: 10, paddingBottom: 20 }}>
                    {estadoModal === true ? 'Por favor, ingrese los detalles del Usuario.' : 'Por favor, edite los detalles del Usuario.'}
                </DialogContentText>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="nombreUsuario"
                            name="nombreUsuario"
                            label="Nombre Usuario"
                            type="text"
                            fullWidth
                            inputProps={{ maxLength: 50 }}
                            value={usuario?.nombreUsuario}
                            onChange={alCambiarValor}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="nombre"
                            name="nombre"
                            label="Nombre"
                            type="text"
                            fullWidth
                            inputProps={{ maxLength: 50 }}
                            value={usuario?.nombre}
                            onChange={alCambiarValor}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="apellido"
                            name="apellido"
                            label="Apellido"
                            type="text"
                            fullWidth
                            inputProps={{ maxLength: 50 }}
                            value={usuario?.apellido}
                            onChange={alCambiarValor}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="rol-label">Rol Usuario</InputLabel>
                            <Select
                                labelId="rol-label"
                                id="rol"
                                name="rol"
                                value={usuario?.rol}
                                onChange={() => {}}
                                label="Rol Usuario"
                            >
                                <MenuItem value="administrador">Administrador</MenuItem>
                                <MenuItem value="usuario">Usuario</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            margin="dense"
                            id="correoElectronico"
                            name="correoElectronico"
                            label="Correo Electronico"
                            type="email" // Usamos el tipo "email" para que el navegador realice cierta validación por nosotros
                            fullWidth
                            inputProps={{ maxLength: 50 }}
                            value={usuario?.correoElectronico}
                            onChange={alCambiarValorCorreoElectronico}
                            error={usuario?.correoElectronico && !validarCorreoElectronico(usuario.correoElectronico) ? true : false}
                            helperText={usuario?.correoElectronico && !validarCorreoElectronico(usuario.correoElectronico) ? 'Formato de correo electrónico incorrecto' : ''}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            margin="dense"
                            id="telefono"
                            name="telefono"
                            label="Telefono"
                            type="tel"
                            fullWidth
                            inputProps={{ maxLength: 50 }}
                            onChange={(e) => {
                                e.target.value = e.target.value.replace(/\D/g, '');
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            margin="dense"
                            id="contrasena"
                            name="contrasena"
                            label="Contraseña"
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            inputProps={{ maxLength: 50 }}
                            value={usuario?.contrasena}
                            onChange={alCambiarValor}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleShowPassword} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            error={!validarContrasena(usuario?.contrasena)}
                            helperText={!validarContrasena(usuario?.contrasena) ? 'La contraseña debe contener al menos una mayúscula, una minúscula, un carácter especial y tener una longitud mínima de 8 caracteres.' : ''}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox checked={usuario?.activo} onChange={alCambiarValor} name="activo" />}
                            label="Estado Usuario"
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={cerrarModal} color="primary">
                    Cancelar
                </Button>
                <Button
                    variant="contained"
                    onClick={editarCrearUsuario}
                    color="primary"
                    disabled={
                        !usuario?.activo || !usuario?.apellido || !usuario?.contrasena ||
                        !usuario?.correoElectronico || !usuario?.nombre || !usuario?.nombreUsuario ||
                        !usuario?.rol || !usuario?.telefono
                    }
                >
                    {estadoModal === true ? 'Crear' : 'Editar'}
                </Button>
            </DialogActions>
        </Dialog>

    );
};

export default UsuariosModal;
