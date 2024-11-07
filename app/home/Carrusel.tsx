"use client";
import Image from "next/image";
import { Box, Typography, Link } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Component() {
  const settings = {
    dots: true,
  };

  return (
    <Slider {...settings}>
      <Box position={"relative"} width={"30vw"} height={"60vh"}>
        <Image
          src="https://picsum.photos/id/837/5000/3333"
          alt="..."
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box position={"relative"} width={"100vw"} height={"60vh"}>
        <Image
          src="https://picsum.photos/id/1062/5000/3334"
          alt="..."
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box position={"relative"} width={"100vw"} height={"60vh"}>
        <Image
          src="https://picsum.photos/id/169/2500/1662"
          alt="..."
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box position={"relative"} width={"100vw"} height={"60vh"}>
        <Image
          src="https://picsum.photos/id/237/3500/2095"
          alt="..."
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box position={"relative"} width={"100vw"} height={"60vh"}>
        <Image
          src="https://picsum.photos/id/40/4106/2806"
          alt="..."
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
    </Slider>
  );
}

export default Component;
