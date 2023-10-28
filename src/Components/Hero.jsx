import { Box, Button, styled, Typography, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

import heroImg from "../media/hero_illustration.png";
import accountingImg from "../media/accounting-illustration.png";
import CustomButton from "./CustomButton";

const Hero = (props) => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "58px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return <Box sx={{backgroundColor: "#E6F0FF", height: "75vh"}}>
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <Box sx={{flex: "1"}} m={4}>
          <Typography 
            variant="subtitle1" 
            fontWeight='bold'
            mt={3}
            color="#5A6473"
          >
            Despacho contable Millán, Tovar y Asociados
          </Typography>
          <Typography variant="h3" fontWeight="bold" color="#000336">
            {props.title}
          </Typography>
          <Typography variant="body2" sx={{fontSize: "18px", color: "#5A6473", my: 4}}>
            {props.subtitle1}
          </Typography>
          <CustomButton backgroundColor="#0F1B4C" color="#fff" buttonText="Sobre nosotros" heroBtn={true} />
        </Box>
      </Grid>

      <Grid item xs={12} sm={6}>
          <Box>
            <img 
              src={accountingImg}
              alt="despachoContable"
              style={{ height: "70%", width: "70%", marginTop: "1rem", marginBottom: "1rem"}}
            />
          </Box>
      </Grid>
    </Grid>
  </Box>; 
};

export default Hero;
