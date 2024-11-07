"use client";
import Image from "next/image";
import { Box, Typography, Link } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ReactNode } from "react";

function Contenedor({ children }: { children: ReactNode }) {
  const settings = {
    dots: true,
  };

  return (
    <Box
      minHeight={"100vh"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgcolor="white"
    >
      <Box minHeight={"35vh"} width={"100vw"}>
        {children}
      </Box>
    </Box>
  );
}

export default Contenedor;
