// Leaflet 
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

// Material UI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Direction = () => {

  const customIcon = new Icon ({
    iconUrl: require("../media/localizacion.png"),
    iconSize: [45, 45]
  })

  return (
    <Box p={5}>
      <Typography variant="h5" fontWeight="bold" textAlign="center">Ubicación</Typography>
      <Typography variant="h5" textAlign="center">
        Avenida Álvaro Obregón 1020 Interior 5 C.P. 62190. <br></br>Cuernavaca, Morelos.
      </Typography>
      <MapContainer center={[18.9342, -99.2404]} zoom={15}>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[18.9342, -99.2404]} icon={customIcon}>
          <Popup>
            Millán Tovar y Asociados
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  )
}

export default Direction
