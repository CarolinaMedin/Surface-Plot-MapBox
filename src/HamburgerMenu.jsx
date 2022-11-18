import React, { useState } from 'react';
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';

import DatePickerHighlights from './DatePickerHighlights';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import './Menu.css'; 

function HamburgerMenu() {

    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const drawerWidth = 300;

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
                    
                    <AppBar position="fixed" open={open} style={{ backgroundColor: "#0111" }}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{ mr: 2, ...(open && { display: 'none' }) }}
                            >
                                <MenuIcon onClick={handleDrawerClose} />
                            </IconButton>
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
                        <IconButton onClick={handleDrawerClose} style={{ backgroundColor: 'white !important', color: "white" }}>
                            {theme.direction === 'ltr' ? <ArrowBackIosNewIcon style={{ fontSize: "medium" }} /> : <MenuIcon />}
                        </IconButton>
                    </DrawerHeader>
                    
                    
                    <DatePickerHighlights style={{  marginLeft: '20%' }} />
                </Drawer>
            </MenuList>
        </Paper>
      )
}

export default HamburgerMenu;