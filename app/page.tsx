import Image from "next/image";
import styles from "./page.module.css";
import Carrusel from "./home/components/Carrusel";
import Buscador from "./buscador/Buscador";
export default function Home() {
  return (
    <>
      <Buscador />
      <Carrusel />
    </>
  );
}
