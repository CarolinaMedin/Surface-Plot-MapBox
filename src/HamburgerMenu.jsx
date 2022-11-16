import React, { useState } from 'react';
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import DatePickerHighlights from './DatePickerHighlights';

import './Menu.css'; 

function HamburgerMenu() {

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const drawerWidth = 100;

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
                    
                    <DatePickerHighlights />
                </Drawer>
            </MenuList>
        </Paper>
      )
}

export default HamburgerMenu;