import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const FooterComponent: React.FC = () => {
    return (
        <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2 }}>
            <Typography variant="body1">Este es el Footer de mi aplicación.</Typography>
        </Box>
    );
};

export { FooterComponent };