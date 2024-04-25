import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Divider, Grid } from '@mui/material';

const Links = [
    {
        name: "dashboard",
        href: "/pages"
    },
    {
        name: "Usuario",
        href: "/pages/usuario"
    },
    {
        name: "Categorías",
        href: "/pages/categorias"
    },
    {
        name: "Clientes",
        href: "/pages/clientes"
    },
    {
        name: "Entrada de Inventario",
        href: "/pages/entradaInventario"
    },
    {
        name: "Producto",
        href: "/pages/producto"
    },
    {
        name: "Proveedor",
        href: "/pages/proveedor"
    },
    {
        name: "Salida de Inventario",
        href: "/pages/salidaInventario"
    },
    {
        name: "Sucursal",
        href: "/pages/sucursal"
    },
    {
        name: "Transacción",
        href: "/pages/transaccion"
    },
];

const Layout: React.FC = () => {
    return (
        <Grid container direction="column" style={{ height: '100%', width: '100%' }}>
            <Typography style={{padding: '8px 20px'}} variant="h6" gutterBottom>
                Menú
            </Typography>
            <Divider />
            <List component="nav" aria-label="main mailbox folders">
                {Links.map((link, index) => (
                    <ListItem
                        button
                        component={Link}
                        to={link.href}
                        key={index}
                        sx={{ paddingLeft: '16px', paddingRight: '16px' }}
                    >
                        <ListItemText primary={link.name} />
                    </ListItem>
                ))}
            </List>
        </Grid>
    );
};

export default Layout;
