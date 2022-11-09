import React from 'react';
import Divider from "@mui/material/Divider";
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
import SvgIcon from "@mui/material/SvgIcon";
import MenuIcon from '@mui/icons-material/Menu';

function Menu() {

    return (
        <Paper
        elevation={10}
        style={{ display:'flex', maxWidth: "100%", backgroundColor: 'black', color: "white", width: 300 }}
        >
            <MenuList style={{ width: "100%" }}>
            <MenuItem style={{ marginLeft: 40, color: "red", paddingBottom: 20 }}>
                    {/* <ListItemIcon>
                        <ContentCopy fontSize="small" />
                    </ListItemIcon> */}
                    <ListItemText style={{  textAlign: 'start' }}>PILAS</ListItemText>
                    <Typography variant="body2" color="white">
                    <MenuIcon />
                    </Typography>
                </MenuItem>
                <MenuItem style={{ marginLeft: 40 }}>
                    {/* <ListItemIcon>
                        <ContentCopy fontSize="small" />
                    </ListItemIcon> */}
                    <ListItemText style={{  textAlign: 'start' }}>Inicio</ListItemText>
                    <Typography variant="body2" color="white">
                        <CottageOutlinedIcon />
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem 
                style={{ marginLeft: 40 }}
                >
                    <ListItemText style={{  textAlign: 'start' }}>Gráficos</ListItemText>
                    <Typography variant="BarChart" color="white">
                        <BarChartIcon />
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem style={{ marginLeft: 40 }}>
                    <ListItemText style={{  textAlign: 'start' }}>Home</ListItemText>
                    <Typography variant="body2" color="white">
                        <SvgIcon>
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                        </SvgIcon>
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem style={{ marginLeft: 40 }}>
                    <ListItemText style={{  textAlign: 'start' }}>Otra Cosa</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem style={{ marginLeft: 40 }}>
                    <ListItemText style={{  textAlign: 'start' }}>Gráficos</ListItemText>
                    <Typography variant="BarChart" color="white">
                        <BarChartIcon />
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem style={{ marginLeft: 40 }}>
                    <ListItemText style={{  textAlign: 'start' }}>Inicio</ListItemText>
                    <Typography variant="body2" color="white">
                        <CottageOutlinedIcon />
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem style={{ marginLeft: 40 }}>
                    <ListItemText style={{  textAlign: 'start' }}>Home</ListItemText>
                    <Typography variant="body2" color="white">
                        <SvgIcon>
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                        </SvgIcon>
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem style={{ marginLeft: 40 }}>
                    <ListItemText style={{  textAlign: 'start' }}>Otra Cosa</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
    )
}

export default Menu;