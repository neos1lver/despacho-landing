// React
import { useState, useRef } from 'react';

// Material UI
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Emailjs
import emailjs from '@emailjs/browser';

const Email = () => {
  const form = useRef();

  const sendForm = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lgr1kil', 'template_pu8b60m', form.current, 'Z17xfuTP16d0OMWOd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }


  const [mailData, setMailData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMailData((prevData) => ({...prevData, [name]: value}));
  }

  const sendEmail = () => {
    //console.log(mailData);
    emailjs.sendForm('service_lgr1kil', 'template_pu8b60m', mailData, 'Z17xfuTP16d0OMWOd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <Box>
      <Stack spacing={3} py={10} px={5} alignItems="flex-start">
        <Typography 
          variant="h6" 
          fontWeight='bold'
        >
          Mándanos un correo para contactarnos.
        </Typography>
        <form ref={form} onSubmit={sendForm}>
          <TextField 
            id="nombre" 
            label="Nombre" 
            size="small" 
            fullWidth 
            name="user_name"
            onChange={handleChange}
            type="text"
            sx={{ my:2 }}
          />
          <TextField 
            id="correo" 
            label="Correo" 
            size="small" 
            fullWidth 
            name="user_email"
            onChange={handleChange}
            type="text"
            sx={{ my:2 }}
          />
          <TextField 
            id="mensaje" 
            label="Mensaje" 
            multiline  
            rows={5} 
            size="small" 
            fullWidth
            name="message"
            onChange={handleChange}
            type="text"
            sx={{ my:2 }}
          />
          <Button sx={{ my:2 }} type="submit" variant="contained">Enviar</Button>
        </form>
      </Stack>
    </Box>
  )
}

export default Email
