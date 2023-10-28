// React
// import { useState } from "react";

// Componentes
import Hero from "./Components/Hero";
import Companies from "./Components/Companies";
import Guide from "./Components/Guide";
import Properties from "./Components/Properties";
import Direction from "./Components/Direction";
import Slide from "./Components/Slide";
import Navbar from "./Components/Navbar";
import Email from "./Components/Email";

// MUI
import Fab from '@mui/material/Fab';

// Icon
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Carousel
import Carousel from 'react-material-ui-carousel';

function App() {

  const heros = [
    {
      title: "Lleva tu contabilidad con estrategias fiscales y empresariales",
      subtitle1: "¡Despreocúpate de tu contabilidad! Maneja tus asuntos contables con nosotros de forma segura y confiable",
      img: 'https://cdn.pixabay.com/photo/2015/09/20/18/31/coins-948603_1280.jpg'
    },
    {
      title: "Lleva tu contabilidad general con nosotros",
      subtitle1: "Manejamos todo lo relacionado con declaraciones fiscales",
      img: 'https://cdn.pixabay.com/photo/2016/04/25/23/30/house-1353389_1280.jpg'
    }
  ]

  return ( 
    <>
      <Navbar />
      <Carousel interval={3000} duration={1000}>
        {
          heros.map((hero) => (
            <Hero key={hero} title={hero.title} subtitle1={hero.subtitle1}/>
          ))
        }
      </Carousel>
      {/*<Hero />*/}
      <Companies />
      <Guide />
      <Properties />
      <Email />
      <Direction />
      {/*<WhatsApp />*/}
      <Fab 
        color="success" 
        sx={{ 
          position: 'fixed', 
          bottom: 16, 
          right: 20 
        }} 
        onClick={() => {
          window.open('https://wa.me/+527772062914?text=¡Hola! Me gustaría saber más información acerca de sus servicios.')
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </>
  );
}

export default App;
