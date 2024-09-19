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
      <AppBar position="static" sx={{ bgcolor: "#768a4f" }}>
        {" "}
        {/* Barra verde */}
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
              sx={{
                mr: 1,
                bgcolor: "white", //fondo de "busqueda"
                "& .MuiInputBase-input": {
                  color: "#768a4f", // Color del texto
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "grey.400", // Color del borde al pasar el ratón
                  },
                "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#768a4f", // Color del borde al enfocar
                  },
              }}
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
