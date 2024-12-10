"use client";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L, { LatLngTuple } from "leaflet";
import PinDropIcon from "@mui/icons-material/PinDrop"; // Importar ícono

// Configuración manual del ícono
const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const Mapa = () => {
  const [estoyEnElCliente, setEstoyEnElCliente] = useState(false);
  const [mostrarOpciones, setMostrarOpciones] = useState(false);

  useEffect(() => {
    setEstoyEnElCliente(true);
  }, []);

  const coordenadas: LatLngTuple = [-34.62046405659382, -58.44444903179032]; // Coordenadas iniciales
  const marcadoresBase = [
    {
      posicion: [-34.62046405659382, -58.44444903179032],
      nombre: "Veterinaria Caballito",
      direccion: "Federico García Lorca 53",
      link: "https://maps.app.goo.gl/jNTpFJHFJLe3KSN48",
    },
  ];

  const otrasVeterinarias = [
    {
      posicion: [-34.623800051, -58.446770321],
      nombre: "Veterinaria Sanitas",
      direccion: "Víctor Martínez 120",
      link: "https://maps.app.goo.gl/jNTpFJHFJLe3KSN48",
    },
    {
      posicion: [-34.621200056, -58.447000421],
      nombre: "Veterinaria Pet Mundo",
      direccion: "Rojas 62",
      link: "https://maps.app.goo.gl/jNTpFJHFJLe3KSN48",
    },
  ];

  const [marcadores, setMarcadores] = useState(marcadoresBase);

  const mostrarMasVeterinarias = () => {
    if (!mostrarOpciones) {
      setMarcadores([...marcadoresBase, ...otrasVeterinarias]); // Agregar más marcadores
    } else {
      setMarcadores(marcadoresBase); // Volver a los marcadores iniciales
    }
    setMostrarOpciones(!mostrarOpciones);
  };

  return (
    estoyEnElCliente && (
      <div id="mapa">
        <MapContainer
          style={{ height: "300px" }}
          center={coordenadas}
          zoom={14}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Renderizar marcadores dinámicamente */}
          {marcadores.map((veterinaria, index) => (
            <Marker
              key={index}
              position={veterinaria.posicion as LatLngTuple}
              icon={customIcon}
            >
              <Popup>
                <div>
                  <strong>
                    <PinDropIcon style={{ verticalAlign: "middle" }} />{" "}
                    {veterinaria.nombre}
                  </strong>
                  <br />
                  {veterinaria.direccion}
                  <br />
                  <a
                    href={veterinaria.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "blue", textDecoration: "underline" }}
                  >
                    Ver en mapa
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Botón para alternar veterinarias */}
        <button
          onClick={mostrarMasVeterinarias}
          style={{
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {mostrarOpciones ? "Ocultar opciones" : "Más opciones"}
        </button>
      </div>
    )
  );
};

export default Mapa;
