import React, { useState } from 'react';
import ListItemText from "@mui/material/ListItemText";
/* import Typography from "@mui/material/Typography"; */
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { styled, useTheme } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from "@mui/material/Box";
/* import BarChartIcon from "@mui/icons-material/BarChart";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PersonIcon from "@mui/icons-material/Person"; */
import DatePickerHighlights from './DatePickerHighlights';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GlobalStyles from '@mui/material/GlobalStyles';
import './HamburgerMenu2.css'


function HamburgerMenu2() {
    const [state, setState] = React.useState({
        right: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const drawerHeight = 240;

    const [open, setOpen] = useState(false);

    const theme = useTheme();

    /* const handleDrawerOpen = () => {
        setOpen(true);
    }; */

    const handleDrawerClose = () => {
        setOpen(false);
    };

    /* const algo = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '200px',
        marginLeft: '30px',
        margin: '100px',
      })); */


const list = (anchor) => (
    <Box
    className='cajita'
    style={{backgroundColor: 'red' }}
    /* onClick={handleDrawerClose} */
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 270, height: anchor === "top" || anchor === "center" ? "auto" : 200 }}
        role="presentation"
        onClick={toggleDrawer(anchor, true)}
    /* onKeyDown={toggleDrawer(anchor, false)} */
    >
            
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon disablePadding>
                        <CalendarMonthIcon />
                    </ListItemIcon>
                    <ListItemText>Fechas</ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
        <DatePickerHighlights disablePadding />
    </Box>
);

return (
    <div>
        {["right"].map((anchor) => (
            <React.Fragment key={anchor} open={open}>
                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                    <IconButton onClick={handleDrawerClose} style={{ backgroundColor: 'white !important', color: "white" }}>
                         <ArrowForwardIosIcon style={{ fontSize: "medium" }}/>
                    </IconButton>
                </Drawer>
            </React.Fragment>
        ))}
    </div>
);
}


export default HamburgerMenu2;