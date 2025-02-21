"use client";
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
  } from "@mui/material";
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from "next/link"; 

const options = [
    
        { label: "Inicio", url: "/" },
        { label: "Mapa", url: "/mapeo" },
        { label: "Registrar", url: "/veterinarias/registrar" },

  ];
  
export default function Page() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
               {options.map(({ label, url }) => (
            <MenuItem key={label} onClick={handleClose}>
              <Link href={url} passHref>
                {label}
              </Link>
            </MenuItem>
                ))}
            </Menu>

            <Typography variant="h6" color="inherit" component="div">
                Informacion mapa
            </Typography>
            </Toolbar>
      </AppBar>

);
}

