import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Íconos
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import logoImg from "../media/logo.png";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";

export const Navbar = ({ inicio, servicios, nosotros, valores, contacto, ubicacion }) => {
  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (e) => {
    if (
      e.type === "keydown" &&
      (e.type === "Tab" || e.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  }

  const list = (anchor) => (
    <Box 
      sx={{width: anchor === "top" || anchor === "bottom" ? "auto" : 250}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inicio", "Servicios", "Nosotros", "Valores", "Contacto", "Ubicación"].map(
          (text, index) => ( 
            <ListItem key={text} dissablePadding>
              <ListItemButton 
                onClick={() =>{
                  scrollDown(
                    index === 0 && inicio ||
                    index === 1 && servicios ||
                    index === 2 && nosotros ||
                    index === 3 && valores ||
                    index === 4 && contacto ||
                    index === 5 && ubicacion
                  )
                }}
              >
                <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <DesignServicesIcon />}
                  {index === 2 && <PeopleAltIcon />}
                  {index === 3 && <ListAltIcon />}
                  {index === 4 && <ContactsIcon />}
                  {index === 5 && <LocationOnIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
        ))}
      </List>
    </Box>
  ) 

  

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#4F5361",
    fontSize: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    }
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  return (
  <NavbarContainer>
    <Box 
      sx={{
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        gap: "2.5rem"
      }}>
      <Box sx={{display: "flex", alignItems: "center"}}>
        <CustomMenuIcon onClick={toggleDrawer("left", true)}/>
        <Drawer anchor="left" open={mobileMenu["left"]} onClose={toggleDrawer("left", false)}>
          {list("left")}
        </Drawer>
        <NavbarLogo src={logoImg} alt="logo" />
      </Box>

      <NavbarLinksBox>
        <NavLink variant="body2" onClick={() => scrollDown(inicio)}>Inicio</NavLink>
        <NavLink variant="body2" onClick={() => scrollDown(servicios)}>Servicios</NavLink>
        <NavLink variant="body2" onClick={() => scrollDown(nosotros)}>Nosotros</NavLink>
        <NavLink variant="body2" onClick={() => scrollDown(valores)}>Valores</NavLink>
        <NavLink variant="body2" onClick={() => scrollDown(contacto)}>Contacto</NavLink>
        <NavLink variant="body2" onClick={() => scrollDown(ubicacion)}>Ubicación</NavLink>
      </NavbarLinksBox>

    </Box>
  </NavbarContainer>
  );
};

export default Navbar;
