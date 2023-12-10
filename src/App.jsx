// React
import { useRef } from "react";

// Componentes
import Hero from "./Components/Hero";
import Companies from "./Components/Companies";
import Guide from "./Components/Guide";
import Properties from "./Components/Properties";
import Direction from "./Components/Direction";
import Navbar from "./Components/Navbar";
import Email from "./Components/Email";
import Values from "./Components/Values";

// MUI
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';

// Icon
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Carousel
import Carousel from 'react-material-ui-carousel';

// Imágenes
import img1 from './media/sat-img.jpg';
import img2 from './media/contabilidad.jpg';

function App() {

  // Ubicaciones
  const inicio = useRef();
  const servicios = useRef();
  const nosotros = useRef();
  const valores = useRef();
  const contacto = useRef();
  const ubicacion = useRef();

  const heros = [
    {
      title: "Lleva tu contabilidad con estrategias fiscales y empresariales",
      subtitle1: "¡Despreocúpate de tu contabilidad! Maneja tus asuntos contables con nosotros de forma segura y confiable",
      img: img1
    },
    {
      title: "Lleva tu contabilidad general con nosotros",
      subtitle1: "Manejamos todo lo relacionado con declaraciones fiscales",
      img: img2 
    }
  ]

  return ( 
    <>
      <Navbar 
        inicio={inicio}
        servicios={servicios}
        nosotros={nosotros} 
        valores={valores}
        contacto={contacto}
        ubicacion={ubicacion}
      />
      <Carousel interval={3000} duration={1000} indicators={false}>
        {
          heros.map((hero) => (
            <Hero key={hero} title={hero.title} subtitle1={hero.subtitle1} img={hero.img}/>
          ))
        }
      </Carousel>
      {/*<Hero />*/}
      <Box ref={inicio}>
        <Companies />
      </Box>
      <Box ref={servicios}>
        <Guide />
      </Box>
      <Box ref={nosotros}>
        <Properties />
      </Box>
      <Box ref={valores}>
        <Values />
      </Box>
      <Box ref={contacto}>
        <Email />
      </Box>
      <Box ref={ubicacion}>
        <Direction />
      </Box>
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
