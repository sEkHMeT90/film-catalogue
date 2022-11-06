import React from "react";
import { Typography, Box, Button } from "@mui/material";
import MovieFilter from "@mui/icons-material/MovieFilter";
import { useIntl } from "react-intl";
import { NAV_ROUTES } from "./Header.constants";
import { useNavigate, useLocation } from "react-router-dom";

const HeaderDesktop = () => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const location = useLocation();
  const isCurrentPage = (currentRoute: string) => {
    return location.pathname === currentRoute;
  };
  return (
    <>
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

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          pl: { md: 10 },
        }}
      >
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
    </>
  );
};

export default HeaderDesktop;
