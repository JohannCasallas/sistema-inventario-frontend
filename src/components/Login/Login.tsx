import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UsuarioService from '../../Services/UsuarioService';
import { IUsuarioAutenticacion, initialUsuarioAutenticacion } from '../interfaces/IUsuarioAutenticacion';
import { Box, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';




const Login = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState<IUsuarioAutenticacion>(initialUsuarioAutenticacion);
    const [loading, setLoading] = useState(false);
    

    const alCambiarValor = (e: any) => {
        const { name, value } = e.target;
        setUsuario(prevUsuario => ({
            ...prevUsuario,
            [name]: value
        }));
    };

    const autenticarUsuario = async () => {
        setLoading(true);
        const response = await UsuarioService.autenticarUsuario(usuario);
        setLoading(false);
        if (response.exitoso) {
            navigate('/pages');
            Swal.fire({
                icon: 'success',
                title: 'Exito',
                text: response.mensaje!,
                timer: 2000, 
                showConfirmButton: false, 
            });
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Informacion',
                text: response.mensaje!,
                timer: 2000, 
                showConfirmButton: false, 
            });
        }
    };

    return (
        <>
            <Grid container justifyContent="center" alignItems="center" height="100vh">
                <Grid item xs={12} md={4}>
                    <Box p={3} boxShadow={3} bgcolor="background.paper" borderRadius={3}>
                        <Typography variant="h4" align="center" gutterBottom>Iniciar Sesión</Typography>
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="correoElectronico"
                                        name="correoElectronico"
                                        label="Correo Electrónico"
                                        type="email"
                                        inputProps={{ maxLength: 30 }}
                                        value={usuario.correoElectronico}
                                        onChange={alCambiarValor}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="contrasena"
                                        name="contrasena"
                                        label="Contraseña"
                                        type="password"
                                        inputProps={{ maxLength: 30 }}
                                        value={usuario.contrasena}
                                        onChange={alCambiarValor}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        disableElevation
                                        onClick={autenticarUsuario}
                                        disabled={!usuario.correoElectronico || !usuario.contrasena || loading}
                                    >
                                        {loading ? <CircularProgress size={24} color="inherit" /> : 'Iniciar sesión'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default Login;
