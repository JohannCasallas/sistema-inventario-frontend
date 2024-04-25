import React from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Button, TextField } from '@mui/material';
import { AppBarComponent } from '../layout/AppBar';
import Layout from '../layout/Layaut';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ICategoria } from '../../../interfaces/ICategoria';
import { IRespuesta } from '../../../interfaces/IRespuesta';


interface CategoriasVistaProps {
  categorias: IRespuesta<ICategoria[]> | undefined;
  page: number;
  rowsPerPage: number;
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  manejarModal: () => void;
}

const CategoriasVista: React.FC<CategoriasVistaProps> = ({
  categorias,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  manejarModal
}) => {
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
              onClick={manejarModal}
              >
                Agregar
              </Button>
            </Grid>
          </Grid>
          <TableContainer component={Paper} style={{ height: 'calc(100% - 48px)' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>IDCategoria</TableCell>
                  <TableCell>Categoria</TableCell>
                  <TableCell>Descripción</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categorias && categorias.datos!.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((categoria) => (
                  <TableRow key={categoria.categoriaId}>
                    <TableCell>{categoria.categoriaId}</TableCell>
                    <TableCell>{categoria.nombre}</TableCell>
                    <TableCell>{categoria.descripcion}</TableCell>
                    <TableCell>
                      <Button style={{ color: 'red' }}>
                        <DeleteIcon />
                      </Button>
                      <Button color="primary" onClick={manejarModal}>
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
            count={categorias ? categorias.datos!.length : 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CategoriasVista;
