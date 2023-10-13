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

// MUI
import Fab from '@mui/material/Fab';

// Icon
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Carousel
import Carousel from 'react-material-ui-carousel';

function App() {

  const heros = [
    {
      title: "Estrategias fiscales",
      subtitle1: "Movimientos relacionados",
      img: 'https://cdn.pixabay.com/photo/2015/09/20/18/31/coins-948603_1280.jpg'
    },
    {
      title: "Contabilidad general",
      subtitle1: "Declaraciones fiscales",
      img: 'https://cdn.pixabay.com/photo/2016/04/25/23/30/house-1353389_1280.jpg'
    }
  ]

  return ( 
    <>
      <Navbar />
      <Carousel interval={10000} duration={1000}>
        {
          heros.map((hero) => (
            <div key={hero.title}>
              <Slide title={hero.title} subtitle1={hero.subtitle1} img={hero.img} />
            </div>
          ))
        }
      </Carousel>
      <Hero />
      <Companies />
      <Guide />
      <Properties />
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
