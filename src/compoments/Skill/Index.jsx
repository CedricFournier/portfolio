import logohtml from '../../assets/img/logo_html.svg';
import logocss from '../../assets/img/logo_css.svg';
import logojavascript from '../../assets/img/logo_javascript.svg';
import logoreact from '../../assets/img/logo_react.svg';
import logofirebase from '../../assets/img/logo_firebase.svg';
import logomangodb from '../../assets/img/logo_mangodb.svg';
import { Box, Stack, Typography } from '@mui/material';

function Skill() {
    return (
      <Box 
        component={'section'}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#EFF1DB' }}
        >
        <Typography variant="h3" component="h2" marginTop={5}>
        Mes compétences
        </Typography>
        <Box minHeight={'calc(50vh - 175px)'} sx={{ display: 'flex', alignItems: 'center' }}>
          <Stack direction="row" spacing={10}>
            <img className='logoskill' src={logohtml} alt="logo de HTML" />
            <img className='logoskill' src={logocss} alt="logo de CSS" />
            <img className='logoskill' src={logojavascript} alt="logo de Javascript" />
            <img className='logoskill' src={logoreact} alt="logo de React" />
            <img className='logoskill' src={logofirebase} alt="logo de Firebase" />
            <img className='logoskill' src={logomangodb} alt="logo de Mangodb" />
          </Stack>   
        </Box>    
      </Box>
    )
  }
  
  export default Skill