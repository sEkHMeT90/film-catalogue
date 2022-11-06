import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MovieFilter from "@mui/icons-material/MovieFilter";
import MenuIcon from "@mui/icons-material/Menu";
import { useIntl } from "react-intl";
import { NAV_ROUTES } from "./Header.constants";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isCurrentPage = (currentRoute: string) => {
    return location.pathname === currentRoute;
  };
  //TODO: Componetizar separando versión desktop y versión mobile
  return (
    <header>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <MovieFilter sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {formatMessage({
                id: "common.titleApp",
              })}
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {NAV_ROUTES.map((page) => (
                  <MenuItem
                    key={page.key}
                    onClick={() => {
                      navigate(page.route);
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography textAlign='center'>
                      {formatMessage({
                        id: page.titleTag,
                      })}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <MovieFilter sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant='h6'
              noWrap
              component='a'
              href=''
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {formatMessage({
                id: "common.titleApp",
              })}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {NAV_ROUTES.map((page) => (
                <Button
                  key={page.key}
                  onClick={() => {
                    navigate(page.route);
                  }}
                  sx={{
                    m: 2,
                    color: "white",
                    display: "block",
                    "&:hover": {
                      backgroundColor: "secondary.light",
                    },
                    ...(isCurrentPage(page.route) && {
                      borderRadius: "50",
                      backgroundColor: "primary.light",
                    }),
                  }}
                >
                  {formatMessage({
                    id: page.titleTag,
                  })}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
