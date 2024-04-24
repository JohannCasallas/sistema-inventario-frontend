import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layaut';
import Login from './components/Login/Login';
import Sucursal from './components/Layout/pages/sucursal/sucursal';
import Categorias from './components/Layout/pages/categorias/categorias';
import Clientes from './components/Layout/pages/clientes/clientes';
import EntradaInventario from './components/Layout/pages/entradaInventario/entradaInventario';
import Producto from './components/Layout/pages/producto/producto';
import Proveedor from './components/Layout/pages/proveedor/proveedor';
import SalidaInventario from './components/Layout/pages/salidaInventario/salidaInventario';
import Transaccion from './components/Layout/pages/transaccion/transaccion';
import Usuario from './components/Layout/pages/usuario/usuario';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Login />} />
          <Route path="/pages" element={<Layout />} />
          <Route path="/pages/categorias" element={<Categorias />} />
          <Route path="/pages/clientes" element={<Clientes />} />
          <Route path="/pages/entradaInventario" element={<EntradaInventario />} />
          <Route path="/pages/producto" element={<Producto />} />
          <Route path="/pages/proveedor" element={<Proveedor />} />
          <Route path="/pages/salidaInventario" element={<SalidaInventario />} />
          <Route path="/pages/sucursal" element={<Sucursal />} />
          <Route path="/pages/transaccion" element={<Transaccion />} />
          <Route path="/pages/usuario" element={<Usuario />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
