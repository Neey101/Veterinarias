"use client";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L, { LatLngTuple } from "leaflet";

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

  useEffect(() => {
    setEstoyEnElCliente(true);
  }, []);

  const coordenadas: LatLngTuple = [-34.62046405659382, -58.44444903179032]; // Coordenadas del marcador

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
          {/* Marcador principal */}
          <Marker position={coordenadas} icon={customIcon}>
            <Popup>
              <strong>Veterinaria Caballito</strong>
              <br />
              <br />
              {/* Enlace al mapa de Google */}
              <a
                href="https://maps.app.goo.gl/jNTpFJHFJLe3KSN48"
                target="_blank" // Abre el enlace en una nueva pestaña
                rel="noopener noreferrer" // Mejora de seguridad para enlaces externos
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Federico García Lorca 53.
              </a>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    )
  );
};

export default Mapa;
