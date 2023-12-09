// Componentes
import { Grid, Box, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

// Imágenes
import etica from "../media/etica.jpg"
import responsabilidad from "../media/responsabilidad.jpg"
import confianza from "../media/confianza.jpg"

const Values = () => {

  const ValueCard = ({title, text, img}) => (
    <Card sx={{ maxWidth: 500, marginTop: 2}}>
      <CardMedia
        component="img"
        height="170"
        image={img}
        alt="altimg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  )

  return (
    <Grid
      alignItems="center"
      justifyContent="center"
      direction="row"
      sx={{mt: 1, p: 1}}
      container
    >
      <Grid xs={12}>
        <Typography 
          mt={5} 
          textAlign="center" 
          variant="h4" 
          sx={{color:"#000339", fontWeight: "bold"}}
        >
          Valores
        </Typography>
      </Grid>

      <Grid xs={12} sm={4}>
        <ValueCard 
          title="Etica profesional" 
          text="Tratamos nuestras soluciones con el máximo respeto, cuidando todos los aspectos de la ética profesional." 
          img={etica}
        />
      </Grid>

      <Grid xs={12} sm={4}>
        <ValueCard 
          title="Responsabilidad" 
          text="Nuestro trabajo se basa en un estricto órden de responsabilidad para la satisfacción de nuestros clientes." 
          img={responsabilidad}
        />
      </Grid>

      <Grid xs={12} sm={4}>
        <ValueCard 
          title="Confianza" 
          text="Buscamos generar la confianza necesaria entre los miembros de nuestro despacho y nuestros clientes, creando un entorno de trabajo seguro." 
          img={confianza}
        />
      </Grid>
    </Grid>
  ) 
}

export default Values;
