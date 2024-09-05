"use client";
import Image from "next/image";
import SwipeableViews from "react-swipeable-views";
import { Box, Stack } from "@mui/material";
function Component() {
  return (
    <Box height={"40vh"}>
      <Stack direction={"row"} overflow={"scroll"}>
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
      </Stack>
    </Box>
  );
}
export default Component;
