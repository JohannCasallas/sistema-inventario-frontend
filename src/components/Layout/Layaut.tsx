import React from 'react';
import { Link } from 'react-router-dom';

const Links = [
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
    {
        name: "Usuario",
        href: "/pages/usuario"
    },
];

const Layout: React.FC = () => {
    return (
        <div>
            <ul>
                {Links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Layout;
