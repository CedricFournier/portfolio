import { Box, Typography } from "@mui/material"
import Getproject from "../../compoments/Getproject"
import Postproject from "../../compoments/Postproject"

function Admin() {
    return (
      <Box 
        component={'main'} 
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
        <Box component={'section'} maxWidth="xl" sx={{ width: '100%' }}>
          <Typography 
            variant="h5" 
            component="h2" 
            sx={{ bgcolor: 'primary.main', textAlign: 'center', p: 2 }}
          >
            AJOUTER UN PROJET
          </Typography>
          <Postproject />
        </Box>
        <Box component={'section'} maxWidth="xl" sx={{ width: '100%', mt: '30px' }}>
          <Typography 
            variant="h5" 
            component="h2" 
            sx={{ bgcolor: 'primary.main', textAlign: 'center', p: 2 }}
          >
            GERER LES PROJETS
          </Typography>
          <Getproject />
        </Box>
      </Box>
    )
  }
  
  export default Admin