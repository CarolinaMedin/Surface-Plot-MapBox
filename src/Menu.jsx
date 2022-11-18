import React, { useState } from 'react';
/* import Divider from "@mui/material/Divider"; */
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
/* import ListItemIcon from "@mui/material/ListItemIcon"; */
import Typography from "@mui/material/Typography";
/* import ContentCopy from "@mui/icons-material/ContentCopy"; */
/* import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud"; */
import BarChartIcon from "@mui/icons-material/BarChart";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
/* import SvgIcon from "@mui/material/SvgIcon"; */
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { styled, useTheme } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonIcon from '@mui/icons-material/Person';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './Menu.css'; 

function Menu() {

    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const drawerWidth = 240;

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      }));

    return (
        
        <Paper
            elevation={10}
            style={{ display: 'flex', maxWidth: 0, backgroundColor: '#0111', color: "white", width: 0 }} 
        >
            <MenuList style={{ width: "100%" }}>
                <MenuItem style={{ marginLeft: 40, color: "red", paddingBottom: 20 }}>
                    {/* menu de la columna izquierda del grafico */}
                    <AppBar position="fixed" open={open} style={{ backgroundColor: "#0111" }}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{ mr: 2, ...(open && { display: 'none' }) }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div">
                                Pilas
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    {/* <ListItemText style={{ textAlign: 'start' }}>PILAS</ListItemText>
                    <Typography variant="body2" color="white">
                        <MenuIcon />
                    </Typography> */}
                </MenuItem>

                <Drawer 
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        }
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    
                    <DrawerHeader style={{  maxWidth: "100%", backgroundColor: 'black', color: "white", width: 300 }}>
                        <IconButton onClick={handleDrawerClose} style={{ backgroundColor: 'white !important', color: "white" }}>
                            {theme.direction === 'ltr' ? <ArrowBackIosNewIcon style={{ fontSize: "medium" }} /> : <MenuIcon />}
                        </IconButton>
                    </DrawerHeader>
                   
                    <List style={{  maxWidth: "100%", backgroundColor: 'black', color: "white", width: 300, height:'100%' }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon style={{ color: "white" }}>
                                        <CottageOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText>Inicio</ListItemText>
                                    <ListItemText />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon style={{ color: "white" }}>
                                        <BarChartIcon />
                                    </ListItemIcon>
                                    <ListItemText>Gráficos</ListItemText>
                                    <ListItemText />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon style={{ color: "white" }}>
                                        <PersonIcon />
                                    </ListItemIcon>
                                    <ListItemText>Usuarios</ListItemText>
                                    <ListItemText />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon style={{ color: "white" }}>
                                        <MapOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText>Mapas</ListItemText>
                                    <ListItemText />
                                </ListItemButton>
                            </ListItem>
                    </List>
                </Drawer>
            </MenuList>
        </Paper>
    )
}

export default Menu;