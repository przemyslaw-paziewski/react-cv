import * as React from "react";
import LandingPage from "./sections/landingPage/LandingPage.js";
import { StyledEngineProvider } from "@mui/material/styles";
import AboutMe from "./sections/aboutMe/AboutMe";
import HideAppBar from "./appBar/AppBar";

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <HideAppBar />
      <LandingPage />
      <AboutMe />
    </StyledEngineProvider>
  );
}
