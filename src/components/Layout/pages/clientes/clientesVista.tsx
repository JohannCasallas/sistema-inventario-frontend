import React from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Button, TextField } from '@mui/material';
import { AppBarComponent } from '../layout/AppBar';
import Layout from '../layout/Layaut';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ICliente } from '../../../interfaces/ICliente';
import { IRespuesta } from '../../../interfaces/IRespuesta';


interface ClientesVistaProps {
  clientes: IRespuesta<ICliente[]> | undefined;
  manejarModal: (accion: 'creacion' | 'edicion') => void;
  manejarClicEdicion: (cliente: ICliente) => void;
  eliminarCliente: (cliente: ICliente) => Promise<void>;
}

const ClientesVista: React.FC<ClientesVistaProps> = ({
  manejarModal,
  manejarClicEdicion,
  clientes,
  eliminarCliente
}) => {
  const [pagina, setPagina] = React.useState(0);
  const [filasPorPagina, setFilasPorPagina] = React.useState(5);

  const manejarCambioPagina = (evento: unknown, nuevaPagina: number) => {
    setPagina(nuevaPagina);
  };

  const manejarCambioFilasPorPagina = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setFilasPorPagina(parseInt(evento.target.value, 10));
    setPagina(0);
  };
  return (
    <Grid container direction="column" style={{ height: '100%', width: '100%' }}>
      <Grid item>
        <AppBarComponent />
      </Grid>
      <Grid item container style={{ height: '90%', width: '100%' }}>
        <Grid item xs={2} style={{ backgroundColor: '#f0f0f0', height: '100%' }}>
          <Layout />
        </Grid>
        <Grid item xs={10} style={{ padding: '20px', height: '100%' }}>
          <Grid container spacing={2} alignItems="center" justifyContent="flex-end" padding="10px">
            <Grid item>
              <TextField
                label="Buscar"
                variant="outlined"
                size="small"
                placeholder="Buscar..."
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => manejarModal('creacion')}
              >
                Agregar
              </Button>
            </Grid>
          </Grid>
          <TableContainer component={Paper} style={{ height: 'calc(100% - 48px)' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>IDCliente</TableCell>
                  <TableCell>Cliente</TableCell>
                  <TableCell>Dirección</TableCell>
                  <TableCell>Contacto</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {clientes && clientes.datos!.slice(pagina * filasPorPagina, pagina * filasPorPagina + filasPorPagina).map((cliente) => (
                  <TableRow key={cliente.clienteId}>
                    <TableCell>{cliente.nombre}</TableCell>
                    <TableCell>{cliente.contacto}</TableCell>
                    <TableCell>{cliente.direccion}</TableCell>
                    <TableCell>
                      <Button
                        style={{ color: 'red' }}
                        onClick={() => eliminarCliente(cliente)}
                      >
                        <DeleteIcon />
                      </Button>
                      <Button
                        color="primary"
                        onClick={() => {
                          manejarModal('edicion');
                          manejarClicEdicion(cliente);
                        }}
                      >
                        <EditIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={clientes ? clientes.datos!.length : 0}
            rowsPerPage={filasPorPagina}
            page={pagina}
            onPageChange={manejarCambioPagina}
            onRowsPerPageChange={manejarCambioFilasPorPagina}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ClientesVista;
