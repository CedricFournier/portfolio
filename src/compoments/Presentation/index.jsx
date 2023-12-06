import { Box, Typography } from "@mui/material"
import imgdev from '../../assets/img/img_dev.svg'

function Presentation() {
    return (
      <Box 
        component={'section'} 
        minHeight={'calc(100vh - 175px)'} 
        sx={{ display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center',
            background: 'green' }}
        >
        <Typography variant="h3" component="h2">
          Bonjour, <span>🤚</span> je suis Cédric Fournier
        </Typography>
        <Typography variant="h4" component="h3"margin={5}>
        Développeur Frontend React
        </Typography>
        <p>cedricfournier@gmail.com</p>
      </Box>
    )
  }
  
  export default Presentation