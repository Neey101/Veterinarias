import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 2,
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              placeholder="Busqueda..."
              sx={{ mr: 1, bgcolor: "background.paper" }}
            />
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
