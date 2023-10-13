import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const WhatsApp = () => {
  return (
    <Box>
      <Button onClick={() => {
        window.open('https://wa.me/+527772062914?text=Hola')
      }}>Test</Button>
    </Box>
  )
}

export default WhatsApp
