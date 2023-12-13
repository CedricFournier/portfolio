import logohtml from '../../assets/img/logo_html.svg';
import logocss from '../../assets/img/logo_css.svg';
import logojavascript from '../../assets/img/logo_javascript.svg';
import logoreact from '../../assets/img/logo_react.svg';
import logofirebase from '../../assets/img/logo_firebase.svg';
import logomangodb from '../../assets/img/logo_mangodb.svg';
import { Box, Grid, Typography } from '@mui/material';

function Skill() {

  const logoskill = [
    {
      src: logohtml,
      alt: "logo de HTML"
    },
    {
      src: logocss,
      alt: "logo de CSS"
    },
    {
      src: logojavascript,
      alt: "logo de javascript"
    },
    {
      src: logoreact,
      alt: "logo de react"
    },
    {
      src: logofirebase,
      alt: "logo de firebase"
    },
    {
      src: logomangodb,
      alt: "logo de mangodb"
    }
  ]

    return (
      <Box 
        component={'section'}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#F7C9B6' }}
        >
        <Typography fontSize={{ xs: "30px", sm: '35px', md: "40px", lg: "45px" }} component="h2" marginTop={5}>
          Mes compétences
        </Typography>
        <Box width={'100%'} margin={{ xs: '20px 0', lg: '40px 0' }}>
        <Grid container spacing={2} >
          {logoskill.map((item, index) => (
            <Grid key={index} item xs={6} sm={4} md={2} display={'flex'} justifyContent={'center'} >
              <Box component={'img'} width={'70px'} src={item.src} alt={item.alt} />
          </Grid>
          ))} 
        </Grid>
        </Box>
      </Box>
    )
  }
  
  export default Skill