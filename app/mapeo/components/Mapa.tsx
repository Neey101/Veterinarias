"use client";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
const Mapa = () => {
  const [estoyEnElCliente, setestoyEnElCliente] = useState(false);
  useEffect(() => {
    setestoyEnElCliente(true);
  });
  return (
    estoyEnElCliente && (
      <div id="mapa">
        <MapContainer
          style={{ height: "300px" }}
          center={[-34.684928, -58.4515584]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-34.684928, -58.4515584]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    )
  );
};

export default Mapa;
