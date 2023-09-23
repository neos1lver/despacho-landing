import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

import heroImg from "../media/hero_illustration.png";
import accountingImg from "../media/accounting-illustration.png";
import CustomButton from "./CustomButton";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return <Box sx={{backgroundColor: "#E6F0FF", minHeight: "80vh"}}>
    <Container>
      <Navbar />
      <CustomBox>
        <Box sx={{flex: "1"}}>
          <Typography 
            variant="body2" 
            sx={{
              fontSize: "18px", 
              color: "#687690", 
              fontWeight: "500", 
              mt: 10, 
              mb: 4
            }}
          >
            Bienvenido a Millán Tovar y Asociados
          </Typography>
          <Title variant="h1">
            Lleva tu contabilidad sin problemas.
          </Title>
          <Typography variant="body2" sx={{fontSize: "18px", color: "#5A6473", my: 4}}>
            ¡Despreocúpate de tu contabilidad! Maneja tus asuntos contables con nosotros
            de forma segura y confiable
          </Typography>
          <CustomButton backgroundColor="#0F1B4C" color="#fff" buttonText="Sobre nosotros" heroBtn={true} />

        </Box>
          <Box sx={{ flex: "1.25" }}>
            <img 
              src={accountingImg}
              alt="despachoContable"
              style={{ maxWidth: "100%", marginBottom: "2rem"}}
            />
          </Box>
      </CustomBox>
    </Container>
  </Box>; 
};

export default Hero;
