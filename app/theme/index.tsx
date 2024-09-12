"use client";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material";
import React, { ReactNode } from "react";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#768A4F",
    },
    secondary: {
      main: "#768A4F",
    },
  },
};
const defaultTheme = createTheme(themeOptions);

const index = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export default index;
