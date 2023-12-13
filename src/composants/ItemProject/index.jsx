import { Box, Button, Typography } from "@mui/material"

function ItemProject(props) {
    return (
        <Box sx={{ display: 'flex',
                       flexDirection: 'column',
                       justifyContent: 'center',
                       alignItems: 'center', 
                       marginBottom: '40px',
                       p: 5,
                       boxShadow: 3,
                       background: '#F9F1F0' }}>
            <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', marginBottom: '15px' }}>
                {props.title}
            </Typography>
            <Box component={'img'} sx={{ width: '100%', border: '3px solid' }} src={props.src} alt={props.alt}/>
            <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                alignItems={'center'} fontSize={'1.5rem'} pt={'2rem'}>
                <Button variant="contained" sx={{ width: 300, borderRadius: '16px', background: '#AE7460', color: 'white' }} href={props.url}>
                    Live Demo
                </Button>
                <Button variant="contained" sx={{ width: 300, borderRadius: '16px', background: '#AE7460', color: 'white' }} href={props.urlgit}>
                    Repo Github
                </Button>
            </Box>
        </Box>
    )
  }
  
  export default ItemProject