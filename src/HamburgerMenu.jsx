import React, { useState } from 'react';
/* import Divider from "@mui/material/Divider"; */
/* import Paper from "@mui/material/Paper"; */

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
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
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Box from "@mui/material/Box";
/* import './Menu.css';  */

function HamburgerMenu() {

    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const hamburgerOpen  = () => {
        setOpen(true);
    };

    const hamburgerClose  = () => {
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
        
        <Box
            elevation={10}
            style={{ display: 'flex', maxWidth: 0, backgroundColor: '#0111', color: "white", width: 0 }} 
        >
            <MenuList style={{ width: "100%" }}>
                <MenuItem style={{ marginLeft: 40, color: "red", paddingBottom: 20 }}>

                    {/* menu */}
                    <AppBar position="fixed" open={open} style={{ backgroundColor: "#0111" }}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={ hamburgerOpen }
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
                        <IconButton onClick={ hamburgerClose } style={{ backgroundColor: 'white !important', color: "white" }}>
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
                    </List>
                </Drawer>
            </MenuList>
        </Box>
    )
}

export default HamburgerMenu;