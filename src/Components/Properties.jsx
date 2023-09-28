import { Box, Container, styled, Typography, Grid } from "@mui/material";
import React from "react";
import House from "./House";
import { properties } from "../properties";

/* Imagenes */
import despachoImg from "../media/despacho.jpg";
import logoImg from "../media/logoXL.png";

const Properties = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center"
    }
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center"
    }
  }));

  return (
    <Grid container spacing={2} mt={5} p={7} sx={{ backgroundColor: "#F5FAFE"}}>
      <Grid xs={12} md={8} alignItems="center" sx={{px:3}}>
        <Typography sx={{color:"#000339", fontSize: "35px", fontWeight: "bold"}}>
          Sobre nosotros
        </Typography>

        <Typography textAlign="justify" variant="body2" sx={{color:"#3B3C45", fontWeight: "bold"}}>
          Contamos con 30 años de experiencia. Consolidados por nuestra especialidad en 
          la materia contable, fiscal, financiera y administrativa en operaciones empresariales 
          tanto para personas físicas como personas morales.
        </Typography>

        <Typography marginTop={3} textAlign="justify" variant="body2" sx={{color:"#3B3C45", fontWeight: "bold"}}>
          Cubriendo las necesidades empresariales y operacionales de nuestros clientes para 
          reconocer el panorama y ofrecer estrategias financieras, contables y fiscales, nos 
          apegamos a nuestro código de ética por excelencia brindando los servicios 
          profesionales en los distintos sectores económicos, nos hace ser reconocidos por 
          nuestros clientes. 
        </Typography>

        <Typography marginTop={3} textAlign="justify" variant="body2" sx={{color:"#3B3C45", fontWeight: "bold"}}>
          Nuestro objetivo es impulsar negocios implementando estrategias empresariales, 
          satisfaciendo con servicios profesionales de calidad superando las expectativas 
          del cliente.
        </Typography>
      </Grid>

      <Grid xs={12} md={4} sx={{p:5}}>
        <img style={{maxWidth:'100%'}} src={logoImg} alt="despachoImg"  />
      </Grid>
    </Grid>
    );
};

export default Properties;
