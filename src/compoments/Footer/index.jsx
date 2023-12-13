import { Box } from "@mui/material"

function Footer() {
    return (
      <Box 
        component={'footer'} 
        height={'100px'} 
        display={'flex'} 
        justifyContent={'center'}
        alignItems={'center'}
        bgcolor={'white'}
        textAlign={'center'}
        >
        <p>Portfolio created with React, Material UI and Firebase</p>
      </Box>
    )
  }
  
  export default Footer