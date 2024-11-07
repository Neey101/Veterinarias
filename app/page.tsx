//Es el componente principal de la aplicación

import Image from "next/image";
import styles from "./page.module.css";
import Buscador from "./buscador/Buscador";
import Carrusel from "./home/Carrusel";
import Datos from "./home/Datos";
import Contenedor from "./home/Contenedor";
import { TipoDeMascota } from "@/types";

export default function Home() {
  return (
    <Contenedor>
      <Buscador />
      <Carrusel />
      <Datos />
    </Contenedor>
  );
}
