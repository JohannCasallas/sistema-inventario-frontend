import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, styled } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; 
import { useNavigate } from 'react-router-dom'; 

const StyledAppBar = styled(AppBar)({
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
});

const TitleTypography = styled(Typography)({
    fontFamily: 'cursive',
    fontWeight: 'bold',
    letterSpacing: '1px',
});

const AppBarComponent: React.FC = () => {
    const navigate = useNavigate(); 

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <StyledAppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <InventoryIcon />
                </IconButton>
                <TitleTypography variant="h6" sx={{ flexGrow: 1 }}>
                    Johann Casallas
                </TitleTypography>
                <IconButton edge="end" color="inherit" aria-label="logout" onClick={handleLogout}>
                    <ExitToAppIcon /> 
                </IconButton>
            </Toolbar>
        </StyledAppBar>
    );
};

export { AppBarComponent };
