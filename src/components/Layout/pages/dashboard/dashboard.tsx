import React from 'react';

import ClientesService from '../../../../Services/ClientesService';
import UsuarioService from '../../../../Services/UsuarioService';
import CategoriaService from '../../../../Services/CategoriasService';
import ProductoService from '../../../../Services/ProductoService';
import ProveedorService from '../../../../Services/ProveedorService';
import SucursalService from '../../../../Services/SucursalService';

import DashboardVista from './dashboardVista';

import { ICliente } from '../../../interfaces/ICliente';
import { IRespuesta } from '../../../interfaces/IRespuesta';
import { IProducto } from '../../../interfaces/IProducto';
import { ICategoria } from '../../../interfaces/ICategoria';
import { IProveedor } from '../../../interfaces/IProveedor';
import { ISucursal } from '../../../interfaces/ISucursal';
import { IUsuario } from '../../../interfaces/IUsuario';


import Swal from 'sweetalert2';



const Dashboard: React.FC = () => {
    const [loading, setLoading] = React.useState(true);
    const [usuarios, setUsuarios] = React.useState<IRespuesta<IUsuario[]>>();
    const [clientes, setClientes] = React.useState<IRespuesta<ICliente[]>>();
    const [categorias, setCategorias] = React.useState<IRespuesta<ICategoria[]>>();
    const [productos, setProductos] = React.useState<IRespuesta<IProducto[]>>();
    const [proveedor, setProveedor] = React.useState<IRespuesta<IProveedor[]>>();
    const [sucursales, setSucursales] = React.useState<IRespuesta<ISucursal[]>>();


    React.useEffect(() => {
        const fetchData = async () => {
            try {
                Swal.fire({
                    title: 'Cargando datos...',
                    html: 'Espere un momento por favor.',
                    allowOutsideClick: false,
                    onBeforeOpen: () => {
                        Swal.showLoading();
                    }
                });

                const [clientesData, categoriasData, usuariosData, productosData, proveedorData, sucursalData] = await Promise.all([
                    ClientesService.listarClientes(),
                    CategoriaService.listarCategorias(),
                    UsuarioService.listarUsuarios(),
                    ProductoService.listarProductos(),
                    ProveedorService.listarProveedores(),
                    SucursalService.listarSucursales(),
                ]);

                setUsuarios(usuariosData);
                setClientes(clientesData);
                setCategorias(categoriasData);
                setProductos(productosData);
                setProveedor(proveedorData);
                setSucursales(sucursalData);

                Swal.close();
            } catch (error) {
                console.error('Error al obtener los datos:', error);
                Swal.close();
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    let usuariosLength = usuarios?.datos?.length || 0;
    let clientesLength = clientes?.datos?.length || 0;
    let categoriasLength = categorias?.datos?.length || 0;
    let productosLength = productos?.datos?.length || 0;
    let proveedorLength = proveedor?.datos?.length || 0;
    let sucursalesLength = sucursales?.datos?.length || 0;




    return (
        <>
            <DashboardVista
                usuariosLength={usuariosLength}
                clientesLength={clientesLength}
                categoriasLength={categoriasLength}
                productosLength={productosLength}
                proveedorLength={proveedorLength}
                sucursalesLength={sucursalesLength}
            />
        </>
    );
};

export default Dashboard;
