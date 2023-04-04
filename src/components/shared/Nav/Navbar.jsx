import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Navbar = () => {
  const [value, setValue] = React.useState(-1);

  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          marginBottom: "0.5rem",
          backgroundColor: "#e0f2fe",
          py: {
            xs: "0.9rem",
            sm: "0rem",
          },
          width: "100%",

          // display: {
          //   xs: "none",
          //   sm: "grid",
          // },
          alignItems: "center",
        }}
      >
        <Container>
          <Grid
            sx={{
              alignItems: "center",
            }}
            container
          >
            <Grid item xs={12} sm={2} md={2}>
              <Typography
                sx={{
                  backgroundColor: "#0c4a6e",
                  height: "2rem",
                  borderRadius: "3px",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: "bold",
                  color: "#f3f4f6",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/")}
              >
                Clean YouTube
              </Typography>
            </Grid>

            <Grid
              sx={{
                display: {
                  xs: "none",
                  sm: "grid",
                },
              }}
              item
              xs={12}
              sm={10}
              md={10}
            >
              <BottomNavigation
                // showLabels
                sx={{
                  backgroundColor: "#e0f2fe",

                  justifyContent: "flex-end",
                }}
                value={value}
                onChange={(_, newValue) => {
                  setValue(newValue);
                }}
              >
                <BottomNavigationAction
                  onClick={() => navigate("/")}
                  label="Home"
                  icon={<HomeOutlinedIcon />}
                />
              </BottomNavigation>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
