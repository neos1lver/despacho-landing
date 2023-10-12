import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// React WhatsApp
import ReactWhatsapp from 'react-whatsapp';

const WhatsApp = () => {
  return (
    <Box>
      <Button onClick={() => {
        window.open('https://wa.me/557621286506?text=Hola')
      }}>Test</Button>
      <ReactWhatsapp number="55-762-128-6506" message="Hello World!!!">
        Mandar mensaje
      </ReactWhatsapp>
    </Box>
  )
}

export default WhatsApp
