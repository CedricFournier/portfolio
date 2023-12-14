import { Box, Typography } from "@mui/material"
import imgdev from '../../assets/img/img_dev.svg'

function Presentation() {
    return (
      <Box
        component={'section'} 
        minHeight={'calc(100vh - 175px)'} 
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row' }}
        sx={{ 
        justifyContent: 'space-evenly', 
        alignItems: 'center',
        background: '#FFD4DB' }}
      >
        <Box textAlign={'center'}
        >
          <Typography 
            fontSize={{ xs: "25px", sm: '35px', md: "40px", lg: "45px", xl: '55px' }} 
            component="h2" 
            marginTop={'12px'}
          >
            Bonjour, <span className="hand">🤚</span> je suis Cédric Fournier
          </Typography>
          <Typography 
            fontSize={{ xs: "1rem", sm: '25px', md: "30px", lg: '35px', xl: '45px' }} 
            component="h3" 
            margin={{ xs: "10px" }}
          >
          Développeur Frontend React
          </Typography>
          <a href="mailto:cedricfournierwebdeveloper@gmail.com">cedricfournierwebdeveloper@gmail.com</a>
        </Box>
        <Box component={'img'} 
          height={{ xs: '300px', sm: '400px',  md: '500px', lg: '600px', xl: '800px' }} 
          src={imgdev} 
          alt="Dessin d'un développeur"
        />
      </Box>
    )
  }
  
  export default Presentation