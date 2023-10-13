// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Slide = ({title, subtitle1, img}) => {
  return (
    <Grid container spacing={2} >
      <Grid xs={12} md={6}>
        <img 
          width='100%'
          display='block'
          src={img}
          alt="despachoContable"
        />
      </Grid>

      <Grid xs={12} md={6} sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <Box>
          <Typography variant="h6" textAlign="center">
            {title}
          </Typography>
          <Typography variant="subtitle1" textAlign="center">
            {subtitle1}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  ) 
}

export default Slide
