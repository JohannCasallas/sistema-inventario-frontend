import React from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Button, TextField } from '@mui/material';
import { AppBarComponent } from '../layout/AppBar';
import Layout from '../layout/Layaut';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const categoriasData = [
    { id: 1, nombre: 'Categoría 1', descripcion: 'Descripción de la categoría 1' },
    { id: 2, nombre: 'Categoría 2', descripcion: 'Descripción de la categoría 2' },
    { id: 3, nombre: 'Categoría 3', descripcion: 'Descripción de la categoría 3' },
    { id: 4, nombre: 'Categoría 4', descripcion: 'Descripción de la categoría 4' },
    { id: 5, nombre: 'Categoría 5', descripcion: 'Descripción de la categoría 5' },
];

const YourComponent: React.FC = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
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
                            {/* Aquí va el componente de búsqueda */}
                            <TextField
                                label="Buscar"
                                variant="outlined"
                                size="small"
                                placeholder="Buscar..."
                            />
                        </Grid>
                        <Grid item>
                            {/* Botón de agregar */}
                            <Button variant="contained" color="primary">
                                Agregar
                            </Button>
                        </Grid>
                    </Grid>
                    <TableContainer component={Paper} style={{ height: 'calc(100% - 48px)' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Descripción</TableCell>
                                    <TableCell>Acciones</TableCell> {/* Nueva columna para las acciones */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {categoriasData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((categoria) => (
                                    <TableRow key={categoria.id}>
                                        <TableCell>{categoria.id}</TableCell>
                                        <TableCell>{categoria.nombre}</TableCell>
                                        <TableCell>{categoria.descripcion}</TableCell>
                                        <TableCell>
                                            <Button style={{color: 'red'}}>
                                                <DeleteIcon />
                                            </Button>
                                            <Button color="primary">
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
                        count={categoriasData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default YourComponent;
