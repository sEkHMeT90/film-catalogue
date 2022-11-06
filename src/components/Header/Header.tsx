import React from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export const Header = () => {
  return (
    <header>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <HeaderDesktop />
            <HeaderMobile />
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
