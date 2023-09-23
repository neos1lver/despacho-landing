import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import logoImg from "../media/logo.png";
import starsImg from "../media/Star.png";
import logosImg from "../media/logos.png";
import logoXL from "../media/logoXL.png";

const Companies = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    }
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    }
  }));

  return <Box sx={{mt: 10}}>
    <CustomContainer>
      <CustomBox>
        <img src={logoXL} alt="logo" style={{maxWidth: "100%"}} />
        <Typography 
          variant="body2" 
          sx={{
            color: "#7D8589",
            fontSize: "16px",
            fontWeight: "bold",
            mt: 5 
          }}
        >
          Contamos con más de 30 años de experiencia y un gran número de clientes
          que confían en nosotros.
        </Typography>
      </CustomBox>

      <Box sx={{mt: 5}}>
        <img src={starsImg} alt="stars" style={{maxWidth: "100%"}} />
        <Typography 
          variant="body2" 
          sx={{
            color: "#7D8589",
            fontSize: "16px",
            fontWeight: "bold",
            mt: 2
          }}
        >
          Excelencia con nuestros clientes.
        </Typography>
      </Box>
    </CustomContainer>

      <Container sx={{display: "flex", flexDirection: "column" }}>
        <img src={logosImg} alt="logosimagen" />
      </Container>
    </Box>;
};

export default Companies;
