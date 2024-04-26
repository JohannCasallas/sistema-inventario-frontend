import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { AppBarComponent } from '../layout/AppBar';
import Layout from '../layout/Layaut';



interface dashboardVistaProps {
  usuariosLength: number
  clientesLength: number,
  categoriasLength: number,
  productosLength: number,
  proveedorLength: number,
  sucursalesLength: number
}

const DashboardVista: React.FC<dashboardVistaProps> = ({
  usuariosLength,
  clientesLength,
  categoriasLength,
  productosLength,
  proveedorLength,
  sucursalesLength,
}) => {

  const cardsData = [
    { title: 'Usuarios', length: usuariosLength, image: 'https://assets.entrepreneur.com/content/3x2/2000/1608311777-GettyImages-1191849990.jpg' },
    { title: 'Clientes', length: clientesLength, image: 'https://cdn2.hubspot.net/hubfs/5621658/Clientes%20de%20la%20empresa.jpg' },
    { title: 'Categorías', length: categoriasLength, image: 'https://conceptodefinicion.de/wp-content/uploads/2016/04/Categor%C3%ADa.jpg' },
    { title: 'Productos', length: productosLength, image: 'https://www.mdjcr.com/wp-content/uploads/2020/10/gestion-bodegas-almacenes-inventarios.jpg' },
    { title: 'Proveedores', length: proveedorLength, image: 'https://thelogisticsworld.com/wp-content/uploads/2020/09/proveedores-e1663621176409.jpeg' },
    { title: 'Sucursales', length: sucursalesLength, image: 'https://d11cuk1a0j5b57.cloudfront.net/blog/wp-content/uploads/2013/08/pyme_granempresa.jpg' },
  ];

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
          <Grid container spacing={2}>
            {cardsData.map((card) => (
              <Grid item xs={4} key={card.title}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={card.image}
                      alt={card.title}
                      height="140"
                    />
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {card.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Total: {card.length}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          </Grid>
      </Grid>
    </Grid>
  );
}

export default DashboardVista;
