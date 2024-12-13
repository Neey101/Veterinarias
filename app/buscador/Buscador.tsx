import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export default function ButtonAppBar() {
  const [query, setQuery] = React.useState("");
  const [veterinarias, setVeterinarias] = React.useState<any[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  const handleSearch = async () => {
    if (query.trim() !== "") {
      try {
        const response = await fetch(`/api/veterinarias?query=${query}`);
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setVeterinarias(data);
        setError(null);  // Si todo va bien, no mostramos error
      } catch (err: any) {
        setError(err.message);  // Guardamos el mensaje de error
        setVeterinarias([]);  // Limpiamos los resultados anteriores
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#768a4f" }}>
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
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              sx={{
                mr: 1,
                bgcolor: "white",
                "& .MuiInputBase-input": {
                  color: "#768a4f",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "grey.400",
                },
                "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#768a4f",
                },
              }}
            />
            <IconButton color="inherit" onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>

      {error && <div style={{ color: "red" }}>{error}</div>} {/* Muestra el error si existe */}

      <Box>
        {veterinarias.length > 0 ? (
          veterinarias.map((veterinaria) => (
            <div key={veterinaria.id}>{veterinaria.nombreDelLocal} - {veterinaria.ubicacion}</div>
          ))
        ) : (
          <div>No se encontraron resultados</div>
        )}
      </Box>
    </Box>
  );
}
