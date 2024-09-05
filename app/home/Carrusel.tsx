"use client";
import Image from "next/image";
import { Box, Stack } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Component() {
  const setting = {
    dots: true,
  };
  return (
    <Box height={"40vh"}>
      <Slider {...setting}>
        <Box position={"relative"} width={"100vw"} height={"40vh"}>
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
            fill
          />
        </Box>
        <Box position={"relative"} width={"100vw"} height={"40vh"}>
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
            fill
          />
        </Box>
        <Box position={"relative"} width={"100vw"} height={"40vh"}>
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
            fill
          />
        </Box>
        <Box position={"relative"} width={"100vw"} height={"40vh"}>
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
            fill
          />
        </Box>
        <Box position={"relative"} width={"100vw"} height={"40vh"}>
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
            fill
          />
        </Box>
      </Slider>
    </Box>
  );
}
export default Component;
