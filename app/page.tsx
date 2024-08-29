import Image from "next/image";
import styles from "./page.module.css";
import Buscador from "./buscador/Buscador";
import Carrusel from "./home/Carrusel";

export default function Home() {
  return (
    <>
      <Buscador />
      <Carrusel />
    </>
  );
}
