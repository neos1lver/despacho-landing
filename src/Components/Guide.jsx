import { Box, Button, styled, Typography, Grid, Card } from "@mui/material";
import React from "react";

import buyIcon from "../media/buy_icon.png";
import sellIcon from "../media/sell_icon.png";
import rentIcon from "../media/rent_icon.png";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "./CustomButton";

/* Iconos */
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BadgeIcon from '@mui/icons-material/Badge';
import GavelIcon from '@mui/icons-material/Gavel';
import StoreIcon from '@mui/icons-material/Store';
import CategoryIcon from '@mui/icons-material/Category';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Guide = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%"
    }
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Grid alignItems="stretch" justifyContent="center" direction="row" spacing={2} sx={{mt: 1, px:5}} container>
      <Grid xs={12}>
        <Typography mt={5} textAlign="center" variant="h4" sx={{color:"#000339", fontWeight: "bold"}}>Nuestros servicios</Typography>
      </Grid>
      <Grid xs={12} md={4} alignItems="space-between" sx={{mt:3}}>
        <Card sx={{m:4, height:'100%'}}>
          <Box sx={{ mt:2, display: "flex", flexDirection: "column", alignItems: "center"}}>
          <AccountBalanceIcon sx={{fontSize: 40}}/>
          <Typography 
            textAlign="center"
            variant="h5" 
            sx={{mt: 1, mb:3, color: "#3B3C45", fontWeight: "bold" }}
          >
            Servicios contables y fiscales
          </Typography>
        </Box>

        <Box sx={{ mx:4 }}>
          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Contabilidad general de personas físicas y morales
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Elaboración de estados financieros
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Elaboración de estados financieros comparativos
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Presentación de declaraciones anuales y mensuales
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Devoluciones de impuestos
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Devoluciones de impuestos
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Facturación electrónica vigente con sus respectivos complementos
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Planeaciones fiscales
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Elaboración de nóminas
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Defensa fiscal
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Alta del registro Patronal del IMSS
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Altas y Bajas en el portal IMSS
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Declaraciones estatales
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Elaboración de declaraciones y Emisiones del IMSS
          </Typography>
        </Box>
        </Card>
      </Grid>
      <Grid xs={12} md={4} alignItems="center" sx={{mt:3}}>
        <Card sx={{m:4, height:"100%"}}>
        <Box sx={{ mt:2, display: "flex", flexDirection: "column", alignItems: "center"}}>
          <BadgeIcon sx={{fontSize: 40}}/>
          <Typography 
            textAlign="center"
            variant="h5" 
            sx={{mt: 1, mb:3, color: "#3B3C45", fontWeight: "bold" }}
          >
            Trámites al R.F.C y otros similares
          </Typography>
        </Box>

        <Box sx={{ mx:4 }}>
          <Typography variant="subtitle2"  gutterBottom sx={{color:"#3B3C45"}}>
            Alta en el RFC con su respectivo régimen fiscal
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Reanudación de actividades en el R.F.C.
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Suspención de actividades en el R.F.C
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Generación de constancia de situación fiscal
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Cambio de domicilio
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Apertura de establecimiento
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Cierre de establecimiento
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Entre otros
          </Typography>

        </Box>
          </Card>
      </Grid>
      
      <Grid xs={12} md={4} alignItems="center" sx={{mt:3}}>
        <Card sx={{m:4, height:'100%'}}>
        <Box sx={{ mt:2, display: "flex", flexDirection: "column", alignItems: "center"}}>
          <GavelIcon sx={{fontSize: 40}}/>
          <Typography 
            textAlign="center"
            variant="h5" 
            sx={{mt: 1, mb:3, color: "#3B3C45", fontWeight: "bold" }}
          >
            Servicios de auditoría
          </Typography>
        </Box>

        <Box sx={{ mx:4 }}>
          <Typography variant="subtitle2"  gutterBottom sx={{color:"#3B3C45"}}>
            Realización de auditorías financieras para personas morales
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Realización de auditorías financieras para personas físicas
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Informes de auditorias conforme a las leyes vigentes          
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Realización de estados financieros comparativos con sus respectivas notas
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Implementación de control interno dentro de la empresa
          </Typography>
        </Box>
          </Card>
      </Grid>

      <Grid xs={12} md={4} alignItems="center" sx={{mt:3}}>
        <Card sx={{m:4, height:'100%'}}>
        <Box sx={{ mt:2, display: "flex", flexDirection: "column", alignItems: "center"}}>
          <StoreIcon sx={{fontSize: 40}}/>
          <Typography 
            textAlign="center"
            variant="h5" 
            sx={{mt: 1, mb:3, color: "#3B3C45", fontWeight: "bold" }}
          >
            Consultoría Empresarial
          </Typography>
        </Box>

        <Box sx={{ mx:4 }}>
          <Typography variant="subtitle2"  gutterBottom sx={{color:"#3B3C45"}}>
            Solución a problemas generales
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Identificación de áreas de oportunidad
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Herramientas y aprendizajes que propicien un cambio dentro de la organización
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Gestión de recursos humanos
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Diagnósticos organizacionales
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Planeación financiera
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Desarrollo personal
          </Typography>
        </Box>
          </Card>
      </Grid>

      <Grid xs={12} md={4} alignItems="center" sx={{mt:3}}>
        <Card sx={{m:4, height:'100%'}}>
        <Box sx={{ mt:2, display: "flex", flexDirection: "column", alignItems: "center"}}>
          <CategoryIcon sx={{fontSize: 40}}/>
          <Typography 
            textAlign="center"
            variant="h5" 
            sx={{mt: 1, mb:3, color: "#3B3C45", fontWeight: "bold" }}
          >
            Sectores
          </Typography>
        </Box>

        <Box sx={{ mx:4 }}>
          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Comercio
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Servicios
          </Typography>

          <Typography variant="subtitle2"  gutterBottom sx={{color:"#3B3C45"}}>
            Gobierno y servicios públicos
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Restaurantero
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Industria y manufactura
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Publicidad, tecnología y marketing
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Inmobiliario y construcción
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Salud
          </Typography>
        </Box>
          </Card>
      </Grid>

      <Grid xs={12} md={4} alignItems="center" sx={{mt:3}}>
        <Card sx={{m:4, height:'100%'}}>
        <Box sx={{ mt:2, display: "flex", flexDirection: "column", alignItems: "center"}}>
          <AutoStoriesIcon sx={{fontSize: 40}}/>
          <Typography 
            textAlign="center"
            variant="h5" 
            sx={{mt: 1, mb:3, color: "#3B3C45", fontWeight: "bold" }}
          >
            Defensa fiscal
          </Typography>
        </Box>

        <Box sx={{ mx:4 }}>
          <Typography variant="subtitle2"  gutterBottom sx={{color:"#3B3C45"}}>
            Realización de medios de defensa fiscal
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Soluciones a requerimientos ante el SAT, IMSS o cualquier autoridad competente
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Planeación fiscal
          </Typography>

          <Typography variant="subtitle2" gutterBottom sx={{color:"#3B3C45"}}>
            Estrategias fiscales
          </Typography>
        </Box>
          </Card>
      </Grid>
    </Grid>
  )
};

export default Guide;
