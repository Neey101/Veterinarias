"use client";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L, { LatLngTuple } from "leaflet";
import PinDropIcon from "@mui/icons-material/PinDrop"; // Importar ícono
import TarjetaVeterinaria from "./TarjetaVeterinaria"; // Importa el componente TarjetaVeterinaria
import { Veterinaria } from "@prisma/client";
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
  const [veterinarias, setVeterinarias] = useState<Veterinaria[]>([]); // Aquí se almacenan las veterinarias

  useEffect(() => {
    setEstoyEnElCliente(true);

    // Función para obtener las veterinarias desde la API
    const obtenerVeterinarias = async () => {
      try {
        // Aquí va la URL de tu API
        const response = await fetch('/api/veterinarias'); // O usa axios según lo tengas configurado
        const data = await response.json();
        setVeterinarias(data["veterinarias"]); // Guardamos las veterinarias en el estado
      } catch (error) {
        console.error('Error al obtener veterinarias:', error);
      }
    };

    obtenerVeterinarias(); // Llamada a la API para obtener las veterinarias
  }, []);

  const coordenadas: LatLngTuple = [-34.62046405659382, -58.44444903179032]; // Coordenadas iniciales

  return (
    estoyEnElCliente && (
      <div id="mapa">
        <MapContainer
          style={{ height: "500px" }}
          center={coordenadas}
          zoom={14}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Renderizar marcadores dinámicamente */}
          {veterinarias.map((veterinaria) => (
            <Marker
              key={veterinaria.id} // Usamos el id único de cada veterinaria
              position={[veterinaria.latitud, veterinaria.longitud] as LatLngTuple}
              icon={customIcon}
            >
              <Popup>
                <TarjetaVeterinaria
                  nombre={veterinaria.nombreDelLocal}
                  email={veterinaria.email}
                  numero={veterinaria.numero}
                  direccion={veterinaria.ubicacion}
                  foto={"https://picsum.photos/200/300?grayscale"} // Asegúrate de tener la URL de la foto de la veterinaria
                  latitud={veterinaria.latitud}
                  longitud={veterinaria.longitud}
                />
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    )
  );
};

export default Mapa;
