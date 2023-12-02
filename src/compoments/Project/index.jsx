import { Box } from "@mui/material";

function Project() {
  

    return (
      <section>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src="" alt={'mockup'}/>
         <h1 style={{fontSize: '2rem'}}>titre</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               test
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               test
            </Box>
         </Box>
      </Box>
      </section>
    )
  }
  
  export default Project